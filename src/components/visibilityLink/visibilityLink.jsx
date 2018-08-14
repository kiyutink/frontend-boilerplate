import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {all} from '../../constants/todoFilterValues';
import './visibilityLink.scss';


export const VisibilityLink = ({filter, children}) => (
  <NavLink
    exact={true}
    to={`/${filter === all ? '' : filter}`}
    activeClassName='option_active'
  >
    {children}
  </NavLink>
);

VisibilityLink.propTypes = {
  children: PropTypes.node,
  filter: PropTypes.string
};