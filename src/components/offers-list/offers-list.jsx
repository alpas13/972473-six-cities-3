import React, {Fragment} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = (props) => {
  const {offers, onTitleOfferClick, styleSettings, onCardMapPinToggle} = props;

  return (
    <Fragment>
      {offers.map((offerItem, index) => {
        return <OfferCard
          key={offerItem.id + index}
          onTitleOfferClick={onTitleOfferClick}
          onCardMapPinToggle={onCardMapPinToggle}
          offer={offerItem}
          styleSettings={styleSettings}
        />;
      })}
    </Fragment>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
  styleSettings: PropTypes.object.isRequired,
  onCardMapPinToggle: PropTypes.func.isRequired,
};

export default OffersList;
