<template>
     <div>
        <h1 v-html="question.question" />
        <div
            v-for="(option, i) in question.options" 
            :key="i" 
       >
            <label :for="`option_${ i }`">
                <input 
                    :id="`option_${ i }`" 
                    type="radio" 
                    :value="option" 
                    v-model="selected"
                    @change="$emit('selectedAnswer', selected)"
                > 
                <span v-html="option" />
            </label>
            <hr/>
        </div>
        <hr>
     </div>
</template>

<script>
export default {
    name: 'question',

    props: {
        question: {
            type: Object,
            default() {
                return {};
            },
        }
    },

    data() {
        return {
            selected: null,
        };
    },
}
</script>

<style scoped>
</style>