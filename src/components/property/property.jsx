import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Map from "../map/map.jsx";
import Header from "../header/header.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const OfferListWrapper = withActiveItem(OffersList);

class Property extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      offer,
      nearPlaces,
      activePin,
      reviews,
      handleMouseEnter,
      onTitleOfferClick,
      propertyStyle,
      authInfo,
      getFavoritesPage,
      getLoginPage,
    } = this.props;
    return (
      <div className="page">
        <Header
          authInfo={authInfo}
          onEmailClick={getFavoritesPage}
          onSignInClick={getLoginPage}
        />
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
                  <button className={`property__bookmark-button ${offer.bookmark ? `property__bookmark-button--active` : ``} button`} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">{offer.bookmark ? `In bookmarks` : `To bookmarks`}</span>
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
                  <ReviewsList reviews={reviews}/>
                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your
                      review</label>
                    <div className="reviews__rating-form form__rating">
                      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to
                        set <span className="reviews__star">rating</span> and
                        describe your stay with at
                        least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers={nearPlaces}
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
                <OfferListWrapper
                  offers={nearPlaces}
                  onTitleOfferClick={onTitleOfferClick}
                  offer={offer}
                  styleSettings={propertyStyle}
                  handleSelectItem={handleMouseEnter}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Property.propTypes = {
  offer: PropTypes.shape({
    userName: PropTypes.string,
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
  activePin: PropTypes.array,
  nearPlaces: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
  propertyStyle: PropTypes.object.isRequired,
  authInfo: PropTypes.object.isRequired,
  getFavoritesPage: PropTypes.func.isRequired,
  getLoginPage: PropTypes.func.isRequired,
};

export default Property;
