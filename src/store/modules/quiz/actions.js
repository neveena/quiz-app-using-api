import axios from 'axios';

export default {
    getQuizQuestions({ commit }) {
        axios.get('https://opentdb.com/api.php?amount=5&category=11&type=multiple').then(response => {
            let questions = response.data.results.map((data, index) => {
                return {
                    index: index,
                    question: data.question,
                    options: [
                        data.incorrect_answers[0],
                        data.incorrect_answers[1],
                        data.incorrect_answers[2],
                        data.correct_answer,
                    ],
                    answer: data.correct_answer,
                };
            })
            commit('setQuestions', questions);
        });
    }
}