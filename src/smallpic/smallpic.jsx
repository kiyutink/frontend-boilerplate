import React from 'react';
import PropTypes from 'prop-types';

export class SmallPic extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

SmallPic.propTypes = {
  name: PropTypes.string.isRequired
};