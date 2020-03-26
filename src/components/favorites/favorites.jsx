import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import {uniqueFilter, filterByValue} from "../../utils";
import {favoritesStyle} from "../../const";

const Favorites = React.memo(function Favorites(props) {
  const {offers, authInfo, getFavoritesPage, getLoginPage} = props;
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
            <ul className="favorites__list">
              {uniqueFilter(offers, `city`).map((city) => {
                return (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <OffersList
                        offers={filterByValue(offers, `city`, city)}
                        styleSettings={favoritesStyle}
                        authInfo={authInfo}
                        getLoginPage={getLoginPage}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
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
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  authInfo: PropTypes.object,
  getFavoritesPage: PropTypes.func.isRequired,
  getLoginPage: PropTypes.func.isRequired,
};

export default Favorites;
