import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import QuestionForm from "./component/QuestionForm";
import ResultOutput from './component/ResultOutput';

const questions = [
  {
    id: 1,
    text: "What is your name?"
  },
  {
    id: 2,
    text: "How old are you?"
  },
  {
    id: 3,
    text: "Where are you from?"
  }
];

export default function App() {
  const [questionsList, setQuestionsList] = useState(questions);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answersList, setAnswersList] = useState([]);
  const [isResult, setIsResult] = useState(false);


  return (
    <div className="App">
      <div className="block">
        {isResult
        ? <ResultOutput 
        answersList = {answersList}
        questionsList = {questionsList}/>
        :<QuestionForm 
          question = {questionsList[currQuestion]}
          questionsList = {questionsList}
          answersList = {answersList}
          setAnswersList = {setAnswersList}
          setCurrQuestion = {setCurrQuestion}
          currQuestion = {currQuestion}
          setIsResult ={setIsResult}/>}
      </div>
    </div>
  );
}
