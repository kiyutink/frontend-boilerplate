import React from 'react';
import './app.scss';
import {SmallPic} from './smallpic/smallpic';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.something = 1;
  }

  render() {
    return (
      <div>
        hello
        <span className='name'>
          hello darkness my old friend
        </span>
        <SmallPic
          name='1'
        />
        <br />
      </div>
    );
  }
}
