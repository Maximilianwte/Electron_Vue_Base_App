const fs = require('fs');
import Store from "../store.js"
import {write} from "fs";
const path = require("path");
const os = require('os');
let home_dir = os.homedir()

let savefile_functions = {
    read() {
        try {
            let rawdata = fs.readFileSync(path.join(home_dir,'/desktop/savefile.json'));
            let savefile_data = JSON.parse(rawdata);

            Store.commit("setTheme", savefile_data.theme);
        } catch {
            this.write()
        }
    },
    write() {
        let settings = {
            theme: Store.state.theme
        }

        settings = JSON.stringify(settings, null, 2);
        fs.writeFileSync(path.join(home_dir,'/desktop/savefile.json'), settings);
    }
}

export default savefile_functions