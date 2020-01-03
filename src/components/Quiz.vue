<template>
    <div>
        <div v-if="quiz.currentQuestionIndex < 10">
            <question  
                :question="question" 
                @selectedAnswer="selectedAnswer"
            />
            <p v-if="error" class="error">* Please select an answer</p>
            <button @click.prevent="submit">Next</button>
        </div>
        <results v-else />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Question from './Question';
import Results from './Results';

export default {
    name: 'Quiz',

    components: {
        Question,
        Results,
    },

    data() {
        return {
            error: false,
            selected: null,
        };
    },

    computed: {
        ...mapState(['quiz']),

        question() {
            return this.quiz.questions[this.quiz.currentQuestionIndex];
        },

        correctAnswer() {
            return this.quiz.questions[this.quiz.currentQuestionIndex].answer;
        }
    },

    methods: {
        selectedAnswer(val) {
            this.selected = val;
        },

        submit() {
            this.error = false;
            if (this.selected === null) {
                this.error = true;
                return;
            }

            this.$store.commit('quiz/updateSelectedAnswer', {
                id: this.quiz.currentQuestionIndex,
                selectedAnswer: this.selected,
            });

            if (this.selected === this.correctAnswer) {
                this.$store.commit('quiz/updateTotalCurrentAnswers');
            }

            this.$store.commit('quiz/updateCurrentQuestionIndex', this.quiz.currentQuestionIndex+1);
            this.selected = null;
        },
    },
}
</script>

<style scoped>
    button {
        padding: 11px 30px;
        margin-top: 20px;
        background-color: #35495d;
        color: white;
        font-size: 17px;
        font-weight: 700;
        border: 1px solid #35495d;
        cursor: pointer;
    }

    button:hover {
        background-color: #52b883;
        border: 1px solid #52b883;
    }

    .error {
        color: #E53935;
    }
</style>