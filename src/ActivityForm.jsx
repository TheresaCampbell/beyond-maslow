import React, { Component } from 'react';
import axios from 'axios';

class ActivityForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.activity.title,
      body: this.props.activity.body,
      cost: this.props.activity.cost,
      category: this.props.activity.category,
      completed: this.props.activity.completed
    }
  }

  //When an activity is updated through the form, its state value changes accordingly.
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  //The activity form, used to edit individual activities.
  render() {
    return(
      <div className="activity">
        <form>
          <input name="title" type="text" placeholder='Title'
          value={this.state.title} onChange={this.handleInput}/>
          <textarea name="body" placeholder='Description'
          value={this.state.body} onChange={this.handleInput}></textarea>
          <input name="cost" type="text" placeholder='Cost'
          value={this.state.cost} onChange={this.handleInput}/>
          <input name="category" type="text" placeholder='Category'
          value={this.state.category} onChange={this.handleInput}/>
        </form>
      </div>
    )
  }
}

export default ActivityForm;