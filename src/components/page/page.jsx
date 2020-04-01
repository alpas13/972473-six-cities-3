import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";
import {
  getFavoritesStatus,
  getCurrentPage,
  getFavorites
} from "../../reducer/main/selectors";
import {getAuthorizationInfo, getAuthorizationStatus} from "../../reducer/user/selectors";
import {ActionCreator} from "../../reducer/main/main";
import {ActionCreator as UserActionCreator, AuthorizationStatus} from "../../reducer/user/user";
import {connect} from "react-redux";
import {pageStyle, appRoute} from "../../const";

class Page extends PureComponent {
  render() {
    const {favorites, authInfo, authorizationStatus, isFavorites, getFavoritesPage, getLoginPage, children, match} = this.props;
    return (
      <>
        {(authInfo || (!authInfo && authorizationStatus === AuthorizationStatus.NO_AUTH)) && <div className={`page${match.path === appRoute().FAVORITES && !!favorites.length
          ? `` : pageStyle(match.path)}`}>
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Link className="header__logo-link header__logo-link--active" to={appRoute().ROOT}>
                    <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                  </Link>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      {(authorizationStatus === AuthorizationStatus.AUTH) && <Link
                        className="header__nav-link header__nav-link--profile"
                        to={appRoute().FAVORITES}
                        onClick={() => {
                          getFavoritesPage(isFavorites);
                        }}
                        href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper"/>
                        <span className="header__user-name user__name">{authInfo.email}</span>
                      </Link>}
                      {(authorizationStatus === AuthorizationStatus.AUTH) || <Link
                        className="header__nav-link header__nav-link--profile"
                        to={appRoute().LOGIN}
                        onClick={getLoginPage}
                        href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper"/>
                        <span className="header__login">
                      Sign in
                        </span>
                      </Link>}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          {children}
          {(match.path === appRoute().FAVORITES) && <footer className="footer container">
            <Link className="footer__logo-link" to={appRoute().ROOT}>
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
            </Link>
          </footer>}
        </div>}
      </>
    );
  }
}

Page.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  authInfo: PropTypes.shape({
    email: PropTypes.string,
  }),
  isFavorites: PropTypes.bool.isRequired,
  getFavoritesPage: PropTypes.func.isRequired,
  getLoginPage: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  favorites: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentPage: getCurrentPage(state),
  isFavorites: getFavoritesStatus(state),
  authInfo: getAuthorizationInfo(state),
  authorizationStatus: getAuthorizationStatus(state),
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoritesPage(status) {
    dispatch(ActionCreator.favoritesPage(status));
  },
  getLoginPage() {
    dispatch(UserActionCreator.loginPage(true));
  }
});
const PageWithRouter = withRouter(Page);
export {PageWithRouter};
export default connect(mapStateToProps, mapDispatchToProps)(PageWithRouter);
