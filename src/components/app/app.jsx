import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {favoritesStyle, mainStyle} from "../../const.js";
import {connect} from "react-redux";
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
  getPropertyPageStatus,
  getEmptyFavoritesPage,
} from "../../reducer/main/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user";

const PropertyWithActivePin = withActivePin(Property);
const MainWithActivePin = withActivePin(Main);

class App extends PureComponent {
  _renderApp() {
    const {
      offers,
      favoritesPage,
      emptyFavoritesPage,
      login,
      authorizationStatus,
      loginPage,
      propertyPage,
    } = this.props;

    if ((favoritesPage && !authorizationStatus) || loginPage) {
      return (
        <AuthScreen
          onSubmit={login}
        />
      );
    }

    if (emptyFavoritesPage) {
      return (
        <FavoritesEmpty />
      );
    }

    if (favoritesPage && authorizationStatus) {
      return (
        <Favorites />
      );
    }

    if (propertyPage) {
      return (
        <PropertyWithActivePin />
      );
    }

    if (!offers.length) {
      return (
        <MainEmpty />
      );
    }

    return (
      <MainWithActivePin />
    );
  }

  render() {
    const {offers} = this.props;
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
              getLoginPage={() => {}}
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
              styleSettings={favoritesStyle}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  favoritesPage: PropTypes.bool.isRequired,
  emptyFavoritesPage: PropTypes.bool.isRequired,
  loginPage: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.object,
  login: PropTypes.func.isRequired,
  propertyPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  favoritesPage: getFavoritesPageStatus(state),
  emptyFavoritesPage: getEmptyFavoritesPage(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  loginPage: getLoginPageStatus(state),
  propertyPage: getPropertyPageStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
