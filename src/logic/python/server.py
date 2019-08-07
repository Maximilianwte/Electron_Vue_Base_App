import flask
from flask import request, jsonify

# tutorial from https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Create some test data for our catalog in the form of a list of dictionaries.
stocks = [
    {'id': 0,
     'title': 'Ford',
     'symbol': 'F',
     'price': '10.54',
     'value': '11.15'
    },
    {'id': 1,
     'title': 'Facebook',
     'symbol': 'FB',
     'price': '321.22',
     'value': '258.12'
    },    
    {'id': 2,
     'title': 'Tesla',
     'symbol': 'TSLA',
     'price': '210.54',
     'value': '151.80'
    }
]


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Distant Reading Archive</h1>
<p>A prototype API for distant reading of science fiction novels.</p>'''


# A route to return all of the available entries in our catalog.
@app.route('/api/v1/data/all', methods=['GET'])
def api_all():
    return jsonify(stocks)


# Parameters are passed after the url via ?id=2 like ..api/v1/data/specific?id=5
# Other Parameters can be specified in the request.args[''] part.
@app.route('/api/v1/data', methods=['GET'])
def api_id():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify an id."

    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for stock in stocks:
        if stock['id'] == id:
            results.append(stock)

    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return jsonify(results)

app.run()