import urllib.request
import ast
import time
import pylab
import discord
import nest_asyncio

z = input('Input any zipcode: ')
address = 'http://api.openweathermap.org/data/2.5/weather?zip=' + z + ',us&appid=c92cf2527c9c4f0bd4df3e0c1daee211'


def getSiteContents(url):
    #function by Mr. Goldsmith
    webcontent = urllib.request.urlopen(url)
    response = webcontent.read()
    webcontent.close()
    print(response)
    print(type(response))
    response_dict = ast.literal_eval(response.decode('utf-8'))
    return response_dict

def xvals():
    xlist = []  # Initialize xlist inside gather function
    first = 5
    for _ in range(5):  # Iterate 5 times to generate 5 points
        xlist.append(first)
        first += 5
    return xlist

def gathertemp(address):

    response = getSiteContents(address)
    k = response['main']['temp']
    k = k - 273
    k = round(k)
    return k

def gatherwind(address):
    response = getSiteContents(address)
    l = response['wind']['speed']
    l = round(l)
    return l


def clearFile(filename):
    #function by Mr. Goldsmith
    file = open(filename,'w')
    thing = ''
    file.write(thing)
    file.close()

def write(thing):
    file = open('unit4.txt', 'a')  # open file in append mode
    file.write(str(thing) + '\n')   # convert thing to string before writing
    file.flush()  # Flush the buffer to ensure data is written immediately
    file.close()

def hourlytemp(y, address):
    clearFile('unit4.txt')
    for counter in range (1,6):
        k = gathertemp(address)
        write(str(k))
        time.sleep(y)

def hourlywind(y, address):
    clearFile('unit4.txt')
    for counter in range (1,6):
        l = gatherwind(address)
        write(str(l))
        time.sleep(y)

def readFile(filename):
    #function by Mr. Goldsmith
    #reads the contents of filename and returns as a list
    #filename and running program must be in same folder
    file = open(filename,'r')
    contents = file.read()
    file.close()
    contents = contents.splitlines()
    return contents

def convert(contents):
    integers = [int(string) for string in contents]
    return integers

nest_asyncio.apply()
intents = discord.Intents(messages=True, guilds=True, message_content=True)
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!info'):
        await message.channel.send("Type '!w' for wind speed or '!t' for temperature.")

    if message.content.startswith('!w'):
        await message.channel.send("You chose to get information about wind speed.")
        hourlywind(5,address)
        contents = readFile('unit4.txt')
        integers = convert(contents)
        print(integers)
        xlist = xvals()
        print(xlist)
        pylab.plot(xlist,integers)
        graph = pylab.show()

    if message.content.startswith('!t'):
        await message.channel.send("You chose to get information about temperature.")
        hourlytemp(5, address)
        contents = readFile('unit4.txt')
        integers = convert(contents)
        print(integers)
        xlist = xvals()
        print(xlist)
        pylab.plot(xlist,integers)
        graph = pylab.show()

client.run('MTIyMTczNTEyNjQ5NzYyNDEyNA.GlPnqJ.Uooph59Xdag6FpzHycx_W_dGt_P3ayW8g7R7bc')
