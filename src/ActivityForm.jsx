import React, { Component } from 'react';
import axios from 'axios';

class ActivityForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="activity">
        <form>
          <input className="title"></input>
          <textarea className="body"></textarea>
          <div className="cost">
            <button>Free</button>
            <button>$</button>
            <button>$$</button>
            <button>$$$</button>
          </div>
          <input className="categories"></input>
        </form>
      </div>
    )
  }
}

export default ActivityForm;