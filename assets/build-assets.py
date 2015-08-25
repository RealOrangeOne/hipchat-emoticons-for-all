import json
from glob import glob

def get_filename(path):
    return path.replace('assets/', "").replace('.png', '')


files = glob('assets/*.png')
image_bin = []

for filename in files:
    with open(filename, 'rb') as file:
        image_bin.append({ get_filename(filename):
            "data:image/png;base64," + (open(filename, 'rb').read().encode('base64').replace('\n', ''))
        })

image_decoder = {"images":image_bin}

image_decoder_json = json.dumps(image_decoder, indent=2, sort_keys=True)

js_file = None
with open('src/image-decoder.js', "r") as file:
    js_file = file.read()
js_file = js_file.replace("%image_decoder%", image_decoder_json)
with open('build/image-decoder.js', 'w') as file:
    file.write(js_file)
