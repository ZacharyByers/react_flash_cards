import React from 'react';

class CardForm extends React.Component {
  state = { title: '', description: '', nextId: 1 }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, description, nextId } = this.state
    const card = { title, description, id: nextId}
    this.setState({ title: '', description: '', nextId: nextId + 1})
    this.props.addCard(card)
  }

  titleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  descChange = (e) => {
    this.setState({ description: e.target.value })
  }

  render() {
    const { title, description } = this.state
    return (
      <div>
        <h3>New Flash Card</h3>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <div className='two fields'>
            <div className='field'>
              <label>Title</label>
              <input type='text' required='required' value={title} onChange={this.titleChange}/>
            </div>
            <div className='field'>
              <label>Description</label>
              <textarea rows='2' cols='20' wrap='hard' required='required' value={description}onChange={this.descChange}/>
            </div>
          </div>
          <div className='field'>
            <input type='submit' className='ui positive button'/>
          </div>
        </form>
        <br/>
      </div>
    )
  }
}

export default CardForm
