import $ from "jquery";
var fs = require('fs');

let logic_functions = {
    get_data() {
        $.getJSON('http://127.0.0.1:5000/api/v1/data/all', function (data) {
            var output_data = []

            for (var key in data) {
                output_data[key] = {
                    "id": data[key]["id"],
                    "symbol": data[key]["symbol"],
                    "price": data[key]["price"],
                };
            }

            console.log(output_data);
            //console.log(data[0].symbol)
        });
    },
}

export default logic_functions