import { useState } from "react"
import QUESTIONS from '../questions.js';
import completeImage  from '../assets/quiz-complete.png'
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    let currentActiveQuestion = userAnswers.length
    let quizIsComplete = currentActiveQuestion === QUESTIONS.length;

    const chooseAnswerHandler = (answer)  => {
        setUserAnswers((previousAnswers) => {
            return [...previousAnswers,answer]
        })
    }

    if(quizIsComplete) {
        return (
            <div id="summary">
                <img src={completeImage} alt="Trophy Cup" />
                <h2>Quiz is complete</h2>
            </div>
        )
    }


    let shuffledQuestions = [...QUESTIONS[currentActiveQuestion].answers]
    // sort function effect on the orinigal array
    shuffledQuestions.sort(() => Math.random() - 0.5);



    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[currentActiveQuestion].text}</h2>
                <ul id="answers">
                    {
                        shuffledQuestions.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => chooseAnswerHandler(answer)}>
                                {answer}
                            </button>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}