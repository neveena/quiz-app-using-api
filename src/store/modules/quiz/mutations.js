export default {
    updateCurrentQuestionIndex(state, data) {
        state.currentQuestionIndex = data;
    },

    setQuestions(state, data) {
        state.questions = data;
    },

    updateTotalCurrentAnswers(state) {
        state.totalCorrectAnswers = state.totalCorrectAnswers + 1;
    },

    updateSelectedAnswer(state, data) {
        state.selectedAnswers.push(data);
    }
}