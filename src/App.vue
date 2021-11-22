<template>
  <the-sidebar></the-sidebar>
  <div class="form-group">
      <label for="title">Title for your form group</label>
      <input type="text" v-model="groupTitle" id="title">
  </div>
  <hr>
  <base-card @click="showFieldsForm">
     <font-awesome-icon icon="plus" /> <span>Add field group</span>
  </base-card>
  <br>
  <form>
    <div v-for="comp in components" :key="comp">
      <component :is="comp" @inputChanged="handleChange" ref="markdowndetails"></component>
    </div>
    <!-- <button @click.prevent="saveTextFields" v-if="components.length">Save</button> -->
    <button @click.prevent="saveTextFields" v-if="components.length">Save</button>  
  </form>

</template>

<script>
import TheSidebar from './components/admin/TheSidebar.vue';
import BaseCard from './components/UI/BaseCard.vue';
// import GroupfieldSelect from './components/admin/GroupfieldSelect.vue';
import FieldsPattern from './components/admin/fields/FieldsPattern.vue';
// import Text from './components/admin/fields/Text.vue';

export default {
  name: 'App',
  components: {
    TheSidebar,
    BaseCard,
    // GroupfieldSelect,
    FieldsPattern,
    // Text
  },
  data() {
    return {
      groupTitle: null,
      components: [],
      fieldsStructureArray: [],
      inputsTextInfo: {
        label: '',
        name: '',
        type: '',
        hint: '',
        isRequired: 'yes',
        default: ''
      },
    }
  },
  methods: {
    showFieldsForm() {
      this.components.push('fields-pattern');
      // return this.isFormFieldsVisible = true;
    },
    handleChange(data) {
      console.log(data);
    },
    saveTextFields() {
      // console.log(this.inputsTextInfo);
      // this.fieldsStructureArray.push(this.inputsTextInfo);
      // console.log(this.fieldsStructureArray);
      var markdowns = this.$refs.markdowndetails.$data;
      console.log('markdowns', markdowns)
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
