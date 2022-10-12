import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quizData = useLoaderData().data.questions;

    return (
        <div>
            {
                quizData.map(quizes => <QuizDetails key = {quizes.id} quizes = {quizes}></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;