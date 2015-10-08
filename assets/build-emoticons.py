import json, requests, os, base64
from glob import glob
from lxml import html
from collections import namedtuple


ASSET_DIR = os.path.dirname(os.path.realpath(__file__))
LOCAL_FILES = glob('assets/*.png') + glob('assets/*.gif')
Emoticon = namedtuple('Emoticon', ['ident', 'url'])


def get_filename(path):
    return path.replace('assets/', '')


def get_icon_name(path):
    return get_filename(path).replace('.png', '').replace('.gif', '')

print("Collecting Page Elements...")
page = requests.get("https://www.hipchat.com/emoticons")
html_tree = html.fromstring(page.text)
emoticon_paths = html_tree.xpath("//div[@class='emoticon-block']/img/@src")
emoticon_names = html_tree.xpath("//div[@class='emoticon-block']/div/text()")

emoticons = []
for i in range(len(emoticon_names) - 1):
    emoticons.append(Emoticon(emoticon_names[i][1:-1], emoticon_paths[i]))

print("Downloading offline emoticons...")
DOWNLOAD_FILES = []
for emoticon in emoticons:
    ext = 'gif' if emoticon.url.endswith('gif') else 'png'
    path = ASSET_DIR + "/{0}.{1}".format(emoticon.ident, ext)
    DOWNLOAD_FILES.append(path)
    if os.path.isfile(path):
        continue
    with open(path, 'wb') as handle:
        response = requests.get(emoticon.url, stream=True)
        if not response.ok:
            print("Something went wrong getting " + emoticon.ident)
            continue

        for block in response.iter_content(1024):
            handle.write(block)

    print("{}/{} Files Downloaded\r".format(len(DOWNLOAD_FILES), len(emoticons)), end='' if len(DOWNLOAD_FILES) != len(emoticons) else '\n')

for filename in LOCAL_FILES:
    emoticons.append(Emoticon(get_icon_name(filename), filename))

images = []
print("Converting Files...")
for emoticon in emoticons:
    ext = ext = 'gif' if emoticon.url.endswith('gif') else 'png'
    path = ASSET_DIR + "/{0}.{1}".format(emoticon.ident, ext)
    file = base64.b64encode(open(path, 'rb').read()).decode('utf-8').replace('\n', '')
    data = "data:image/{0};base64,{1}".format(ext, file)
    images.append({emoticon.ident: data})

print("Exporting JSON...")
image_decoder = {"images": images}

image_decoder_json = json.dumps(image_decoder, indent=2, sort_keys=True)

js_file = None
with open('src/global.js', "r") as file:
    js_file = file.read()

js_file = js_file.replace("%image_decoder%", image_decoder_json)

with open('build/global.js', 'w') as file:
    file.write(js_file)

print("Deleting Temporary Files...")
for file in DOWNLOAD_FILES:
    os.remove(file)
