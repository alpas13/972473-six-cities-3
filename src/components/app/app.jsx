import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      property: null,
    };
  }

  _titleOfferHandler(offerId) {
    this.setState({
      property: offerId
    });
  }

  render() {
    const {offersCount, offers} = this.props;

    return (
      <Main offersCount = {offersCount}>
        <OffersList
          offers={offers}
          onTitleOfferClick={this._titleOfferHandler}
        />
      </Main>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
