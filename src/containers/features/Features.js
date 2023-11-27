import React from 'react'
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Build your dreams.',
    text: 'Building dreams is a metaphorical concept encapsulating the process of envisioning, planning, and actively working towards ones aspirations and goals.'
  }, 
  {
    title: 'Have a vision',
    text: 'A vision is a compelling and aspirational mental image of a desired future state or outcome. It serves as a guiding beacon that inspires individuals,.'
  }, 
  {
    title: 'You can take breaks.',
    text: 'Taking breaks is a crucial aspect of maintaining productivity and overall well-being. It involves intentionally stepping away from work or tasks at hand to rest.'
  }, 
  {
    title: 'Your dreams will be achieved.',
    text: 'Achieving a dream is a transformative journey marked by determination, effort, and often, overcoming challenges.'
  }, 
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>The future is now and you just need to realize it. Step into the future today and make it happen</h1>
        <p>Request early access</p>
      </div>
      <div className="gpt3__features-container">
         {featuresData.map((item, index)=> {
           return <Feature title={item.title} text={item.text} key={item.title + index}/>
         })}
      </div>

    </div>
  )
}

export default Features