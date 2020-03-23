import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = React.memo(function OffersList(props) {
  const {offers, onTitleOfferClick, styleSettings, onChange, getLoginPage, toggleFavoriteItem, authInfo} = props;

  return (
    <div className="cities__places-list places__list tabs__content"
      onMouseLeave={() => {
        onChange(null);
      }}
    >
      {offers.map((offerItem) => {
        return <OfferCard
          key={offerItem.id}
          onTitleOfferClick={onTitleOfferClick}
          offers={offers}
          offer={offerItem}
          styleSettings={styleSettings}
          onChange={onChange}
          authInfo={authInfo}
          getLoginPage={getLoginPage}
          toggleFavoriteItem={toggleFavoriteItem}
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
  authInfo: PropTypes.object,
  getLoginPage: PropTypes.func.isRequired,
  toggleFavoriteItem: PropTypes.func.isRequired,
};

export default OffersList;
