<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <Quiz />
    </div>
</template>

<script>
    import Quiz from './components/Quiz.vue';

    export default {
        name: 'app',
        components: {
            Quiz
        }
    }
</script>