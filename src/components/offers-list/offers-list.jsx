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
import {
  getAuthorizationInfo,
  getAuthorizationStatus
} from "../../reducer/user/selectors";

const OffersList = React.memo(function OffersList(props) {
  const {offers, authInfo, authorizationStatus, favoritesId, onTitleOfferClick, styleSettings, onChange, toggleFavoriteItem} = props;

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
          toggleFavoriteItem={toggleFavoriteItem}
          authorizationStatus={authorizationStatus}
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
  toggleFavoriteItem: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  favoritesId: getFavoritesId(state),
  authInfo: getAuthorizationInfo(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTitleOfferClick(offerId) {
    dispatch(ActionCreator.setPropertyId(offerId));
    dispatch(MainOperation.loadNearPlaceOffers(offerId));
    dispatch(MainOperation.loadReviews(offerId));
  },
  toggleFavoriteItem(offerId, currentStatus) {
    dispatch(MainOperation.toggleFavoriteItem(offerId, currentStatus));
  },
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);

