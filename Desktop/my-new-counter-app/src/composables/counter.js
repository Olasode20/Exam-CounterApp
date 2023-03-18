import { ref } from 'vue'

export default function counter(initialValue = 0) {
    const count = ref(initialValue)

    let message = ""

    const handleIncrement = () => {
        count.value++
    }

    const handleDecrement = () => {
        count.value--
    }

    const handleReset = () => {
        count.value = initialValue
    }

    const handleChange = () => {
        const inputField = this.$refs.inputField;
        if (inputField) {
            count.value = inputField.value;
        }
    }
    const handleInput = (event) => {
        count.value = event.target.value;
    }

    return {
        count,
        handleIncrement,
        handleDecrement,
        handleReset,
        handleChange,
        handleInput,
        message
    }
}
