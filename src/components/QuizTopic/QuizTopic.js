import React from 'react';
import { ArrowSmallRightIcon} from '@heroicons/react/24/solid'
import './QuizTopic.css'

const QuizTopic = ({ quiz, handlerQuizButoon}) => {
    const { logo, name, total } = quiz;

    return (
        <div className='flex flex-col border border-red-600 w-72 bg-blue-600 mb-5 rounded mx-auto'>
            <img className='w-full' src={logo} alt="" />
            <div className='quiz-topic-info flex p-2 justify-center'>
                <h1 className='text-2xl'>{name}</h1>
                <p className='font-medium ml-4 opacity-60'><small>Q: {total}</small></p>

                <button onClick={()=> handlerQuizButoon(quiz)} className='px-5 py-1 bg-red-500 rounded ml-10 flex'>
                    <p>Quiz</p>
                    <ArrowSmallRightIcon className="h-6 w-6 text-blue-500 ml-3" />
                </button>
            </div>
        </div>
    );
};

export default QuizTopic;