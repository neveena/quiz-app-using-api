<template>
    <div>
        <div v-if="this.quiz.currentQuestionIndex < 5">
            <question  
                :question="this.quiz.questions[this.quiz.currentQuestionIndex]" 
                @selectedAnswer="selectedAnswer"
            />
            <button @click.prevent="submit">Next</button>
        </div>
        <div v-else>
            {{ this.quiz.totalCorrectAnswers }} / 5
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Question from './Question';

export default {
    name: 'Quiz',

    components: {
        Question,
    },

    data() {
        return {
            errored: false,
            loading: true,
            error: [],
            selected: [],
        };
    },

    computed: {
        ...mapState(['quiz']),
    },

    mounted() {
        this.$store.dispatch('quiz/getQuizQuestions').then((response) => {
            this.info = response;
        }).catch(error => {
            this.error = error;
            this.errored = true;
        }).finally(() => this.loading = false);
    },

    methods: {
        selectedAnswer(val) {
            this.selected = val;
        },

        submit() {
            if (this.selected === this.quiz.questions[this.quiz.currentQuestionIndex].answer) {
                this.$store.commit('quiz/updateTotalCurrentAnswers');
            }
            this.$store.commit('quiz/updateCurrentQuestionIndex', this.quiz.currentQuestionIndex+1);
        }
    },
}
</script>