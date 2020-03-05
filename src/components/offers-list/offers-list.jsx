import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = React.memo(function OffersList(props) {
  const {offers, onTitleOfferClick, styleSettings, onChange} = props;

  return (
    <div className="cities__places-list places__list tabs__content"
      onMouseLeave={() => {
        onChange(null);
      }}
    >
      {offers.map((offerItem, index) => {
        return <OfferCard
          key={offerItem.id + index}
          onTitleOfferClick={onTitleOfferClick}
          offer={offerItem}
          styleSettings={styleSettings}
          onChange={onChange}
        />;
      })}
    </div>
  );
});

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
  styleSettings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OffersList;
