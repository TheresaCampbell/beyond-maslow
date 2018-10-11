import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem'
import update from 'immutability-helper';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listItems: [],
      editingListItemId: null
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

// Adding a new list item, sending it to the Rails API, logging the response received to the console, posting the new list item, and setting 'editingListItemId' to this new list item's id.
  addNewListItem = () => {
    axios.post(
      'http://localhost:3001/list_items.json',
      { list_item:
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
      console.log(response);
      const listItems = update(this.state.listItems, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        listItems: listItems,
        editingListItemId: response.data.id
      })
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
