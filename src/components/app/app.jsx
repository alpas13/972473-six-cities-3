import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      property: null,
    };

    this._titleOfferHandler = this._titleOfferHandler.bind(this);
  }

  _titleOfferHandler(offer) {
    this.setState({
      property: offer
    });
  }

  _renderApp() {
    const {offersCount, offers, city} = this.props;

    if (this.state.property) {
      return (
        <Property
          offer={this.state.property}
        />
      );
    }
    return (
      <Main>
        <OffersList
          offers={offers}
          offersCount={offersCount}
          city = {city}
          onTitleOfferClick={this._titleOfferHandler}
        />
        <Map offers={offers}/>
      </Main>
    );
  }

  render() {
    const {offers, offersCount, city} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <OffersList
              offers={offers}
              offersCount={offersCount}
              city = {city}
              onTitleOfferClick={this._titleOfferHandler}
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
