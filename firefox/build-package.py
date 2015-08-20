import json
import os
current_dir = os.path.dirname(os.path.realpath(__file__)) + "/"

with open(current_dir + "../package.json") as json_file:
    project_package = json.load(json_file)

with open(current_dir + "package.json") as json_file:
    ext_package = json.load(json_file)

switcher = {
    'name': 'title',
    'version': 'version',
    'description': 'description',
    'author': 'author',
    'license': 'license'
}

for key, value in switcher.items():
    ext_package[value] = project_package[key]

with open(current_dir + 'package.json', 'w') as file:
    json.dump(ext_package, file, indent=2, sort_keys=True)
