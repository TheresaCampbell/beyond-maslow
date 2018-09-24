import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem'

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listItems: []
    }
  }

// Once List has mounted, call Rails API to retrieve list items and add them to the List's state. If there are errors, catch and log them.
  componentDidMount() {
    axios.get('http://localhost:3001/list_items.json')
    .then(response => {
      console.log(response)
      this.setState({listItems: response.data})
    })
    .catch(error => console.log(error))
  }

// Adding a new list item, sending it to the Rails API, and logging the response received to the console. The response is not being posted yet.
  addNewListItem = () => {
    axios.post(
      'http://localhost:3001/list_items.json',
      { listItem:
        {
          title: '',
          body: '',
          cost: '',
          category: '',
          completed: ''
        }
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
    <div>
      <button className="newListItemButton" onClick={this.addNewListItem}>
        +
      </button>
      {this.state.listItems.map((listItem) => {
        return(<ListItem listItem={listItem} key={listItem.id}/>)
      })}
    </div>
    )
  }
}



export default List
