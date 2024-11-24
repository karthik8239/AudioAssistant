import React, { useState, useEffect } from 'react';
import { getSuggestedAnswer } from '../services/answerService';

const QuestionAnalyzer = ({ transcript, onQuestionDetected }) => {
    const [error, setError] = useState(null); /** Error state for question detection */
    const questionWords = ['what', 'why', 'how', 'when', 'where'];
    // const [questions, setQuestions] = useState([]);
    // const [answer, setAnswer] = useState('');
    const detectQuestions = () => {
        if (!transcript) {
            setError("No transcript available to analyze.");
            return;
        }
        try {
            const questions = transcript
                .split('.')
                .filter(sentence => questionWords.some(word => sentence.trim().toLowerCase().startsWith(word)));
            if (questions.length === 0) {
                setError("No questions detected in the transcript.");
            } else {
                setError(null); // Clear any previous errors
                onQuestionDetected(questions);
            }
        } catch (err) {
            console.error("Error detecting questions:", err);
            setError("An error occurred while detecting questions.");
        }
    };

    // const fetchAnswer = async(question) => {
    //     try{
    //         const answer = await getSuggestedAnswer(question);
    //         setAnswer(answer)
    //     }
    //     catch(err){
    //         console.log(err);

    //     }
    // }

    useEffect(() => {
        detectQuestions();
    }, [transcript]);

    return (
        <div>
            {error && <p style={{ color: 'green' }}>{error}</p>}
            {/* {questions.length  > 0 && <p>Detected Question:{questions[0]}</p>} */}
            <button type="btn-primary">Save continue</button>
        </div>
    );
};

export default QuestionAnalyzer;
