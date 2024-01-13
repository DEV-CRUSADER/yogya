import os,sys

import requests
import pandas as pd
import json
import random
import datetime,time
import logging
import re
import urllib.parse 

mode ='vpn'

if(mode=='vpn'):
    def nsefetch(payload):
        if (("%26" in payload) or ("%20" in payload)):
            encoded_url = payload
        else:
            encoded_url = urllib.parse.quote(payload, safe=':/?&=')
        payload_var = 'curl -b cookies.txt "' + encoded_url + '"' + curl_headers + ''
        try:
            output = os.popen(payload_var).read()
            output=json.loads(output)
        except ValueError:  # includes simplejson.decoder.JSONDecodeError:
            payload2 = "https://www.nseindia.com"
            output2 = os.popen('curl -c cookies.txt "'+payload2+'"'+curl_headers+'').read()
    
            output = os.popen(payload_var).read()
            output=json.loads(output)
        return output
if(mode=='local'):
    def nsefetch(payload):
        try:
            output = requests.get(payload,headers=headers).json()
            print(output)
        except ValueError:
            s =requests.Session()
            output = s.get("http://nseindia.com",headers=headers)
            output = s.get(payload,headers=headers).json()
        return output


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

#Constants
indices = ['NIFTY','FINNIFTY','BANKNIFTY']

# # Nifty Indicies Site

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
@staticmethod
def nse_index():
    payload = nsefetch('https://iislliveblob.niftyindices.com/jsonfiles/LiveIndicesWatch.json')
    payload = pd.DataFrame(payload["data"])
    return payload

@staticmethod
def nse_get_index_list():
    payload = nsefetch('https://iislliveblob.niftyindices.com/jsonfiles/LiveIndicesWatch.json')
    payload = pd.DataFrame(payload["data"])
    return payload["indexName"].tolist()

@staticmethod
def index_info(index):
    payload = nsefetch("https://www.nseindia.com/api/allIndices")
    for x in range(0, len(payload["data"])):
        if(payload["data"][x]["index"]==index):
            return payload["data"][x]
        
@staticmethod
def index_history(symbol,start_date,end_date):
    data = "{'name':'"+symbol+"','startDate':'"+start_date+"','endDate':'"+end_date+"'}"
    payload = requests.post('https://niftyindices.com/Backpage.aspx/getHistoricaldatatabletoString', headers=niftyindices_headers,  data=data).json()
    payload = json.loads(payload["d"])
    payload=pd.DataFrame.from_records(payload)
    return payload

@staticmethod
def index_pe_pb_div(symbol,start_date,end_date):
    data = "{'name':'"+symbol+"','startDate':'"+start_date+"','endDate':'"+end_date+"'}"
    payload = requests.post('https://niftyindices.com/Backpage.aspx/getpepbHistoricaldataDBtoString', headers=niftyindices_headers,  data=data)
    status_code = payload.status_code
    payload = payload.json()
    payload = json.loads(payload["d"])
    payload=pd.DataFrame.from_records(payload)
    return payload, status_code