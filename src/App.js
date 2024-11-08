import React, { useState } from 'react';
import AudioCapture from './components/AudioCapture';
import QuestionAnalyzer from './components/QuestionAnalyzer';
import { getSuggestedAnswer } from './services/answerService';

const App = () => {
    const [transcript, setTranscript] = useState('');
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState(null); /** Error state for overall app */

    const handleTranscription = (text) => {
        setTranscript(text);
    };

    const handleQuestionDetected = async (detectedQuestions) => {
        if (detectedQuestions.length === 0) {
            setError("No valid questions detected.");
            return;
        }
        try {
            debugger;
            setQuestions(detectedQuestions);
            const suggestedAnswers = await Promise.all(detectedQuestions.map(getSuggestedAnswer));
            setAnswers(suggestedAnswers);
            setError(null); /** Clear any previous errors */
        } catch (error) {
            console.error("Error suggesting answers:", error);
            setError("Failed to suggest answers.");
        }
    };

    return (
        <div>
            <h1>Audio Medical Assistant</h1>
            <AudioCapture onTranscribe={handleTranscription} />
            <QuestionAnalyzer transcript={transcript} onQuestionDetected={handleQuestionDetected} />
            <div>
                <h3>Detected Questions</h3>
                {questions.length === 0 && <p>No questions detected.</p>}
                {questions.map((question, index) => (
                    <p key={index}><strong>Question: </strong>{question}</p>
                ))}
                <h3>Suggested Answers</h3>
                {answers.length === 0 && <p>No answers available.</p>}
                {answers.map((answer, index) => (
                    <p key={index}><strong>Answer: </strong>{answer}</p>
                ))}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default App;
