import React, {Fragment, PureComponent} from "react";
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
    const {offers, onTitleOfferClick, styleSettings} = this.props;

    return (
      <Fragment>
        {offers.map((offerItem) => {
          return <OfferCard
            key={offerItem.id}
            onTitleOfferClick={onTitleOfferClick}
            onCardMouseOver={this._handleCardMouseOver}
            offer={offerItem}
            styleSettings={styleSettings}
          />;
        })}
      </Fragment>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
  styleSettings: PropTypes.object.isRequired
};

export default OffersList;
