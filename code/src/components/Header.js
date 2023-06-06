import React from 'react'

import NextButton from 'components/SubmitButton'


const Header = () => {
  return (
    <header className="header">
      <div className="image-container">
        <img className="image" src="assets/woman.png" alt="draw of a woman reading a book"/>
      </div>
      <div className="header-content">
        <h1>Are you a book lover?</h1>
        <h2>By answering this questions you will see your reading pattern.</h2>
      </div>
    </header>
  )
}

export default Header
