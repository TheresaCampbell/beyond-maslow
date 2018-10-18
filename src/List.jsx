import React, { Component } from 'react';
import axios from 'axios';
import Activity from './Activity';
import ActivityForm from './ActivityForm';
import update from 'immutability-helper';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activities: [],
      editingActivityId: null,
      notification: ''
    }
  }

// Once List has mounted, call Rails API to retrieve activities and add them to the List's state. If there are errors, catch and log them.
  componentDidMount() {
    axios.get('http://localhost:3001/activities.json')
    .then(response => {
      console.log(response)
      this.setState({activities: response.data})
    })
    .catch(error => console.log(error))
  }

// Adding a new activity, sending it to the Rails API, logging the response received to the console, posting the new activity, and setting 'editingActivityId' to this new activity's ID.
  addNewActivity = () => {
    axios.post(
      'http://localhost:3001/activities.json',
      { activity:
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
      const activities = update(this.state.activities, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        activities: activities,
        editingActivityId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }

  updateActivity = (activity) => {
    const activityIndex = this.state.activities.findIndex(x => x.id === activity.id)
    const activities = update(this.state.activities, {
      [activityIndex]: {$set: activity}
    })
    this.setState({
      activities: activities,
      notification: 'All changes saved'
    })
  }

  resetNotification = () => {
    this.setState({notification: ''})
  }

  render() {
    return (
    <div>
      <button className="newActivityButton" onClick={this.addNewActivity}>
        +
      </button>
      <span className="notification">
        {this.state.notification}
      </span>
      {this.state.activities.map((activity) => {
        if (this.state.editingActivityId === activity.id) {
          return(<ActivityForm activity={activity} key={activity.id} updateActivity={this.updateActivity} resetNotification={this.resetNotification}/>)
        } else {
          return(<Activity activity={activity} key={activity.id}/>)
        }
      })}
    </div>
    )
  }
}



export default List
