import React from 'react';
import {toggleVisibility} from '../../actionCreators/visibility';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import './VisibilityFilter.scss';

class VisibilityFilterComponent extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    visibility: PropTypes.string.isRequired
  }

  setAllFilter = () => {
    this.props.dispatch(
      toggleVisibility('SHOW_ALL')
    );
  }

  setCompleteFilter = () => {
    this.props.dispatch(
      toggleVisibility('SHOW_COMPLETED')
    );
  }

  setIncompleteFilter = () => {
    this.props.dispatch(
      toggleVisibility('SHOW_INCOMPLETE')
    );
  }

  render() {
    return (
      <div>
        <span
          onClick={this.setAllFilter}
          className={classNames(
            'option',
            this.props.visibility === 'SHOW_ALL' && 'option_active'
          )}
        >
          all
        </span>
        <span
          onClick={this.setCompleteFilter}
          className={classNames(
            'option',
            this.props.visibility === 'SHOW_COMPLETED' && 'option_active'
          )}
        >
          completed
        </span>
        <span
          onClick={this.setIncompleteFilter}
          className={classNames(
            'option',
            this.props.visibility === 'SHOW_INCOMPLETE' && 'option_active'
          )}
        >
          not completed
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visibility: state.visibility
});

export const VisibilityFilter = connect(mapStateToProps)(VisibilityFilterComponent);