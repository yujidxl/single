import React, { Component } from 'react';
import './list.scss';
import src from '../../images/4cb0690f944dfde0fb54ad16da35e8ea0cfb2898.jpg'

class List extends Component {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ul className="lists">
        {
          [1,2,3,4,5,6,7,8].map(item => (
            <li 
              key={item} 
              className=
              {item%2 === 0 ?'no-margin-right':''}
            >
              <img src={src} alt=""/>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default List;