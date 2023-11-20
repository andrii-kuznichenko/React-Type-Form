import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const QuestionForm = ({question, questionsList, answersList, setAnswersList, setCurrQuestion, currQuestion, setIsResult}) => {
  const [lastQuestion, setLastQuestion] = useState([...questionsList][[...questionsList].length - 1]);
  const [answer, setAnswer] = useState({
    id: 0,
    answer: ''
  });
  const [previousClick, setPreviousClick] = useState(true);

  useEffect(() => {
    const thisAnswer = answersList.filter(answerNav => {
      return answerNav.id === question.id
    });
    console.log(thisAnswer);
    if(thisAnswer.length > 0){
      setAnswer({
        id: thisAnswer[0].id,
        answer: thisAnswer[0].answer
      });
      console.log('1111',answer);
    }
  },[previousClick]);

  const secondButton = () => {
    if(question.id > 1){
      return <Button variant="primary" className='mt-3' onClick={ReturnHandler}>Previous</Button>
    }
  }

  const ReturnHandler = () => {
    setCurrQuestion(currQuestion => currQuestion - 1);
    setPreviousClick(!previousClick);
  }

  const NextHandler = () => {
    setCurrQuestion(currQuestion => currQuestion + 1);
    const updateUnswer = answersList.filter(answr => answr.id === question.id);
    if(updateUnswer.length > 0){
      const newAnswerList = answersList.map(answr =>{
        if(answr.id === question.id){
          answr.answer = answer.answer
        }
        return answr;
      })
      setAnswersList(newAnswerList);
    } else {
      setAnswersList([...answersList, answer]);
    }
    setAnswer({
      id: 0,
      answer: ''
    });
    if(lastQuestion.id === question.id){
      setIsResult(true);
    }
    setPreviousClick(!previousClick);
  }

  const AnswerHandler = (e) => {
    setAnswer({...answer, id: question.id, [e.target.name]: e.target.value});
  }

  return (
    <>
      <h2>Question {question.id}</h2>
      <Form.Label className='mt-3 mb-3'>{question.text}</Form.Label>
      <Form.Control
        type="text"
        id={`question-${question.id}`}
        onChange={AnswerHandler}
        name="answer"
        value={answer.answer}/>
        <Stack direction="horizontal" gap={3}>
          {secondButton()} 
          <Button variant="primary"
          className='mt-3'
          onClick={NextHandler}
          disabled = {answer.answer === ''?true:false}>
          {lastQuestion.id === question.id?'Submit':'Next'}
          </Button>
        </Stack>  
    </>
  )
}

export default QuestionForm