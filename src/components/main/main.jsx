import React from "react";
import PropTypes from "prop-types";
import {mainStyle} from "../../const.js";
import Header from "../header/header.jsx";
import LocationsList from "../locations-list/locations-list.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const LocationsListWrapper = withActiveItem(LocationsList);
const OffersListWrapper = withActiveItem(OffersList);

const Main = React.memo(function Main(props) {
  const {
    offers,
    offersCount,
    city,
    cities,
    onCityClick,
    activePin,
    handleMouse,
    children,
    authInfo,
    getFavoritesPage,
    getLoginPage,
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header
        authInfo={authInfo}
        onEmailClick={getFavoritesPage}
        onSignInClick={getLoginPage}
      />
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
              <div className="cities__places-list places__list tabs__content"
                onMouseLeave={() => {
                  handleMouse(null);
                }}
              >
                <OffersListWrapper
                  offers={offers}
                  styleSettings={mainStyle}
                  handleSelectItem={handleMouse}
                  authInfo={authInfo}
                  getLoginPage={getLoginPage}
                />
              </div>
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
  handleMouse: PropTypes.func.isRequired,
  authInfo: PropTypes.object,
  getFavoritesPage: PropTypes.func.isRequired,
  getLoginPage: PropTypes.func.isRequired,
};

export default Main;
