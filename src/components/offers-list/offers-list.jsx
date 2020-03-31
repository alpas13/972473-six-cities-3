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
import {getAuthorizationInfo} from "../../reducer/user/selectors";
import {ActionCreator as UserActionCreator} from "../../reducer/user/user";

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
  authInfo: getAuthorizationInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTitleOfferClick(offerId) {
    dispatch(ActionCreator.setPropertyId(offerId));
    dispatch(MainOperation.loadNearPlaceOffers(offerId));
    dispatch(MainOperation.loadReviews(offerId));
    dispatch(ActionCreator.propertyPage());
  },
  toggleFavoriteItem(offerId, currentStatus) {
    dispatch(MainOperation.toggleFavoriteItem(offerId, currentStatus));
  },
  getLoginPage() {
    dispatch(UserActionCreator.loginPage(true));
  }
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);

