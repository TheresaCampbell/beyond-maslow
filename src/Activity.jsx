import React from 'react';

const Activity = ({activity}) =>
  <div className="activity" key={activity.id}>
    <h3>{activity.title}</h3>
    <p>{activity.body}</p>
    <p>{activity.cost}</p>
    <p>{activity.category}</p>
{/*    Since "completed" is a boolean, it doesn't show up as a visible value.*/}
    <p>{activity.completed}</p>
  </div>

export default Activity