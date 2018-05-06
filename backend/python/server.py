#server.py

#da real backend
#satori channels needed

import time
from satori.rtm.client import make_client, SubscriptionMode
import dbserver.py
import json
import requests
global p_name
global patientdata

def pullpatientdata(p_name):
	#this is where patient data is taken from.

	url = 'https://api.redoxengine.com/query'
	payload = open("request.json")
	headers = {'content-type': 'application/json', 'Authorization: Bearer fc4095a9-046c-435a-86d6-c26922398e4f'}
	r = requests.post(url, data=payload, headers=headers)



endpoint = "wss://.apisatori.com"
appkey = ""


class SubscriptionObserver(object):
    def on_enter_subscribed(self):
        print('Subscribed to: help')

    def on_subscription_data(self, pdu):
        for service1 in pdu['messages']:
            patientjson = pullpatientdata[messages]


            return  patientjson

    # def on_enter_failed(self, reason):
    #     print('Subscription failed:', reason, file=sys.stderr)

with make_client(endpoint=endpoint, appkey=appkey) as client:
    print('Connected to Satori RTM!')
    observer = SubscriptionObserver()
    client.subscribe('help', SubscriptionMode.SIMPLE, observer)

    try:
      while True:
        time.sleep(1)
    except KeyboardInterrupt:
        pass

