import json
from glob import glob

ASSETS_URL="https://raw.githubusercontent.com/RealOrangeOne/hipchat-emoticons-for-all/master/assets/"


def get_icon_name(path):
    return get_filename(path).replace('.png', '').replace('.gif', '')

def get_filename(path):
    return path.replace('assets/', '')


files = glob('assets/*.png') + glob('assets/*.gif')
images = []

for filename in files:
    images.append({get_icon_name(filename): ASSETS_URL + get_filename(filename)})


image_decoder = {"images":images}

image_decoder_json = json.dumps(image_decoder, indent=2, sort_keys=True)

js_file = None
with open('src/global.js', "r") as file:
    js_file = file.read()

js_file = js_file.replace("%image_decoder%", image_decoder_json)

with open('build/global.js', 'w') as file:
    file.write(js_file)
