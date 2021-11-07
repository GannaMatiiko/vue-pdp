<template>
    <select v-model="selected" @change="getType">
        <option v-for="option in groupfieldOptions" :value="option.value" :key="option.value" >
            {{ option.text }}
        </option>
    </select>
    <p>Selected {{selected}}</p>
</template>

<script>
export default {
    emits: ['select-type'],
    data() {
        return {
            selected: 'Text',
            groupfieldOptions: [
                {text: 'Text', value: 'Text'},
                {text: 'Textarea', value: 'Textarea'},
                {text: 'WYSIWYG', value: 'Wysiwyg'},
                {text: 'Image', value: 'Image'},
                {text: 'Repeater', value: 'Repeater'},
                {text: 'Group', value: 'Group'},
            ]
        }
    },
    methods: {
        getType() {
            this.$emit('select-type', this.selected);
        }
    }
}
</script>