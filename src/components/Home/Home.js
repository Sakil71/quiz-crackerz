import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'

const Home = () => {
    const quizTopic = useLoaderData();
    const quizData = quizTopic.data;

    const handlerQuizButoon = quiz =>{
        console.log(quiz)
    }

    return (
        <div className=' bg-black m-10 text-white'>
            <h3>This is Home {quizData.length}</h3>

            <div className='home-container p-10 text-center'>
                {
                    quizData.map(quiz =>
                        <QuizTopic
                            key={quiz.id}
                            quiz={quiz}
                            handlerQuizButoon = {handlerQuizButoon}
                        ></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;