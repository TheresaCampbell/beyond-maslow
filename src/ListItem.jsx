import React from 'react';

const ListItem = ({listItem}) =>
  <div className="listItem" key={listItem.id}>
    <h3>{listItem.title}</h3>
    <p>{listItem.body}</p>
    <p>{listItem.cost}</p>
  </div>

export default ListItem