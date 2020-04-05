import * as React from "react";
import {AppRoute} from "../../types";
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

interface Props {
    authorizationStatus: string;
    login: ({login, password}: {login: string; password: string}) => void;
}

const PropertyWithActivePin = withActivePin(Property);
const MainWithActivePin = withActivePin(Main);

const App: React.FC<Props> = (props: Props) => {
  const {login, authorizationStatus} = props;
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT} render={
          // eslint-disable-next-line no-shadow
          (props) => {
            return (
              <PageWithRouter {...props}>
                <MainWithActivePin {...props}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(App));
