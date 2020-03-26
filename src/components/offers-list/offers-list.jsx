import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {findMatch} from "../../utils";

const OffersList = React.memo(function OffersList(props) {
  const {offers, favoritesId, onTitleOfferClick, styleSettings, onChange, getLoginPage, toggleFavoriteItem, authInfo} = props;

  return (
    <>
      {offers.map((offerItem) => {
        return <OfferCard
          key={offerItem.id}
          onTitleOfferClick={onTitleOfferClick}
          offers={offers}
          offer={offerItem}
          isFavorite={findMatch(offerItem.id, favoritesId)}
          styleSettings={styleSettings}
          onChange={onChange}
          authInfo={authInfo}
          getLoginPage={getLoginPage}
          toggleFavoriteItem={toggleFavoriteItem}
        />;
      })}
    </>
  );
});

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  favoritesId: PropTypes.array.isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
  styleSettings: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  authInfo: PropTypes.object,
  getLoginPage: PropTypes.func.isRequired,
  toggleFavoriteItem: PropTypes.func.isRequired,
};

export default OffersList;
