import * as React from "react";
import {Link, withRouter} from "react-router-dom";
import {
  getFavoritesStatus,
} from "../../reducer/main/selectors";
import {getAuthorizationInfo, getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {connect} from "react-redux";
import {pageStyle} from "../../const";
import {AppRoute, AuthInfo} from "../../types";
import {ReactNode} from "react";

interface Props {
    authorizationStatus: string;
    children: ReactNode;
    authInfo: AuthInfo | null;
    isFavorites: boolean;
    match: {path: string};
}

const Page: React.FC<Props> = (props: Props) => {
  const {authInfo, authorizationStatus, isFavorites, children, match} = props;
  return (
    <React.Fragment>
      {(authInfo || (!authInfo && authorizationStatus === AuthorizationStatus.NO_AUTH))
        && <div className={`page${match.path === AppRoute.FAVORITES && isFavorites
          ? `` : pageStyle(match.path)}`}>
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Link className="header__logo-link header__logo-link--active" to={AppRoute.ROOT}>
                    <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                  </Link>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      {(authorizationStatus === AuthorizationStatus.AUTH) && <Link
                        className="header__nav-link header__nav-link--profile"
                        to={AppRoute.FAVORITES}
                        href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper"/>
                        <span className="header__user-name user__name">{authInfo.email}</span>
                      </Link>}
                      {(authorizationStatus === AuthorizationStatus.AUTH) || <Link
                        className="header__nav-link header__nav-link--profile"
                        to={AppRoute.LOGIN}
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
          {(match.path === AppRoute.FAVORITES) && <footer className="footer container">
            <Link className="footer__logo-link" to={AppRoute.ROOT}>
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
            </Link>
          </footer>}
        </div>}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isFavorites: getFavoritesStatus(state),
  authInfo: getAuthorizationInfo(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const PageWithRouter = withRouter(Page);
export {PageWithRouter};
export default connect(mapStateToProps)(React.memo(PageWithRouter));
