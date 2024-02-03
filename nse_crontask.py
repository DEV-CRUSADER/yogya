import psycopg2
from datetime import datetime, timedelta
from pathlib import Path
import os
from dotenv import load_dotenv

import nsepythonserver as nse

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
conn = psycopg2.connect(
    host=DB_HOST,
    port=DB_PORT,
    database=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD
)

# # Create a cursor
cursor = conn.cursor()

# # Get the latest date from the database table
cursor.execute("SELECT MAX(date) FROM dashboard_indexdatafromnse LIMIT 1")
latest_date = cursor.fetchone()[0]

print(latest_date)

# Calculate the next date
next_date = latest_date + timedelta(days=1)

# Convert the next date back to a string if needed
start_data = next_date.strftime('%Y-%m-%d')

print(start_data)

# # If there is no data in the table yet, set a default date
# if latest_date is None:
#     latest_date = datetime(2000, 1, 1)
# else:
#     latest_date += timedelta(days=1)  # Move to the day after the latest date

# # Generate new data starting from the day after the latest date
# new_data = [
#     {'date': latest_date + timedelta(days=i), 'value': i}  # Replace 'value' with your actual column name
#     for i in range(5)  # Change the range according to how many days of new data you want to insert
# ]

# # Insert new data into the database
# for data in new_data:
#     cursor.execute("INSERT INTO your_table_name (date, value) VALUES (%s, %s)", (data['date'], data['value']))

# # Commit the changes
# conn.commit()

# # Close the cursor and connection
# cursor.close()
# conn.close()
