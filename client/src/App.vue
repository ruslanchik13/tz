<script>

import {defineComponent} from "vue";
import MainPage from "./pages/MainPage/MainPage.vue";
import Menu from "./components/menu/Menu.vue";

export default defineComponent({
  components: {Menu, MainPage}
})
</script>

<template>
  <Menu/>
  <router-view></router-view>
</template>

<style>
*{padding:0;margin:0;box-sizing:border-box;}

  a {
    text-decoration: none;
    color: black;
  }
</style>