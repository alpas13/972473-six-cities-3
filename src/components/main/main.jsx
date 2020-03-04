import React from "react";
import PropTypes from "prop-types";
import LocationsList from "../locations-list/locations-list.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const LocationsListWrapper = withActiveItem(LocationsList);
const OffersListWrapper = withActiveItem(OffersList);

const Main = React.memo(function Main(props) {
  const {offers, offersCount, city, cities, onCityClick, activePin, handleMouseEnter, onTitleOfferClick, propertyStyle, children} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"/>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsListWrapper
              cities={cities}
              handleSelectItem={onCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {city}</b>
              {children}
              <OffersListWrapper
                offers={offers}
                onTitleOfferClick={onTitleOfferClick}
                styleSettings={propertyStyle}
                handleSelectItem={handleMouseEnter}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers}
                  styleSettings={{height: `800px`}}
                  activePin={activePin}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
});

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  offersCount: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  activePin: PropTypes.array,
  handleMouseEnter: PropTypes.func.isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
  propertyStyle: PropTypes.object.isRequired,
};

export default Main;
