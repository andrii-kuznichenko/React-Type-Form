import React from 'react'

function ResultOutput({answersList,questionsList}) {


  return (
    <>
    <h2>Result:</h2>
    <div>{questionsList.map(question => (
      answersList.map(answer => {
        if(question.id === answer.id){
           return (<p>{question.text} : {answer.answer}</p>)
        }
      })
    ))}</div>
    </>
  )
}

export default ResultOutput