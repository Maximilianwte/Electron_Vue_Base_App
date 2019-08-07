<template>
  <div class="home">
  </div>
</template>

<script>
  import logic_functions from "@/logic/logic_functions";
  import Store from "../store";
  // Import an component if you want to reuse code multiple times.. Like product view
  // @ is an alias to /src

  export default {
    name: 'home',
    computed: {
      recent_stocks() {
        return Store.state.recent_stocks;
      }
    },
    methods: {
      get_data() {
        logic_functions.get_data()
      }
    },
    data() {
      return {

      }
    }
  }
</script>