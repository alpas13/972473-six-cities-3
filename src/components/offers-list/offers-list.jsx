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
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, index) => {
          return <OfferCard key={offer.id + index}
            onTitleOfferClick={onTitleOfferClick}
            onCardMouseOver={this._handleCardMouseOver}
            offer={offer}
          />;
        })}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
};

export default OffersList;
