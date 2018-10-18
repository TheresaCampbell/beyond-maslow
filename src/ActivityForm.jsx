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
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  //When the user clicks away from the form, their changes are saved.
  handleBlur = (e) => {
    const activity = {
      title: this.state.title,
      body: this.state.body,
      cost: this.state.cost,
      category: this.state.category,
      completed: this.state.completed
    }
    axios.put(
      `http://localhost:3001/activities/${this.props.activity.id}`,
      {activity: activity}
    )
    .then(response => {
      console.log(response)
      this.props.updateActivity(response.data)
    })
    .catch(error => console.log(error))
  }

  //The activity form, used to edit individual activities.
  render() {
    return(
      <div className="activity">
        <form onBlur={this.handleBlur}>
          <input name="title" type="text" placeholder='Title'
          value={this.state.title} onChange={this.handleInput} ref={this.props.titleRef}/>
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