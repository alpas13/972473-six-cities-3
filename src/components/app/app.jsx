import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Property from "../property/property.jsx";

const ClassPrefixes = {
  OFFER_FOR_MAIN: `cities__`,
  OFFER_FOR_PROPERTY: `near-places__`
};

const ClassArticle = {
  CLASS_FOR_MAIN: `cities__place-card`,
  CLASS_FOR_PROPERTY: `near-places__card`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._propertyStyle = {
      classSelect: ClassArticle.CLASS_FOR_PROPERTY,
      prefix: ClassPrefixes.OFFER_FOR_PROPERTY
    };

    this._mainStyle = {
      classSelect: ClassArticle.CLASS_FOR_MAIN,
      prefix: ClassPrefixes.OFFER_FOR_MAIN
    };
  }

  _renderApp() {
    const {offers, city, cities, property, nearPlaces, onTitleOfferClick, onCityClick, sortType, onSortingChange, onCardMapPinToggle, activePin} = this.props;

    if (property) {
      return (
        <Property
          activePin={activePin}
          offer={property}
          offers={offers}
        >
          <OffersList
            offers={nearPlaces}
            onTitleOfferClick={onTitleOfferClick}
            offer={property}
            styleSettings={this._propertyStyle}
            onCardMapPinToggle={onCardMapPinToggle}
          />
        </Property>
      );
    }
    return (
      <Main
        offers={offers}
        offersCount={offers.length}
        city = {city}
        cities={cities}
        onCityClick={onCityClick}
        sortType={sortType}
        onSortingChange={onSortingChange}
        activePin={activePin}
      >
        <OffersList
          offers={offers}
          onTitleOfferClick={onTitleOfferClick}
          styleSettings={this._mainStyle}
          onCardMapPinToggle={onCardMapPinToggle}
        />
      </Main>
    );
  }

  render() {
    const {offers, onTitleOfferClick, onCardMapPinToggle} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <OffersList
              offers={offers}
              onTitleOfferClick={onTitleOfferClick}
              styleSettings={this._mainStyle}
              onCardMapPinToggle={onCardMapPinToggle}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  property: PropTypes.object,
  nearPlaces: PropTypes.array,
  onTitleOfferClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
  activePin: PropTypes.array,
  onCardMapPinToggle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  cities: state.cities,
  property: state.property,
  nearPlaces: state.nearPlaces,
  sortType: state.sortType,
  activePin: state.activePin,
});

const mapDispatchToProps = (dispatch) => ({
  onTitleOfferClick(offer) {
    dispatch(ActionCreator.getProperty(offer));
    dispatch(ActionCreator.getNearPlaces(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
  onSortingChange(sortValue, city) {
    dispatch(ActionCreator.changeSorting(sortValue, city));
  },
  onCardMapPinToggle(offerCoords) {
    dispatch(ActionCreator.activatePin(offerCoords));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
