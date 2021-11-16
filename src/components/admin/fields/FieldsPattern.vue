<template>
    <div class="form-group">
        <label for="label">Field label <span style="color: red;">*</span></label>
        <input type="text" v-model="inputsTextInfo.label" id="label" @change="updateValues">
    </div>
    <div class="form-group">
        <label for="name">Field name <span style="color: red;">*</span></label>
        <input type="text" v-model="inputsTextInfo.name" id="name">
    </div>
    <div class="form-group">
        <label for="fieldType">Field Type <span style="color: red;">*</span></label>
        <groupfield-select @select-type="logSelectedType"></groupfield-select>
    </div>
    <div class="form-group">
        <label for="hint">Instructions</label>
        <textarea v-model="inputsTextInfo.hint" id="hint"></textarea>
    </div>
    <div class="form-group">
        <label for="">Required?</label>
        <input type="radio" id="yes" value="yes" v-model="inputsTextInfo.isRequired">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" v-model="inputsTextInfo.isRequired">
        <label for="no">No</label>
    </div>
    <div class="form-group">
        <label for="default">Default Value</label>
        <input type="text" v-model="inputsTextInfo.default" id="default">
    </div>
    <hr>
</template>

<script>
import GroupfieldSelect from '../GroupfieldSelect.vue';
export default {
    components: {
        GroupfieldSelect
    },
    data() {
        return {
            inputs: [],
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
        logSelectedType(data) {
            console.log('selectedddd', data)
        },
        updateValues() {
            console.log(this.inputsTextInfo)
        }
    }
}
</script>