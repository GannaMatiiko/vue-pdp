<template>
    here will be text
</template>

<script>
export default {
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
            }
        }
    },
    methods: {
        saveTextFields() {
            console.log('save text');
            const inputsData = {
                label: this.inputsTextInfo.label,
                name: this.inputsTextInfo.name,
                type: this.inputsTextInfo.type,
                hint: this.inputsTextInfo.hint,
                isRequired: this.inputsTextInfo.isRequired,
                default: this.inputsTextInfo.default
            }
            this.inputs.push(inputsData);
            console.log(inputsData);
            console.log(this.inputs);
        }
    }
}
</script>