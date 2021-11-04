<template>
  <the-sidebar></the-sidebar>
  <base-card>
     <font-awesome-icon icon="plus" /> <span>Add field group</span>
  </base-card>
</template>

<script>
import TheSidebar from './components/admin/TheSidebar.vue';
import BaseCard from './components/UI/BaseCard.vue';

export default {
  name: 'App',
  components: {
    TheSidebar,
    BaseCard
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
span {
  margin-left: 5px;
}
</style>
