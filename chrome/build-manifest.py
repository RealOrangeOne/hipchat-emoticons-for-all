import json
import os
current_dir = os.path.dirname(os.path.realpath(__file__)) + "/"

with open(current_dir + "../package.json") as json_file:
    project_package = json.load(json_file)


with open(current_dir + "manifest.json") as json_file:
    manifest = json.load(json_file)


switcher = {
    'name': 'name',
    'version': 'version',
    'description': 'description',
}


for key, value in switcher.items():
    manifest[value] = project_package[key]


with open(current_dir + "data/decoder.json") as json_file:
    site_decoder = json.load(json_file)['sites']


content_scripts = []
for site in site_decoder:
    site = list(site.items())[0]
    temp = {}
    temp['matches'] = ["*://" + site[0] + '/*']
    temp['js'] = ['data/lib/jquery.js', 'data/injector.js', 'data/injections/' + site[1]]
    content_scripts.append(temp)


manifest['content_scripts'] = content_scripts


with open(current_dir + 'manifest.json', 'w') as file:
    json.dump(manifest, file, indent=2, sort_keys=True)
