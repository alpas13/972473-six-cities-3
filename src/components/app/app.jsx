import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {appRoute} from "../../const.js";
import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Page from "../page/page.jsx";
import Main from "../main/main.jsx";
import AuthScreen from "../auth-screen/auth-screen.jsx";
import Property from "../property/property.jsx";
import withActivePin from "../../hocs/with-active-pin/with-active-pin.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import {
  getOffers,
} from "../../reducer/data/selectors.js";
import {
  getAuthorizationStatus,
  getAuthorizationInfo,
} from "../../reducer/user/selectors.js";
import {
  getFavoritesPageStatus,
  getPropertyPageStatus,
  getEmptyFavoritesPage,
  getLoginPageStatus
} from "../../reducer/main/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user";

const PropertyWithActivePin = withActivePin(Property);
const MainWithActivePin = withActivePin(Main);

class App extends PureComponent {
  render() {
    const {offers, login} = this.props;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={appRoute().ROOT}
            render={() => {
              return (
                <>
                  {offers.length > 0 && <Page><MainWithActivePin /></Page>}
                  {!!offers.length || <Page><MainEmpty /></Page>}
                </>
              );
            }}
          />
          <Route
            exact
            path={appRoute().LOGIN}
            render={() => {
              return (
                <Page>
                  <AuthScreen
                    onSubmit={login}
                  />
                </Page>
              );
            }}
          />
          <Route
            exact
            path={appRoute().OFFER}
            render={(props) => {
              return (
                <Page>
                  <PropertyWithActivePin {...props} />
                </Page>
              );
            }}
          />
        </Switch>
      </Router>
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
