import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";

const Favorites = React.memo(function Favorites(props) {
  const {children, authInfo, getFavoritesPage, getLoginPage} = props;
  return (
    <div className="page">
      <Header
        authInfo={authInfo}
        onEmailClick={getFavoritesPage}
        onSignInClick={getLoginPage}
      />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {children}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
});

Favorites.propTypes = {
  children: PropTypes.node.isRequired,
  authInfo: PropTypes.object,
  getFavoritesPage: PropTypes.func.isRequired,
  getLoginPage: PropTypes.func.isRequired,
};

export default Favorites;
