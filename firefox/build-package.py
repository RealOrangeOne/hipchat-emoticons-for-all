import json
import os
current_dir = os.path.dirname(os.path.realpath(__file__)) + "/"

with open(current_dir + "../package.json") as json_file:
    project_package = json.load(json_file)

package = {}
try:
    with open(current_dir + "package.json") as json_file:
        package = json.load(json_file)
except:
    package = {}

switcher = {
    'name': 'title',
    'version': 'version',
    'description': 'description',
    'author': 'author',
    'license': 'license'
}

for key, value in switcher.items():
    package[value] = project_package[key]


# Hard coded values
package['name'] = package['title'].replace(' ', '-').lower()
package['id'] = package['name'] + "@jetpack"
package['engines'] = {'fennec': ">=39.5", 'firefox': ">=39.5"}
package['main'] = 'index.js'

with open(current_dir + 'package.json', 'w') as file:
    json.dump(package, file, indent=2, sort_keys=True)
