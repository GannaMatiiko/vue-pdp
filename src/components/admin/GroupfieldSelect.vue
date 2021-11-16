<template>
  <select v-model="selected" @change="getType">
    <option
      v-for="option in groupfieldOptions"
      :value="option.value"
      :key="option.value"
      :disabled="option.value === 'none'"
    >{{ option.text }}</option>
  </select>
  <p>Selected {{selected}}</p>
</template>

<script>
export default {
  emits: ["select-type"],
  data() {
    return {
      selected: "none",
      groupfieldOptions: [
        { text: "Choose option", value: "none" },
        { text: "Text", value: "Text" },
        { text: "Textarea", value: "Textarea" },
        { text: "WYSIWYG", value: "Wysiwyg" },
        { text: "Image", value: "Image" },
        { text: "Repeater", value: "Repeater" },
        { text: "Group", value: "Group" }
      ]
    };
  },
  methods: {
    getType() {
      this.$emit("select-type", this.selected);
    }
  }
};
</script>