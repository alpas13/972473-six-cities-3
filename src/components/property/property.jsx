import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {propertyStyle} from "../../const.js";
import Map from "../map/map.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import withHandleForm from "../../hocs/with-handle-form/with-handle-form.jsx";
import {connect} from "react-redux";
import {
  Operation as MainOperation
} from "../../reducer/main/main.js";
import {
  getFavoritesId,
  getNearPlaceOffers,
  getProperty
} from "../../reducer/main/selectors";
import {getAuthorizationInfo} from "../../reducer/user/selectors";
import {ActionCreator as UserActionCreator} from "../../reducer/user/user";
import {findMatch} from "../../utils";
import {appRoute} from "../../const";

const ReviewFormWrapper = withHandleForm(ReviewForm);

const OfferListWrapper = withActiveItem(OffersList);

const Property = React.memo(function Property(props) {
  const {
    offer,
    offers,
    activePin,
    isFavorite,
    handleMouse,
    authInfo,
    getLoginPage,
    toggleFavoriteItem,
    sendReview,
  } = props;

  return (
    <main className="page__main page__main--property">
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
              {authInfo && <button
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
              </button>}
              {!!authInfo && <Link
                className={`property__bookmark-button button`}
                to={appRoute().LOGIN}
                onClick={() => {
                  getLoginPage();
                }}
              >
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
              </Link>}
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
                  <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
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
    </main>
  );
});

Property.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    propertyImage: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    mark: PropTypes.string,
    price: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    rating: PropTypes.object.isRequired,
    features: PropTypes.object.isRequired,
    insideList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    }).isRequired,
    propertyText: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  activePin: PropTypes.array,
  offers: PropTypes.array.isRequired,
  handleMouse: PropTypes.func.isRequired,
  authInfo: PropTypes.object,
  getLoginPage: PropTypes.func.isRequired,
  toggleFavoriteItem: PropTypes.func.isRequired,
  sendReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offer: getProperty(state),
  offers: getNearPlaceOffers(state),
  authInfo: getAuthorizationInfo(state),
  isFavorite: findMatch(getProperty(state).id, getFavoritesId(state)),
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteItem(offerId, currentStatus) {
    dispatch(MainOperation.toggleFavoriteItem(offerId, currentStatus));
  },
  sendReview(offerId, review, clearForm) {
    dispatch(MainOperation.sendReview(offerId, review, clearForm));
  },
  getLoginPage() {
    dispatch(UserActionCreator.loginPage(true));
  }
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
