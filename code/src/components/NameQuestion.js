import React from 'react'

const NameQuestion = ({ setName, name }) => {

  const onNameChange = (e) => {
   setName(e.target.value)
  }

  return (
    <div className="question-container">
      <h1 className="question-header">What is your name?</h1>
      <div className="name-question">
        <label htmlFor="name">
          <input
            required
            name="name"
            type="text"
            value={name}
            onChange={onNameChange}
          />
        </label>
      </div> 
    </div>
  )
}

export default NameQuestion