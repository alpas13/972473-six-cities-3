import React from "react";
import PropTypes from "prop-types";

const OfferCard = (props) => {
  const {offer, onTitleOfferClick, onCardMouseOver} = props;

  return (
    <article className="cities__place-card place-card" onMouseOver={() => {
      onCardMouseOver(offer);
    }}>
      {offer.mark ? <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.bookmark ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{offer.bookmark ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onTitleOfferClick}>{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  onTitleOfferClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    mark: PropTypes.string,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bookmark: PropTypes.boolean,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired
};

export default OfferCard;
