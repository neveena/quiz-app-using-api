import axios from 'axios';

export default {
    async getQuizQuestions({commit}) {
        try {
            let res = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
            let questions = res.data.results.map((data, index) => {
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
            });

            commit('setQuestions', questions);
          
        } catch (err) {
            if (!err.status) {
                return 'Network error';
            } 
            return err;
        }
    }
}