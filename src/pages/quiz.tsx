import React, { useEffect, useState } from 'react';
import { QUESTIONS } from '../questions';
import './quiz.scss'

const Quiz = () => {
    const [questions,setQuestions]=useState(QUESTIONS)
    const [answers, setAnswers] = useState(new Array(Object.keys(questions).length).fill(null));
    const [ratings, setRatings] = useState<number[]>([]);
    useEffect(()=>{

    },[answers])
    const handleAnswer = (event:any,index: number, answer: boolean) => {
      if(answer){
        event.target.className="yes"
      const element= document.getElementById("no"+index)
      element?.setAttribute("class","")
      }else{
        event.target.className="no";
        const element= document.getElementById("yes"+index)
      element?.setAttribute("class","")
      }
        
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const calculateScore = () => {
        const yesCount = answers.filter(answer => answer === true).length;
        const score = (yesCount / Object.keys(questions).length) * 100;
        return score.toFixed(2); // Round to 2 decimal places
    };
  
    const handleFinish = () => {
        const score = parseFloat(calculateScore());
        setRatings([...ratings, score]);
       
    }

    const calculateAverageRating = () => {
        if (ratings.length === 0) return 0;
        const sum = ratings.reduce((acc, curr) => acc + curr, 0);
        const average = sum / ratings.length;
        return average.toFixed(2);
    }
    return (
        <div className='quiz'>
            <div className='title'>Quiz</div>
            <p>Answer each question with Yes or No:</p>
            {Object.keys(questions).map((key:any, index:any) => (
                <div key={key}>
                    <p>{questions[parseInt(key)]}</p>
                    <button onClick={(e)=>handleAnswer(e,index,true)} id={"yes"+index}>Yes</button>
                    <button onClick={(e)=>handleAnswer(e,index,false)} id={"no"+index}>No</button>
                    </div>
            ))}
            <h2>Score: {calculateScore()}%</h2>
            <button onClick={handleFinish}>Calculate Average Score</button>
          
            <div>
                <h3>Average Rating: {calculateAverageRating()}%</h3>
            </div>
            
        </div>
    );
};

export default Quiz;
