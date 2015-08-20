import json


with open("../package.json") as json_file:
    project_package = json.load(json_file)


with open("manifest.json") as json_file:
    manifest = json.load(json_file)


switcher = {
    'name': 'name',
    'version': 'version',
    'description': 'description',
}


for key, value in enumerate(switcher):
    manifest[value] = project_package[key]


with open("data/site-decoder.json") as json_file:
    site_decoder = json.load(json_file)


content_scripts = []
for ident, script in enumerate(site_decoder):
    temp = {}
    temp['matches'] = [ident]
    temp['js'] = ['data/lib/jquery.js', 'data/image_lookup.js', 'data/injections/' + script]
    content_scripts.append(temp)


manifest['content_scripts'] = content_scripts


with open('package.json', 'w') as file:
    json.dump(manifest, file)