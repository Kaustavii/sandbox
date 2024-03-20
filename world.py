# get data from weaather api
import time
import ast
import urllib.request
def gather_data():
    x = input('what is the zipcode')
    address = 'http://api.openweathermap.org/data/2.5/weather?zip= + x + ,us&appid=c92cf2527c9c4f0bd4df3e0c1daee211'
    webcontent = urllib.request.urlopen(address)
    response = webcontent.read()
    webcontent.close()
    print (response)

def hourly(y):
    gather_data()
    time.sleep(3600)
    
