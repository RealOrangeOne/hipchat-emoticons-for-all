import json, os
from base64 import b64encode
from glob import glob

def get_filename(path):
    return path.replace('assets/', "").replace('.png', '')


files = glob('assets/*.png')
image_bin = []

for filename in files:
    with open(filename, 'rb') as file:
        image_bin.append({ get_filename(filename): "data:image/png;base64,"+ (str(b64encode(file.read()))[2:-1])})
    
image_decoder = {"sites":image_bin}

image_decoder_json = json.dumps(image_decoder, indent=2, sort_keys=True)

js_file = None
with open('src/image-decoder.js', "r") as file:
    js_file = file.read()
js_file = js_file.replace("%image_decoder%", image_decoder_json)
with open('build/image-decoder.js', 'w') as file:
    file.write(js_file)
