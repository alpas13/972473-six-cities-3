import React from "react";
import PropTypes from "prop-types";
import {
  getFavoritesStatus,
  getCurrentPage
} from "../../reducer/main/selectors";
import {getAuthorizationInfo} from "../../reducer/user/selectors";
import {ActionCreator} from "../../reducer/main/main";
import {ActionCreator as UserActionCreator} from "../../reducer/user/user";
import {connect} from "react-redux";
import {pageStyle} from "../../const";

const Page = React.memo(function Page(props) {
  const {currentPage, authInfo, isFavorites, getFavoritesPage, getLoginPage, children} = props;
  return (
    <div className={`page${pageStyle(currentPage)}`}>
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
                    {!!authInfo && <span className="header__user-name user__name" onClick={() => {
                      getFavoritesPage(isFavorites);
                    }}>{authInfo.email}</span>}
                    {!!authInfo || <span className="header__login" onClick={getLoginPage}>Sign in</span>}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {children}
      {(currentPage === `favoritesPage` || currentPage === `favoritesEmptyPage`) && <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>}
    </div>
  );
});

Page.propTypes = {
  currentPage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  authInfo: PropTypes.shape({
    email: PropTypes.string,
  }),
  isFavorites: PropTypes.bool.isRequired,
  getFavoritesPage: PropTypes.func.isRequired,
  getLoginPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentPage: getCurrentPage(state),
  isFavorites: getFavoritesStatus(state),
  authInfo: getAuthorizationInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoritesPage(status) {
    dispatch(ActionCreator.favoritesPage(status));
  },
  getLoginPage() {
    dispatch(UserActionCreator.loginPage(true));
  }
});

export {Page};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
