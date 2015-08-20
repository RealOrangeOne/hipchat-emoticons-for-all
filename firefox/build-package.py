import json

with open("../package.json") as json_file:
    project_package = json.load(json_file)

with open("package.json") as json_file:
    ext_package = json.load(json_file)

switcher = {
    'name': 'title',
    'name': 'name',
    'version': 'version',
    'description': 'description',
    'author': 'author',
    'license': 'license'
}

for key, value in enumerate(switcher):
    ext_package[value] = project_package[key]

with open('package.json', 'w') as file:
    json.dump(ext_package, file)