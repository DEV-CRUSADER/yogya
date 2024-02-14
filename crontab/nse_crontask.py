import psycopg2
import time
from datetime import datetime, timedelta
from pathlib import Path
import os
from dotenv import load_dotenv
import uuid
import random
import logging
import tempfile

import nsepythonserver as nse

temp_dir = tempfile.gettempdir()

log_file_path = os.path.join(temp_dir, 'crontab.log')

logging.basicConfig(filename=log_file_path, level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logging.info(f"Starting the crontab task for date: {datetime.now().strftime('%Y-%m-%d')}")

BASE_DIR = Path(__file__).resolve().parent

APP_ENV = os.getenv('APP_ENV', 'dev')
env_path = ''

if APP_ENV == 'dev':
    env_path = 'env/.dev'
elif APP_ENV == 'prod':
    env_path = 'env/.prod'

env_path = os.path.join(BASE_DIR, env_path)

load_dotenv(env_path)  # Load environment variables from .env.

DB_HOST = os.getenv('DB_HOST', None)
DB_PORT = os.getenv('DB_PORT', None)
DB_NAME = os.getenv('DB_NAME', None)
DB_USER = os.getenv('DB_USERNAME', None)
DB_PASSWORD = os.getenv('DB_PASS', None)

# # Connect to the PostgreSQL database
logging.info("Connecting to the PostgreSQL database")
try:
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
except (Exception, psycopg2.DatabaseError) as error:
    logging.error(f"Error: {error}")
    raise error

# # Create a cursor
cursor = conn.cursor()

# # Get the latest date from the database table
logging.info("Fetching the latest date from the database table")
cursor.execute("SELECT MAX(date) FROM dashboard_indexdatafromnse LIMIT 1")
latest_date = cursor.fetchone()[0]

# Calculate the next date
next_date = latest_date + timedelta(days=1)

start_date = next_date.strftime('%Y-%m-%d')
end_date = datetime.now().strftime('%Y-%m-%d')
context = []

def filter_index_data(data):
    data = data.replace('-', 0).replace('', 0).astype(float)
    data[data > 200] = 0
    return data

logging.info(f"Fetching symbols and their ids from the database.")
cursor.execute("SELECT symbol, id FROM dashboard_indexlists")
index_list = cursor.fetchall()

for index in index_list:

    nse_data_status = True

    while nse_data_status:
        logging.info(f"Fetching data for {index[0]} from NSE server ... start_date: {start_date} end_date: {end_date}")
        try:
            data = nse.index_pe_pb_div(symbol=index[0], 
                                        start_date=start_date, 
                                        end_date=end_date)
            nse_data_status = False
        except Exception as e:
            print(f"Error retrying in 1 minutes. {e}")
            time.sleep(60)
            continue
    if data.empty:
        continue

                        
    data['pb'] = filter_index_data(data=data['pb'])
    data['pe'] = filter_index_data(data=data['pe'])
    data['divYield'] = filter_index_data(data=data['divYield'])

    for data_index,item in data.iterrows():
        current_datetime = datetime.now().strftime("%Y-%m-%d %H:%M:%S%z")
        random.seed()
        context.append({
            "created_at": current_datetime,
            "updated_at": current_datetime,
            "index_name": item["Index Name"],
            "date": datetime.strptime(item["DATE"], '%d %b %Y').date(),
            "pb": item["pb"],
            "pe": item["pe"],
            "divYield": item["divYield"],
            "symbol_id": index[1],
        })
    # time.sleep(5)

logging.info(f"Inserting data into the database table")
for item in context:
    item["id"] = str(uuid.uuid4())

try:
    insert_statement = """
        INSERT INTO dashboard_indexdatafromnse (
            created_at, updated_at, id, index_name, date, pb, pe, divyield, symbol_id   
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    cursor.executemany(insert_statement, [(
        item["created_at"],
        item["updated_at"],
        item["id"],
        item["index_name"],
        item["date"],
        item["pb"],
        item["pe"],
        item["divYield"],
        item["symbol_id"],
    ) for item in context])
    conn.commit()
    logging.info(f"Data inserted successfully")

except (Exception, psycopg2.DatabaseError) as error:
    logging.error(f"Error: {error}")
finally:
    if conn is not None:
        conn.close()
        logging.info("Database connection closed.")
        logging.info(f"Ending the crontab task for date: {datetime.now().strftime('%Y-%m-%d')}")
