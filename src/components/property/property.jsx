import React from "react";
import PropTypes from "prop-types";
import Map from "../map/map.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";

const Property = ({offer, offers, children}) => (
  <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper" />
                  <span className="header__user-name user__name">{offer.userName}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
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
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.hostName}
                </span>
              </div>
              <div className="property__description">
                {/* eslint-disable-next-line react/prop-types */}
                {offer.propertyText.map((item, index) => (
                  <p key={index} className="property__text">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewsList offer={offer}/>
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
          <Map offer={offer} offers={offers} styleSettings={{height: `597px`}}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the
            neighbourhood</h2>
          <div className="near-places__list places__list">
            {children}
          </div>
        </section>
      </div>
    </main>
  </div>
);

Property.propTypes = {
  offer: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    propertyImage: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    mark: PropTypes.string,
    price: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    rating: PropTypes.object.isRequired,
    features: PropTypes.object.isRequired,
    insideList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    hostName: PropTypes.string.isRequired,
    propertyText: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
};

export default Property;
