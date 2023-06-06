import React from 'react' 

import NextButton from 'components/SubmitButton'

import { places } from '../reusable/constants'


const RadioButtonTwo = ({ setFavoritePlace, favoritePlace }) => {

  const onPlaceChange = (e) => {
    setFavoritePlace(e.target.value)
  }

  return (
      <div className="question-container" aria-label="Favorite place to read: 5 options">
        <h1 className="question-header">Favorite place to read?</h1>
        {places.map(place => {
          return (
            <div className="radio-container" key={place}>
              <label htmlFor="place">
                <input
                  name="place"
                  type='radio'
                  required
                  value={place}
                  onChange={onPlaceChange}
                  checked = {favoritePlace === place}
                />
                {place}
              </label>
            </div>
          )}
        )}
      </div>
  )
}

export default RadioButtonTwo