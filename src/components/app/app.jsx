import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import withActivePin from "../../hocs/with-active-pin/with-active-pin.jsx";

const PropertyWithActivePin = withActivePin(Property);
const MainWithActivePin = withActivePin(Main);


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
    const {offers, city, cities, property, onCityClick, nearPlaces, onTitleOfferClick, sortType, onSortingChange} = this.props;

    if (property) {
      return (
        <PropertyWithActivePin
          offer={property}
          offers={offers}
          nearPlaces={nearPlaces}
          onTitleOfferClick={onTitleOfferClick}
          propertyStyle={this._propertyStyle}
        />
      );
    }
    return (
      <MainWithActivePin
        offers={offers}
        offersCount={offers.length}
        city = {city}
        cities={cities}
        onCityClick={onCityClick}
        onTitleOfferClick={onTitleOfferClick}
        sortType={sortType}
        propertyStyle={this._mainStyle}
      >
        <PlacesSorting
          city={city}
          sortType={sortType}
          onSortingChange={onSortingChange}
        />
      </MainWithActivePin>
    );
  }

  render() {
    const {offers, onTitleOfferClick} = this.props;
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
              onChange={() => {}}
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
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  cities: state.cities,
  property: state.property,
  nearPlaces: state.nearPlaces,
  sortType: state.sortType,
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
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
