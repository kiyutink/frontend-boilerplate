import React from 'react';
import {VisibilityLink} from '../visibilityLink/visibilityLink';
import {all, complete, incomplete} from '../../constants/todoFilterValues';

export class VisibilityFilter extends React.Component {
  render() {
    return (
      <div>
        <VisibilityLink
          filter={all}
        >
          all
        </VisibilityLink>
        <VisibilityLink
          filter={complete}
        >
          completed
        </VisibilityLink>
        <VisibilityLink
          filter={incomplete}
        >
          uncompleted
        </VisibilityLink>
      </div>
    );
  }
}