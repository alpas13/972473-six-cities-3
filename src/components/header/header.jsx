import React from "react";
import PropTypes from "prop-types";

const Header = React.memo(function Header(props) {
  const {authInfo, onEmailClick, onSignInClick} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper"/>
                  {!!authInfo && <span className="header__user-name user__name" onClick={onEmailClick}>{authInfo.email}</span>}
                  {!!authInfo || <span className="header__login" onClick={onSignInClick}>Sign in</span>}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});

Header.propTypes = {
  authInfo: PropTypes.shape({
    email: PropTypes.string,
  }),
  onEmailClick: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

export default Header;
