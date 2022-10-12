import React from 'react';
import './QuizDetails.css'

const QuizDetails = ({ quizes }) => {
    const { question, options, correctAnswer, id } = quizes;

    

    return (
        <div className='question-box my-5 border border-blue-200 w-1/2 mx-auto p-5 rounded'>
            <h1 className='text-1xl font-bold text-left'>{question}</h1>
            <div className='questuin-option'>
                {
                    options.map(option=> <h1 className='font-semibold text-left ml-10'><input type="checkbox" /> {option}</h1>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;