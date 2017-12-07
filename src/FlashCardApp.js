import React from 'react';
import CardForm from './CardForm';
import Cards from './Cards';

class FlashCardApp extends React.Component {
  state = { items: [] }

  addCard = (card) => {
    this.setState({ items: [...this.state.items, card] })
  }

  removeCard = (id) => {
    let cardIndex = 0;
    this.state.items.forEach( (item, i) => {
      if (item.id === id)
        cardIndex = i
    })
    let newItems = this.state.items.slice()
    newItems.splice(cardIndex, 1)
    this.setState({ items: newItems })
  }

  render() {
    return(
      <div className='ui container'>
        <CardForm addCard={this.addCard}/>
        <Cards removeCard={this.removeCard} items={this.state.items} />
      </div>
    )
  }
}

export default FlashCardApp
