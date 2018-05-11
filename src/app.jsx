import React from 'react';
import './app.scss';


export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      hello
      <span className='name'>
        hello darkness my old friend
      </span>
      <br />
    </div>;
  }
}
