import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import './QuizTopic.css'
import { Link } from 'react-router-dom';

const QuizTopic = ({ quiz }) => {
    const { logo, name, total, id } = quiz;

    return (
        <div className='flex flex-col border border-red-600 w-72 bg-blue-600 mb-5 rounded mx-auto'>
            <img className='w-full' src={logo} alt="" />
            <div className='quiz-topic-info flex p-2 justify-center'>
                <h1 className='text-2xl'>{name}</h1>
                <p className='font-medium ml-4 opacity-60'><small>{total}</small></p>


                <Link to= {`quiz/${id}`} className=' flex py-1'>
                        <p>Quiz</p>
                        <ArrowSmallRightIcon className="h-6 w-6 text-blue-500 ml-3" />
                </Link>
            </div>
        </div>
    );
};

export default QuizTopic;