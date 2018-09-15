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

  render() {
    return (
    <div>
      {this.state.listItems.map((listItem) => {
        return(<ListItem listItem={listItem} key={listItem.id}/>)
      })}
    </div>
    )
  }
}



export default List
