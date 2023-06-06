import React, { useState } from 'react'

const SubmitButton = () => {
  const [currenQuestion, setCurrenQuestion] = useState(0)

    
  const handleAnswerButtonClick = () => {
    const nextQuestion = currenQuestion + 1
    setCurrenQuestion(nextQuestion)
    console.log(nextQuestion)
  }

  return (
    <button 
      className="start-btn send-btn"
      type="submit" 
      tabIndex='0'
      aria-label='Next question'
      onClick={handleAnswerButtonClick}
    >
      Submit
    </button> 
  )
}

export default SubmitButton 
