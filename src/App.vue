<template>
    <div id="app">
        <h1>Quiz app using API</h1>
        <div class="container">
            <Quiz v-if="status.start" />
            <div v-else>
                <p>Let's test your knowledge. </p>
                <p>Good luck. </p>
                <button @click.prevent="start">START QUIZ</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Quiz from './components/Quiz.vue';

    export default {
        name: 'app',

        components: {
            Quiz
        },

        data() {
            return {
                status: {
                    start: false,
                },
            };
        },

         mounted() {
            this.$store.dispatch('quiz/getQuizQuestions');
        },

        methods: {
            start() {
                this.status.start = true;
            },
        }
    }
</script>

<style scoped>
    #app {
        margin-top: 100px;
        max-width: 800px;
        margin: 0 auto;
        font-family: Arial, Helvetica, sans-serif;
        color: #4a4a4a;
    }

    h1 {
        text-align: center;
        text-decoration: underline;
    }
    
    .container {
        margin-top: 30px;
        padding: 30px;
        border: 1px solid #ffffff;
        border-radius: 7px;
        box-shadow: 0px 0px 20px 0px #c3c3c3;
    }

    button {
        background-color: #f3983e;
        border: 1px solid #f3983e;
        border-radius: 7px;
        padding: 10px 15px;
        font-weight: 600;
        font-size: 17px;
        color: #ffffff;
        display: block;
        margin: 20px auto;
    }

    p {
        font-size: 22px;
        text-align: center;
    }
</style>
