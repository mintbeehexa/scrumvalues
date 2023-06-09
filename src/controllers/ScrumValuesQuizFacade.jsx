import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faForward, faQuestion } from "@fortawesome/free-solid-svg-icons";


import { useState } from "react";

import scrumvalues from "../assets/scrumvalues.png";
import scrumpillars from "../assets/scrumpillars.png";

import Question from "../components/scrumvalues/question"
import Graph from "../components/scrumvalues/graph"

export default function ScrumValuesQuizFacade({ number }) {

    const maxArea = 59.44103

    let [showValues, setShowValues] = useState(false)
    let [showQuiz, setShowQuiz] = useState(false)
    let [currentQuestion, setCurrentQuestion] = useState(0)
    let [finished, setFinished] = useState(false)
    const [answers, setAnswers] = useState(Array(5).fill(Array(5).fill(false))) // 5 questions having 5 options each


    const handleNext = () => {
        if (currentQuestion < 4) setCurrentQuestion(currentQuestion + 1)
    }

    const handleBack = () => {
        if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1)
    }

    const handleChange = (childAnswer) => {
        let updatedAnswers = [...answers]
        updatedAnswers[currentQuestion] = [...childAnswer];
        setAnswers(updatedAnswers);
    }

    const handleFinish = () => {
        setFinished(true)
    }

    const getArea = () => {
        const getAnswerNumbers = answers.map((answer) => answer.filter((option) => option === true).length)

        const percent = Math.floor(getAnswerNumbers
            .map((value, index) => [value, getAnswerNumbers[(index + 1) % getAnswerNumbers.length]])
            .map(pair => pair[0] * pair[1] / 2 * Math.sin(1.25663))
            .reduce(function (a, b) { return a + b; }, 0) / maxArea * 100);
        return percent
    }

    return (
        <div>
            {number === 1 && <div className='container intro-container'>
                {!showValues &&
                    <div className='scrum-intro-container'>
                        <h1 className='intro-title'> Scrum </h1>
                        <div className="row">
                            <img className="intro-img col-6" alt="" src={scrumpillars} />
                            <div className="col-6 intro-text">
                                <p> Scrum is a developmental framework relying on Empiricism,
                                    which prioritizes experience over fore-seeing rational thinking, leading to iterative
                                    development process rather than plan-based ones, such as Waterfall. </p>
                                <p> By this empirical approach, three pillars of Scrum are Transparency, Inspection and Adaption.</p>
                                <div className="button-container">
                                    <button className="btn --right" onClick={() => setShowValues(true)}>
                                        <FontAwesomeIcon icon={faForward} />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>}
                {showValues && !showQuiz &&
                    <div className="scrum-values-container">
                        <h1 className='intro-title'> Scrum Values </h1>
                        <div className="row">
                            <img className="intro-img col-6" alt="" src={scrumvalues} />
                            <div className="col-6 intro-text">
                                <p> Scrum values can be considered as criteria to estimate if a Scrum member obey Scrum,
                                    including Courage, Focus, Commitment, Respect and Openness.
                                    If you are new to Scrum, these criteria may be useful for use to adjust
                                    your own work attitude. </p>
                                <p> Read more about scrum at <a href="https://www.scrum.org/">https://www.scrum.org/</a>.</p>

                                <div className="button-container">
                                    <button className="btn --right" onClick={() => setShowQuiz(true)}>
                                        <FontAwesomeIcon icon={faQuestion} />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>}
                {showQuiz && !finished &&
                    <Question
                        number={currentQuestion}
                        selections={answers[currentQuestion]}
                        onBack={handleBack}
                        onNext={handleNext}
                        onFinish={handleFinish}
                        onChange={handleChange} />}
                {finished &&
                    <div className="row">
                        <div className="col-6">
                            <Graph answers={answers} />
                        </div>
                        <div className="col-6">
                            <h1 className="intro-title"> Congratulation! </h1>
                            <div>Your area covers {getArea()}% of a possibly perfect member's. </div>
                            {getArea() < 50 && <div> Try acquiring some more previous descriptions of Scrum values! </div>}
                            {getArea() > 50 && <div> Keep going! </div>}
                        </div>
                    </div>
                }
            </div>}
        </div>
    )

}