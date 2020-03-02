import React from "react";
import PropTypes from "prop-types";

const OfferCard = React.memo(function OfferCard(props) {
  const {offer, onTitleOfferClick, onCardMapPinToggle, styleSettings} = props;

  return (
    <article className={`${styleSettings.classSelect} place-card`} onMouseEnter={() => {
      onCardMapPinToggle(offer.coords);
    }}
    >
      {offer.mark ? <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div> : null}
      <div className={`${styleSettings.prefix}image-wrapper place-card__image-wrapper`}>
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
            <span style={{width: `${offer.rating[`star`]}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={() => {
            onTitleOfferClick(offer);
          }}>{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.features[`entire`]}</p>
      </div>
    </article>
  );
});

OfferCard.propTypes = {
  onTitleOfferClick: PropTypes.func.isRequired,
  onCardMapPinToggle: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mark: PropTypes.string,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    rating: PropTypes.object.isRequired,
    features: PropTypes.object.isRequired,
    coords: PropTypes.array.isRequired,
  }).isRequired,
  styleSettings: PropTypes.object.isRequired,
};

export default OfferCard;
