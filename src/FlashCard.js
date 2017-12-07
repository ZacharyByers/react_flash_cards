import React from 'react';

const FlashCard = ({ title, description }) => (
  <div className='raised card'>
    <div className='content'>
      <div className='header'>{title}</div>
    </div>
    <div className='content'>
      <div className='ui slide masked reveal'>
        <div className='visible content card-content'>Show Answer</div>
        <div className='hidden content card-content'>{description}</div>
      </div>
    </div>
  </div>
)

export default FlashCard
