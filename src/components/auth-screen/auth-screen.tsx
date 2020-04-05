import * as React from "react";
import history from "../../history/history";
import {AuthorizationStatus} from "../../reducer/user/user";
import {AppRoute} from "../../types";

interface Props {
    onSubmit: ({login, password}: {login: string; password: string}) => void;
    authorizationStatus: string;
}

class AuthScreen extends React.PureComponent<Props, {}> {
    private loginRef: React.RefObject<HTMLInputElement>;
    private passwordRef: React.RefObject<HTMLInputElement>;

    constructor(props) {
      super(props);

      this.loginRef = React.createRef();
      this.passwordRef = React.createRef();

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      const {onSubmit} = this.props;

      evt.preventDefault();

      onSubmit({
        login: this.loginRef.current.value,
        password: this.passwordRef.current.value,
      });
    }

    componentDidMount() {
      const {authorizationStatus} = this.props;
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        history.push(AppRoute.ROOT);
      }
    }

    componentDidUpdate() {
      if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
        history.push(AppRoute.ROOT);
      }
    }

    render() {
      const {authorizationStatus} = this.props;
      return (
        <React.Fragment>
          {authorizationStatus === AuthorizationStatus.NO_AUTH && <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>
                <form
                  className="login__form form"
                  action="#" method="post"
                  onSubmit={this.handleSubmit}
                >
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input
                      className="login__input form__input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      ref={this.loginRef}
                    />
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input
                      className="login__input form__input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      ref={this.passwordRef}
                    />
                  </div>
                  <button className="login__submit form__submit button" type="submit">Sign
                    in
                  </button>
                </form>
              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </section>
            </div>
          </main>}
        </React.Fragment>
      );
    }
}

export default AuthScreen;
