<template>
  <the-sidebar></the-sidebar>
  <base-card>
    Add field group
  </base-card>
</template>

<script>
import TheSidebar from './components/admin/TheSidebar.vue';

export default {
  name: 'App',
  components: {
    TheSidebar
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: rgb(48, 48, 48);
  height: 100vh;
}
ul {
  margin-block-start: 0;
  /* padding-inline-start: 0; */
}
</style>
