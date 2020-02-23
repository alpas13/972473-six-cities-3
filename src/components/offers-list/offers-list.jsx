import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const ClassPrefixes = {
  OFFER_FOR_MAIN: `cities__`,
  OFFER_FOR_PROPERTY: `near-places__`
};

const ClassArticle = {
  CLASS_FOR_MAIN: `cities__place-card`,
  CLASS_FOR_PROPERTY: `near-places__card`
};

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

  _selectClass(id) {
    if (id) {
      return {
        classSelect: ClassArticle.CLASS_FOR_PROPERTY,
        prefix: ClassPrefixes.OFFER_FOR_PROPERTY
      };
    }
    return {
      classSelect: ClassArticle.CLASS_FOR_MAIN,
      prefix: ClassPrefixes.OFFER_FOR_MAIN
    };
  }

  _filterNeighbourhoodOffers(offerValue, offersData) {
    let offersCards = [];

    if (offerValue) {
      offerValue.neighbourhoodOffers.map((offerItem) => {
        offersData.slice().filter((item) => offerItem === item.id).map((neighbourhood) => {
          offersCards.push(neighbourhood);
        });
      });
    } else {
      offersCards = offersData;
    }
    return offersCards;
  }

  render() {
    const {offers, onTitleOfferClick, offer} = this.props;

    return (
      <Fragment>
        {this._filterNeighbourhoodOffers(offer, offers).map((offerItem) => {
          return <OfferCard
            key={offerItem.id}
            onTitleOfferClick={onTitleOfferClick}
            onCardMouseOver={this._handleCardMouseOver}
            offer={offerItem}
            classPrefix={this._selectClass(offer)}
          />;
        })}
      </Fragment>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
  offer: PropTypes.object,
};

export default OffersList;
