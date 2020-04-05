import * as React from "react";
import OfferCard from "../offer-card/offer-card";
import {findMatch} from "../../utils";
import {connect} from "react-redux";
import {
  ActionCreator,
  Operation as MainOperation
} from "../../reducer/main/main";
import {
  getFavoritesId,
} from "../../reducer/main/selectors";
import {
  getAuthorizationInfo,
  getAuthorizationStatus
} from "../../reducer/user/selectors";
import {Offer, StyleSettings, AuthInfo} from "../../types";

interface Props {
    offers: Offer[];
    favoritesId: number[];
    onTitleOfferClick: (offerId: number) => void;
    styleSettings: StyleSettings;
    onChange?: (offerCoords: number[]) => void;
    authInfo: AuthInfo | null;
    toggleFavoriteItem: (offerId: number, isFavorite: boolean) => void;
}

const OffersList: React.FC<Props> = (props: Props) => {
  const {offers, authInfo, favoritesId, onTitleOfferClick, styleSettings, onChange, toggleFavoriteItem} = props;

  return (
    <React.Fragment>
      {offers.map((offerItem) => {
        return <OfferCard
          key={offerItem.id}
          onTitleOfferClick={onTitleOfferClick}
          offer={offerItem}
          isFavorite={findMatch(offerItem.id, favoritesId)}
          styleSettings={styleSettings}
          onChange={onChange}
          authInfo={authInfo}
          toggleFavoriteItem={toggleFavoriteItem}
        />;
      })}
    </React.Fragment>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(OffersList));

