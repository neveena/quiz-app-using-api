<template>
    <div>
        <div v-if="!status.show" class="container">
            <h1>You scored {{ score }}</h1>
            <button @click.prevent="status.show = true">Check your answers</button>
        </div>
        <review v-else />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Review from './Review';

export default {
    name: 'Results',

    components: {
        Review,
    },

    data() {
        return {
            status: {
                show: false,
            }
        };
    },

    computed: {
        ...mapState(['quiz']),

        score() {
            return `${ this.quiz.totalCorrectAnswers } out of ${ this.quiz.questions.length }`;           
        },
    },
}
</script>

<style scoped>
    .container {
        text-align: center;
    }

    p {
        font-size: 20px;
    }

    button {
        padding: 11px 30px;
        margin-top: 30px;
        background-color: #FB8C00;
        color: #ffffff;
        font-size: 17px;
        font-weight: 700;
        border: 1px solid #FB8C00;
        cursor: pointer;
    }

    button:hover {
        background-color: #FFCC80;
        border: 1px solid #FFCC80;
    }
</style>