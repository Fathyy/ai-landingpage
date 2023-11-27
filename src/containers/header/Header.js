import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's build something amazing with GPT3 OpenAI</h1>
        <p>You are welcomed to join a world of endless opportunities and experiences. Delve deep into a knowledge base that is available at all times. You can start today and have fun!</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email address' />
          <button type="button">Get started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access in the last hour</p>
        </div>

      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="" />
        </div>
    </div>
  )
}

export default Header