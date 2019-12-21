<template>
     <div>
        <h2>
            {{ question.index + 1 }}&#41;<span v-html="question.question" />
        </h2>
        <label 
            v-for="(option, i) in options" 
            :key="i"
            :for="`option_${ i }`"
        >
            <input 
                :id="`option_${ i }`" 
                type="radio" 
                :value="option" 
                v-model="selected"
                @change="$emit('selectedAnswer', selected)"
            > 
            <span v-html="option" />
        </label>
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

    computed: {
        options() {
            const arr = this.question.options;
            let ctr = arr.length;
            let temp;
            let index;

            while (ctr > 0) {
                // Pick a random index
                index = Math.floor(Math.random() * ctr);
                // Decrease ctr by 1
                ctr--;
                // And swap the last element with it
                temp =  arr[ctr];
                arr[ctr] = arr[index];
                arr[index] = temp;
            }
            return arr;
        }
    }
}
</script>

<style scoped>
    h2 span {
        font-size: 22px;
    }
    label {
        margin: 10px 0;
        display: block;
        font-size: 18px;
    }

    span {
        margin-left: 7px;
        font-size: 18px;
    }
</style>