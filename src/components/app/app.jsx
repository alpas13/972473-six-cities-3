import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {favoritesStyle, mainStyle} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator, Operation as MainOperation} from "../../reducer/main/main.js";
import {ActionCreator as UserActionCreator, Operation as UserOperation} from "../../reducer/user/user.js";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import AuthScreen from "../auth-screen/auth-screen.jsx";
import Favorites from "../favorites/favorites.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";
import Property from "../property/property.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import withActivePin from "../../hocs/with-active-pin/with-active-pin.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import {
  getOffers,
} from "../../reducer/data/selectors.js";
import {
  getAuthorizationStatus,
  getAuthorizationInfo,
  getLoginPageStatus
} from "../../reducer/user/selectors.js";
import {
  getFavoritesPageStatus,
  getFavorites,
  getPropertyPageStatus,
} from "../../reducer/main/selectors.js";

const PropertyWithActivePin = withActivePin(Property);
const MainWithActivePin = withActivePin(Main);

class App extends PureComponent {
  _renderApp() {
    const {
      offers,
      favoritesPage,
      favorites,
      authorizationStatus,
      authorizationInfo,
      getFavoritesPage,
      login,
      loginPage,
      getLoginPage,
      propertyPage,
    } = this.props;

    if ((favoritesPage && !authorizationStatus) || loginPage) {
      return (
        <AuthScreen
          onSubmit={login}
        />
      );
    }

    if (favoritesPage && !favorites.length) {
      return (
        <FavoritesEmpty
          authInfo={authorizationInfo}
          getFavoritesPage={getFavoritesPage}
          getLoginPage={getLoginPage}
        />
      );
    }

    if (favoritesPage && authorizationStatus) {
      return (
        <Favorites
          offers={favorites}
          authInfo={authorizationInfo}
          getFavoritesPage={getFavoritesPage}
          getLoginPage={getLoginPage}
        />
      );
    }

    if (propertyPage) {
      return (
        <PropertyWithActivePin
          authInfo={authorizationInfo}
          getFavoritesPage={getFavoritesPage}
          getLoginPage={getLoginPage}
        />
      );
    }

    if (!offers.length) {
      return (
        <MainEmpty
          authInfo={authorizationInfo}
          getFavoritesPage={getFavoritesPage}
          getLoginPage={getLoginPage}
        />
      );
    }

    return (
      <MainWithActivePin
        authInfo={authorizationInfo}
        getFavoritesPage={getFavoritesPage}
        getLoginPage={getLoginPage}
      />
    );
  }

  render() {
    const {offers, favorites, authorizationInfo, getFavoritesPage, getLoginPage} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <OffersList
              offers={offers}
              favoritesId={[1, 3, 4]}
              onTitleOfferClick={() => {}}
              styleSettings={mainStyle}
              onChange={() => {}}
              getLoginPage={getLoginPage}
              toggleFavoriteItem={() => {}}
            />
          </Route>
          <Route exact path="/dev-auth">
            <AuthScreen
              onSubmit={()=>{}}
            />
          </Route>
          <Route exact path="/dev-favorites">
            <Favorites
              offers={favorites}
              authInfo={authorizationInfo}
              getFavoritesPage={getFavoritesPage}
              getLoginPage={getLoginPage}
              favoritesOffers={offers}
              styleSettings={favoritesStyle}
            >
            </Favorites>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  favoritesPage: PropTypes.bool.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  login: PropTypes.func.isRequired,
  loginPage: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.object,
  getFavoritesPage: PropTypes.func.isRequired,
  getLoginPage: PropTypes.func.isRequired,
  propertyPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  favoritesPage: getFavoritesPageStatus(state),
  favorites: getFavorites(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  loginPage: getLoginPageStatus(state),
  propertyPage: getPropertyPageStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  getFavoritesPage() {
    dispatch(MainOperation.loadFavorites());
    dispatch(ActionCreator.favoritesPage());
  },
  getLoginPage() {
    dispatch(UserActionCreator.loginPageEnable());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
