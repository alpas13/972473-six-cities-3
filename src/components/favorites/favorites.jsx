import React, {Fragment} from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import {uniqueFilter, filterByValue} from "../../utils";
import {favoritesStyle} from "../../const";
import {connect} from "react-redux";
import {getFavorites} from "../../reducer/main/selectors";

const Favorites = React.memo(function Favorites(props) {
  const {offers} = props;
  return (
    <Fragment>
      {!!offers.length && <main className="page__main page__main--favorites">
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
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>}
      {!!offers.length || <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to
                narrow down search or plan yor future trips.</p>
            </div>
          </section>
        </div>
      </main>}
    </Fragment>
  );
});

Favorites.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  offers: getFavorites(state),
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
