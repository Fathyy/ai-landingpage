import React from 'react'
import './whatgpt.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title='What is GPT3' text='Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence. This encompasses a broad range of capabilities, including learning from experience (machine learning), understanding natural language, recognizing patterns, solving problems, and making decisions.'/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The Possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title='Chatbots' text='They are designed to simulate conversation with human users, typically through text-based interfaces. The field of AI continues to evolve daily.'/>
        <Feature title='Knowledgebase' text='A knowledge base is a centralized repository of information that serves as a comprehensive source of knowledge and data within a specific domain or organization.'/>
        <Feature title='Education' text='Education is a systematic process of acquiring knowledge, skills, values, and understanding through formal instruction, training, or research.!'/>

      </div>

    </div>
  )
}

export default WhatGPT3