import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
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

    this.state = {
      property: null,
    };

    this._propertyStyle = {
      classSelect: ClassArticle.CLASS_FOR_PROPERTY,
      prefix: ClassPrefixes.OFFER_FOR_PROPERTY
    };

    this._mainStyle = {
      classSelect: ClassArticle.CLASS_FOR_MAIN,
      prefix: ClassPrefixes.OFFER_FOR_MAIN
    };

    this._titleOfferHandler = this._titleOfferHandler.bind(this);
  }

  _titleOfferHandler(offer) {
    this.setState({
      property: offer
    });
  }

  _filterNeighbourhoodOffers(offer, offersData) {
    const offers = [];
    offer.neighbourhoodOffers.map((offerItem) => {
      offersData.slice().filter((item) => offerItem === item.id).map((neighbourhood) => {
        offers.push(neighbourhood);
      });
    });
    return offers;
  }

  _renderApp() {
    const {offersCount, offers, city} = this.props;

    if (this.state.property) {
      return (
        <Property
          offer={this.state.property}
          offers={offers}
        >
          <OffersList
            offers={this._filterNeighbourhoodOffers(this.state.property, offers)}
            onTitleOfferClick={this._titleOfferHandler}
            offer={this.state.property}
            styleSettings={this._propertyStyle}
          />
        </Property>
      );
    }
    return (
      <Main
        offers={offers}
        offersCount={offersCount}
        city = {city}>
        <OffersList
          offers={offers}
          onTitleOfferClick={this._titleOfferHandler}
          styleSettings={this._mainStyle}
        />
      </Main>
    );
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <OffersList
              offers={offers}
              onTitleOfferClick={this._titleOfferHandler}
              styleSettings={this._mainStyle}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  city: PropTypes.string.isRequired,
};

export default App;
