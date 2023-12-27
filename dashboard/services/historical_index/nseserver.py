import logging
import pandas as pd
import datetime
import os
import requests
import json
import urllib.parse

log = logging.getLogger(__name__)

class nsepythonserver():
    log.info("nsepythonserver called")

    headers = {
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0',
        'DNT': '1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36',
        'Sec-Fetch-User': '?1',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-Mode': 'navigate',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9,hi;q=0.8',
    }

    #Curl headers
    curl_headers = ''' -H "authority: beta.nseindia.com" -H "cache-control: max-age=0" -H "dnt: 1" -H "upgrade-insecure-requests: 1" -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36" -H "sec-fetch-user: ?1" -H "accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9" -H "sec-fetch-site: none" -H "sec-fetch-mode: navigate" -H "accept-encoding: gzip, deflate, br" -H "accept-language: en-US,en;q=0.9,hi;q=0.8" --compressed'''

    run_time=datetime.datetime.now()

    @staticmethod
    def nsefetchVPN(payload):
        if (("%26" in payload) or ("%20" in payload)):
            encoded_url = payload
        else:
            encoded_url = urllib.parse.quote(payload, safe=':/?&=')
        payload_var = 'curl -b cookies.txt "' + encoded_url + '"' + nsepythonserver.curl_headers + ''
        try:
            output = os.popen(payload_var).read()
            output=json.loads(output)
        except ValueError:  # includes simplejson.decoder.JSONDecodeError:
            payload2 = "https://www.nseindia.com"
            output2 = os.popen('curl -c cookies.txt "'+payload2+'"'+ nsepythonserver.curl_headers +'').read()
    
            output = os.popen(payload_var).read()
            output=json.loads(output)
        return output

    @staticmethod
    def nsefetchLOCAL(payload):
        try:
            output = requests.get(payload,headers=nsepythonserver.headers).json()
            print(output)
        except ValueError:
            s =requests.Session()
            output = s.get("http://nseindia.com",headers=nsepythonserver.headers)
            output = s.get(payload,headers=nsepythonserver.headers).json()
        return output

    @staticmethod
    def nse_index():
        payload = nsepythonserver.nsefetch('https://iislliveblob.niftyindices.com/jsonfiles/LiveIndicesWatch.json')
        payload = pd.DataFrame(payload["data"])
        return payload
    @staticmethod
    def nse_get_index_list():
        payload = nsepythonserver.nsefetchLOCAL('https://iislliveblob.niftyindices.com/jsonfiles/LiveIndicesWatch.json')
        payload = pd.DataFrame(payload["data"])
        return payload["indexName"].tolist()
    
    @staticmethod
    def index_pe_pb_div(symbol,start_date,end_date):
        log.info("index_pe_pb_div called from custom nsepythonserver")

        data = "{'name':'"+symbol+"','startDate':'"+start_date+"','endDate':'"+end_date+"'}"
        payload = requests.post('https://niftyindices.com/Backpage.aspx/getpepbHistoricaldataDBtoString', 
                                headers=nsepythonserver.get_neifty_indices_headers(),
                                data=data
                            )
        
        payload = json.loads(payload.text)
        return payload
    

    @staticmethod
    def get_neifty_indices_headers():

        log.info("get_neifty_indices_headers called from custom nsepythonserver")

        niftyindices_headers = {
            'Connection': 'keep-alive',
            'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'DNT': '1',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
            'Content-Type': 'application/json; charset=UTF-8',
            'Origin': 'https://niftyindices.com',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://niftyindices.com/reports/historical-data',
            'Accept-Language': 'en-US,en;q=0.9,hi;q=0.8',
        }

        
        session = requests.Session()

        cookie_url = "https://www.niftyindices.com/reports/historical-data"
        cookies_response = session.get(cookie_url, headers=niftyindices_headers)

        session.cookies.update(cookies_response.cookies)

        niftyindices_headers['Cookie'] = f"ak_bmsc={session.cookies.get_dict().get('ak_bmsc')}"
        
        return niftyindices_headers