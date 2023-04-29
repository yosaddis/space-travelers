import React from 'react';
import PropTypes from 'prop-types';
import '../style/style.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="WrapperHeader">
      <div className="Container">
        <div className="header-logo">
          <img src="sci-fi.png" alt="logo space travelers" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <nav>
          <ul>
            <li>
              <LinkNavComponent to="/">
                <p>Rockets</p>
              </LinkNavComponent>
            </li>
            <li>
              <LinkNavComponent to="/missions">
                <p>Mission</p>
              </LinkNavComponent>
            </li>
            <li>
              <LinkNavComponent to="/profile">
                <p>My Profile</p>
              </LinkNavComponent>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const LinkNavComponent = ({ children, ...restProps }) => {
  const { to } = restProps;
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <NavLink
      to={to}
      className="nav-link"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
};

LinkNavComponent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Nav;
