<template>
    <div class="settings ml-64 pt-16">
        <h1 class="text-5xl">Settings</h1>
        <div class="settings_container mt-8">
            <li>
                <ul>
                    <div class="button_row">
                        <h3 class="text-2xl">Dark Mode</h3>
                        <button @click="toggleTheme" class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hover:bg-main_primary hover:text-bg_primary">{{theme_button_text}}</button>
                    </div>
                </ul>
                <ul>
                    <div class="button_row">
                        <h3 class="text-2xl">get Data</h3>
                        <button @click="getData" class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hover:bg-main_primary hover:text-bg_primary">Get Data</button>
                    </div>
                </ul>
            </li>
        </div>
    </div>
</template>

<script>
    import Store from "../store";
    import savefile_functions from "../appdata/savefile_functions";
    import logic_functions from "../logic/logic_functions";

    export default {
        computed: {
            theme() {
                return Store.state.theme;
            }
        },
        methods: {
            toggleTheme() {
                Store.commit("toggleTheme");
                this.theme_button_text = this.updateThemeText()
                savefile_functions.write();
            },
            updateThemeText() {
                return Store.state.theme == "theme_dark" ? "disable" : "enable"
            },
            getData() {
                logic_functions.get_data()
            }
        },
        data() {
            return {
                theme_button_text: this.updateThemeText()
            }
        }
    }
</script>