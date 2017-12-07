import React from 'react';
import FlashCard from './FlashCard'

class Cards extends React.Component {
  render() {
    let items = this.props.items.map( item => {
      return( <FlashCard key={item.id} {...item} removeCard={this.props.removeCard} /> )
    })

    return(
      <div className='ui cards'>
        {items}
      </div>
    )
  }
}

export default Cards
