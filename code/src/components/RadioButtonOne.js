import React from 'react'

import { amountOfTimes } from '../reusable/constants'

const RadioButtonOne = ({ setTime, readingTime }) => {

  const onTimeChange = (e) => {
    setTime(e.target.value)
  }

  return (
    <div className="question-container" aria-label="How often do you read? 5 options">
      <h1 className="question-header">How often do you read?</h1>
      {amountOfTimes.map(amountOfTime => {
        return (
        <div className="radio-container" key={amountOfTime}>
          <label htmlFor="time">
            <input
              name="time"
              type='radio'
              value={amountOfTime}
              onChange={onTimeChange}
              checked = {readingTime === amountOfTime}
              required
            />
            {amountOfTime}
          </label>
        </div>
      )})} 
    </div>
  )
}

export default RadioButtonOne
