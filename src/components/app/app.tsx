import * as React from "react";
import PropTypes from "prop-types";
import {AppRoute} from "../../const";
import {connect} from "react-redux";
import {Router, Switch, Route} from "react-router-dom";
import history from "../../history/history";
import PageWithRouter from "../page/page";
import Main from "../main/main";
import PrivateRoute from "../private-route/private-route";
import AuthScreen from "../auth-screen/auth-screen";
import Property from "../property/property";
import Favorites from "../favorites/favorites";
import withActivePin from "../../hocs/with-active-pin/with-active-pin";
import {
  Operation as UserOperation
} from "../../reducer/user/user";
import {
  getAuthorizationStatus,
} from "../../reducer/user/selectors";

const PropertyWithActivePin = withActivePin(Property);
const MainWithActivePin = withActivePin(Main);

const App = React.memo(function App(props) {
  const {login, authorizationStatus} = props;
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT} render={
          // eslint-disable-next-line no-shadow
          (props) => {
            return (
              <PageWithRouter {...props}>
                <MainWithActivePin/>
              </PageWithRouter>
            );
          }}/>
        <Route exact path={AppRoute.LOGIN} render={
          // eslint-disable-next-line no-shadow
          (props) => {
            return (
              <PageWithRouter {...props}>
                <AuthScreen onSubmit={login} authorizationStatus={authorizationStatus}/>
              </PageWithRouter>
            );
          }}/>
        <Route exact path={AppRoute.OFFER + `:id`} render={
          // eslint-disable-next-line no-shadow
          (props) => {
            return (
              <PageWithRouter {...props}>
                <PropertyWithActivePin {...props} />
              </PageWithRouter>
            );
          }}/>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={
          // eslint-disable-next-line no-shadow
          (props) => {
            return (
              <PageWithRouter {...props}>
                <Favorites/>
              </PageWithRouter>
            );
          }}/>
      </Switch>
    </Router>
  );
});

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
