import React from 'react'
 
const SelectOption = ({ setFavoriteTime, favoriteTime }) => {

  const onFavoriteTimeChange = (e) => {
    setFavoriteTime(e.target.value)
  }
 
  return (
    <div className="question-container">
      <h1 className="question-header">Your favorite time to read?</h1>
      <div className="custom-select">
        <select
          required
          onChange={onFavoriteTimeChange}
          value= {favoriteTime} 
        >
          <option disabled value="">Select a time</option>
          <option value="morning">Before bedtime</option>
          <option value="lunch">Lunch time</option>
          <option value="evening">Evening</option>
          <option value="vacation">Vacation</option>
        </select>
      </div>
    </div>  
  )
}

export default SelectOption

