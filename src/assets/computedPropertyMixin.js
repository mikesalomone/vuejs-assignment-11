export const computedPropertyMixin = {
	data() {
        return {
            text: 'Hello World!'
        }
    },
	computed: {
        computedCountLength() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}