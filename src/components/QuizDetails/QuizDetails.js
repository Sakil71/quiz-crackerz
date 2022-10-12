import React from 'react';
import './QuizDetails.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizDetails = ({ quizes }) => {
    const { question, options, correctAnswer} = quizes;

    const handleCorrectOrIncorrect = (correctAnswer, options) => {
        if (correctAnswer === options) {
          return toast.success("Wow !! This answer is correct !!", {
            autoClose: 2000,
          });
        } else {
          return toast.warn("opps !! This answer is incorrect !!", {
            autoClose: 2000,
          });
        }
      }; 

    return (
        <div className='question-box my-5 border border-blue-200 w-1/2 mx-auto p-5 rounded'>
            <div className='flex'>
                <h1 className='text-1xl font-bold text-left'>{question}</h1>
                <EyeIcon className="h-6 w-6 text-black ml-10" />
                <ToastContainer></ToastContainer>
            </div>
            <div className='questuin-option'>
                {
                    options.map(option => <h1 className='font-semibold text-left ml-10'><input onClick={()=>handleCorrectOrIncorrect(correctAnswer, options)} type="checkbox" /> {option}</h1>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;