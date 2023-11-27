import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibilities are beyond our imagination</h1>
        <p>You are welcomed to join a world of endless opportunities and experiences. Delve deep into a knowledge base that is available at all times. You can start today and have fun!</p>
        <h4>Request early access to get started</h4>

      </div>

    </div>
  )
}

export default Possibility