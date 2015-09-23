import json, requests
from glob import glob
from lxml import html
from collections import namedtuple

CUSTOM_ASSETS_URL="https://raw.githubusercontent.com/RealOrangeOne/hipchat-emoticons-for-all/master/assets/"

Emoticon = namedtuple('Emoticon', ['ident', 'url'])

def get_icon_name(path):
    return get_filename(path).replace('.png', '').replace('.gif', '')

def get_filename(path):
    return path.replace('assets/', '')


page = requests.get("https://www.hipchat.com/emoticons")
html_tree = html.fromstring(page.text)
emoticon_paths = html_tree.xpath("//div[@class='emoticon-block']/img/@src")
emoticon_names = html_tree.xpath("//div[@class='emoticon-block']/div/text()")


emoticons = []
for i in range(len(emoticon_names)-1):
    emoticons.append(Emoticon(emoticon_names[i][1:-1], emoticon_paths[i]))

images = []
for emoticon in emoticons:
    images.append({emoticon.ident: emoticon.url})

files = glob('assets/*.png') + glob('assets/*.gif')
for filename in files:
    images.append({get_icon_name(filename): CUSTOM_ASSETS_URL + get_filename(filename)})


image_decoder = {"images":images}

image_decoder_json = json.dumps(image_decoder, indent=2, sort_keys=True)

js_file = None
with open('src/global.js', "r") as file:
    js_file = file.read()

js_file = js_file.replace("%image_decoder%", image_decoder_json)

with open('build/global.js', 'w') as file:
    file.write(js_file)
