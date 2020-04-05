import * as React from "react";
import {propertyStyle} from "../../const";
import Map from "../map/map";
import ReviewsList from "../reviews-list/reviews-list";
import OffersList from "../offers-list/offers-list";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import ReviewForm from "../review-form/review-form";
import withHandleForm from "../../hocs/with-handle-form/with-handle-form";
import {connect} from "react-redux";
import {getOfferById} from "../../reducer/data/selectors";
import {
  Operation as MainOperation
} from "../../reducer/main/main";
import {
  getPropertyId,
  getFavoritesId,
  getNearPlaceOffers,
} from "../../reducer/main/selectors";
import {
  getAuthorizationInfo,
} from "../../reducer/user/selectors";
import {findMatch} from "../../utils";
import {ActionCreator} from "../../reducer/main/main";
import {Coords, AuthInfo, Offer} from "../../types";

const ReviewFormWrapper = withHandleForm(ReviewForm);
const OfferListWrapper = withActiveItem(OffersList);

interface Props {
    offerId: number;
    match: {params: {id: number}};
    offer: Offer;
    isFavorite: boolean;
    activePin: Coords | null;
    offers: Offer[];
    handleMouse: (offerCoords: number[]) => void;
    authInfo: AuthInfo | null;
    toggleFavoriteItem: (offerId: number, status: boolean) => void;
    sendReview: (offerId: number, review: {
        rating: string,
        comment: string,
    }, clearForm: (status: boolean) => void) => void;
    updateOfferId: (offerId: number) => void;
}

class Property extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  proofOfferId(currentId, newId, changeId) {
    if (!currentId || (currentId && currentId !== Number(newId))) {
      changeId(Number(newId));
    }
  }

  componentDidMount() {
    const {offerId, updateOfferId, offer} = this.props;
    const {id} = this.props.match.params;
    if (!offer) {
      return;
    }
    if (!offerId) {
      updateOfferId(id);
    }
  }

  componentDidUpdate(offerId) {
    if (this.props.offerId !== offerId) {
      this.proofOfferId(this.props.offerId, this.props.match.params.id, this.props.updateOfferId);
    }
  }

  render() {
    const {
      offer,
      offers,
      activePin,
      isFavorite,
      handleMouse,
      authInfo,
      toggleFavoriteItem,
      sendReview,
    } = this.props;

    return (
      <React.Fragment>
        {offer && <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {/* eslint-disable-next-line react/prop-types */}
                {offer.propertyImage.map((image, index) => (
                  <div key={image + index} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.mark ? <div className="property__mark">
                  <span>{offer.mark}</span>
                </div> : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{offer.title}</h1>
                  <button
                    className={`property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``} button`}
                    type="button"
                    onClick={() => {
                      toggleFavoriteItem(offer.id, offer.bookmark);
                    }}
                  >
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${offer.rating[`star`]}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating[`value`]}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.features[`entire`]}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.features[`bedrooms`]} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.features[`adults`]} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {/* eslint-disable-next-line react/prop-types */}
                    {offer.insideList.map((item, index) => (
                      <li key={item + index} className="property__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${offer.host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={`/${offer.host.avatarUrl}`} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                    {offer.host.isPro && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.propertyText}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList />
                  {authInfo && <ReviewFormWrapper
                    offerId={offer.id}
                    onSubmit={sendReview}
                  />}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers={offers}
                activePin={activePin}
                styleSettings={{height: `597px`}}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the
            neighbourhood</h2>
              <div className="near-places__list places__list">
                <div className="cities__places-list places__list tabs__content"
                  onMouseLeave={() => {
                    handleMouse(null);
                  }}
                >
                  <OfferListWrapper
                    offers={offers}
                    styleSettings={propertyStyle}
                    handleSelectItem={handleMouse}
                  />
                </div>
              </div>
            </section>
          </div>
        </main>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  offerId: getPropertyId(state),
  offer: getOfferById(state),
  offers: getNearPlaceOffers(state),
  authInfo: getAuthorizationInfo(state),
  isFavorite: findMatch(getPropertyId(state), getFavoritesId(state)),
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteItem(offerId, currentStatus) {
    dispatch(MainOperation.toggleFavoriteItem(offerId, currentStatus));
  },
  sendReview(offerId, review, clearForm) {
    dispatch(MainOperation.sendReview(offerId, review, clearForm));
  },
  updateOfferId(offerId) {
    dispatch(ActionCreator.setPropertyId(offerId));
    dispatch(MainOperation.loadNearPlaceOffers(offerId));
    dispatch(MainOperation.loadReviews(offerId));
  }
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
