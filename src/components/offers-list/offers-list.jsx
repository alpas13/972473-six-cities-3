import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {findMatch} from "../../utils";
import {connect} from "react-redux";
import {
  ActionCreator,
  Operation as MainOperation
} from "../../reducer/main/main.js";
import {
  getFavoritesId,
} from "../../reducer/main/selectors.js";

const OffersList = React.memo(function OffersList(props) {
  const {offers, authInfo, getLoginPage, favoritesId, onTitleOfferClick, styleSettings, onChange, toggleFavoriteItem} = props;

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

const mapStateToProps = (state) => ({
  favoritesId: getFavoritesId(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTitleOfferClick(offer) {
    dispatch(ActionCreator.getProperty(offer));
    dispatch(MainOperation.loadNearPlaceOffers(offer.id));
    dispatch(MainOperation.loadReviews(offer.id));
    dispatch(ActionCreator.propertyPage());
  },
  toggleFavoriteItem(offerId, currentStatus) {
    dispatch(MainOperation.toggleFavoriteItem(offerId, currentStatus));
  },
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);

