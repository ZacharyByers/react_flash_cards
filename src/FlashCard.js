import React from 'react';

const FlashCard = ({ id, title, description, removeCard }) => (
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
    <div className='content'>
      <div onClick={() => removeCard(id)} className='ui button negative'>Delete</div>
    </div>
  </div>
)

export default FlashCard
