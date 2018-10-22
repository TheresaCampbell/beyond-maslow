import React, { Component } from 'react';

class Activity extends Component {

  handleClick = () => {
    this.props.onClick(this.props.activity.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.activity.id)
  }

  render() {
    return(
      <div className="activity">
        <span className="deleteButton" onClick={this.handleDelete}>
          x
        </span>
        <h3 onClick={this.handleClick}>{this.props.activity.title}</h3>
        <p onClick={this.handleClick}>{this.props.activity.body}</p>
        <p onClick={this.handleClick}>{this.props.activity.cost}</p>
        <p onClick={this.handleClick}>{this.props.activity.category}</p>
{/*    Since "completed" is a boolean, it doesn't show up as a visible value.*/}
        <p onClick={this.handleClick}>{this.props.activity.completed}</p>
      </div>)
  }

}



export default Activity