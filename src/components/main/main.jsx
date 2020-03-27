import React from "react";
import PropTypes from "prop-types";
import {mainStyle} from "../../const.js";
import Header from "../header/header.jsx";
import LocationsList from "../locations-list/locations-list.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import {connect} from "react-redux";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data";
import {ActionCreator} from "../../reducer/main/main";
import {getCities, getCity, getOffers} from "../../reducer/data/selectors";
import {getSortType} from "../../reducer/main/selectors";

const LocationsListWrapper = withActiveItem(LocationsList);
const OffersListWrapper = withActiveItem(OffersList);

const Main = React.memo(function Main(props) {
  const {
    offers,
    city,
    cities,
    onCityClick,
    activePin,
    handleMouse,
    sortType,
    onSortingChange,
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header />
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
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <PlacesSorting
                city={city}
                sortType={sortType}
                onSortingChange={onSortingChange}
              />
              <div className="cities__places-list places__list tabs__content"
                onMouseLeave={() => {
                  handleMouse(null);
                }}
              >
                <OffersListWrapper
                  offers={offers}
                  styleSettings={mainStyle}
                  handleSelectItem={handleMouse}
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
  city: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
  activePin: PropTypes.array,
  handleMouse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  city: getCity(state),
  cities: getCities(state),
  sortType: getSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(DataActionCreator.changeCity(city));
  },
  onSortingChange(sortValue, city) {
    dispatch(ActionCreator.changeSorting(sortValue, city));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
