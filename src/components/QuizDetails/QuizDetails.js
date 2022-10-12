import React from 'react';

const QuizDetails = ({ quizes }) => {
    const { question, options } = quizes;

    return (
        <div className='question-box border border-red-500 m-4 w-1/2 mx-auto p-5 rounded'>
            <h1 className='text-1xl font-bold text-left'>{question}</h1>
            <div className='questuin-option'>
                {
                    options.map(option=> <h1 className='font-semibold text-left ml-10'>{option}</h1>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;