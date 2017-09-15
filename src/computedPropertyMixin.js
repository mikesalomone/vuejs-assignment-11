export const computedPropertyMixin = {
	data() {
        return {
            text: 'Hello World!'
        }
    },
	computed: {
        computedReverseText() {
            return this.text.split('').reverse().join('');
        },
        computedCountLength() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}