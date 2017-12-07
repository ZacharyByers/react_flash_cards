import React from 'react';
import CardForm from './CardForm';
import Cards from './Cards';

class FlashCardApp extends React.Component {
  state = { items: [] }

  addCard = (card) => {
    this.setState({ items: [...this.state.items, card] })
  }

  render() {
    return(
      <div className='ui container'>
        <CardForm addCard={this.addCard}/>
        <Cards items={this.state.items} />
      </div>
    )
  }
}

export default FlashCardApp
