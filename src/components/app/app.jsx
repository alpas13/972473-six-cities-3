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
    const {offers, city, cities, property, nearPlaces, titleOfferHandler} = this.props;

    if (property) {
      return (
        <Property
          offer={property}
          offers={offers}
        >
          <OffersList
            offers={nearPlaces}
            onTitleOfferClick={titleOfferHandler}
            offer={property}
            styleSettings={this._propertyStyle}
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
      >
        <OffersList
          offers={offers}
          onTitleOfferClick={titleOfferHandler}
          styleSettings={this._mainStyle}
        />
      </Main>
    );
  }

  render() {
    const {offers, titleOfferHandler} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <OffersList
              offers={offers}
              onTitleOfferClick={titleOfferHandler}
              styleSettings={this._mainStyle}
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
  titleOfferHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  cities: state.cities,
  property: state.property,
  nearPlaces: state.nearPlaces,
});

const mapDispatchToProps = (dispatch) => ({
  titleOfferHandler(offer) {
    dispatch(ActionCreator.getProperty(offer));
    dispatch(ActionCreator.getNearPlaces(offer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
