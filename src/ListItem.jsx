import React from 'react';

const ListItem = ({listItem}) =>
  <div className="listItem" key={listItem.id}>
    <h3>{listItem.title}</h3>
    <p>{listItem.body}</p>
    <p>{listItem.cost}</p>
    <p>{listItem.category}</p>
{/*    Since "completed" is a boolean, it doesn't show up as a visible value.*/}
    <p>{listItem.completed}</p>
  </div>

export default ListItem