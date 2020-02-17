import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardMouseOver = this._handleCardMouseOver.bind(this);

    this.state = {
      card: {},
    };
  }

  _handleCardMouseOver(offer) {
    this.setState({
      card: offer,
    });
  }

  render() {
    const {offers, onTitleOfferClick} = this.props;

    return (
      offers.map((offer) => {
        return (
          <OfferCard key={offer.id}
            onTitleOfferClick={onTitleOfferClick}
            onCardMouseOver={this._handleCardMouseOver}
            offer={offer}
          />);
      })
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
};

export default OffersList;
