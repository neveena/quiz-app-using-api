<template>
    <div>
        <h1>Review Answers</h1>
        <div v-for="question in quiz.questions" :key="question.index">
            <h2>
                {{ question.index + 1 }}&#41; <span v-html="question.question" />
            </h2>
            <label 
                v-for="(option, i) in question.options" 
                :key="i"
                :for="`option_${ i }`"
                :class="{ 
                    selected: option === quiz.selectedAnswers[question.index].selectedAnswer,
                    correct: option === question.answer
                }"
            >   
                {{ i + 1 }})
                <span v-html="option" />
            </label>
            <div class="answer">
                <p>
                    <strong>Correct answer: </strong>
                    {{ question.answer }}
                </p>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Review',

    computed: {
        ...mapState(['quiz']),
    },
}
</script>

<style scoped>
    label {
        display: block;
        padding: 10px;
        margin-bottom: 7px;
        border-radius: 8px;
    }

    .selected {
        background-color: #f5b5ac;
    }

    .correct {
        background-color: #b3e2c0;
    }

    hr {
        margin: 30px 0;
    }

    h1 {
        color: #283593;
        text-align: center;
        margin: 0 0 30px;
        background: #f9f9f9;
        padding: 20px 0;
        font-size: 28px;
    }

    .answer {
        background: #e9e9e9;
        padding: 20px
    }
</style>