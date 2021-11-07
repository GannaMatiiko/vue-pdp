<template>
  <the-sidebar></the-sidebar>
  <base-card @click="chooseFieldType">
     <font-awesome-icon icon="plus" /> <span>Add field group</span>
  </base-card>
  <br>
  <groupfield-select v-if="isSelectVisible" @select-type="logSelectType"></groupfield-select>
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
</template>

<script>
import TheSidebar from './components/admin/TheSidebar.vue';
import BaseCard from './components/UI/BaseCard.vue';
import GroupfieldSelect from './components/admin/GroupfieldSelect.vue';
import Text from './components/admin/fields/Text.vue';

export default {
  name: 'App',
  components: {
    TheSidebar,
    BaseCard,
    GroupfieldSelect,
    Text
  },
  data() {
    return {
      isSelectVisible: false,
      selectedComponent: 'Text'
    }
  },
  methods: {
    chooseFieldType() {
      return this.isSelectVisible = true;
    },
    logSelectType(data) {
      console.log('gchdgh', data);
      this.selectedComponent = data;
    }
  },
  computed: {
    // selectComponent() {
    //   this.selectedComponent = null;
    // }
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
