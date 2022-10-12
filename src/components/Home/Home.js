
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'
import quizImg from '../../Media/Quiz.jfif'

const Home = () => {
    const quizTopic = useLoaderData();
    const quizData = quizTopic.data;

    return (
        <div className=' bg-black m-10 text-white'>
            <div className='flex mx-auto w-3/4 mb-6'>
                <img className='w-96 rounded' src={quizImg} alt="" />
                <div className='p-5'>
                    <h1>There is also a tick box where you can opt to Show Question Feedback For Incorrect Answers only – if the quiz taker gets an answer correct they will not be given feedback for that question.</h1>
                </div>
            </div>

            <div className='home-container p-10 text-center'>
                {
                    quizData.map(quiz =>
                        <QuizTopic
                            key={quiz.id}
                            quiz={quiz}
                        ></QuizTopic>)
                }
                
            </div>
        </div>
    );
};

export default Home;