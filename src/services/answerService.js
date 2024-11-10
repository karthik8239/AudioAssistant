import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebaseConfig';
import axios from 'axios';


export const getSuggestedAnswer = async(question) => {
    try {
        console.log("Fetching the document");
        const docRef = ref(storage, 'gs://fir-medical-assistant-7689b.appspot.com/medical-info.txt');
        const url = await getDownloadURL(docRef);
        console.log("Downloaded url obtained", url);
        try {
            /** Fetch the file content using Fetch API */
            console.log("document fetching from the data");
            const response = await axios.get(url);
            console.log("document fetched successfully: ", response.data);
            const documentText = response.data;
            const lines = documentText.split('\n');
            console.log("Document lines split into array:", lines);
            // const answer = lines.find(line => line.toLowerCase().includes(question.toLowerCase())) || "No answer found.";
            const questionIndex = lines.findIndex(line => line.toLowerCase().includes(question.toLowerCase())); 
            if(questionIndex === -1){
                console.log("No matching answer is found");
            }
            let answerlines = [];
            for(let i = questionIndex+1 ; i < lines.length; i++){
                const currentLine = lines[i].trim();
                if(currentLine.startsWith("-") || currentLine === ''){
                    break;
                }
                answerlines.push(currentLine);
            }
            const answer = answerlines.join(' ').trim();
            console.log(answer);
            return answer;
        } catch (error) {
            console.error("Error reading document:", error);
            return "Error reading the medical document.";
        }
    } catch (firebaseError) {
        console.error("Error fetching document from Firebase:", firebaseError);
        return "Failed to fetch the medical document.";
    }
};