<template>
  <div id="app" style="-webkit-app-region: drag" :class="theme"
    class="flex min-h-screen bg-bg_primary text-main_primary font-sans">
    <sidebar />
    <router-view />
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar";
  import Store from "./store";
   import savefile_functions from "./appdata/savefile_functions";

  savefile_functions.read();

  export default {
    components: {
      Sidebar
    },
    computed: {
      theme(){
        return Store.state.theme;
      }
    }
  }
</script>

<style src="./assets/css/main.css">