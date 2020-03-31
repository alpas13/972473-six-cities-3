import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {appRoute} from "../../const";

const OfferCard = React.memo(function OfferCard(props) {
  const {offer, isFavorite, onTitleOfferClick, styleSettings, onChange, getLoginPage, toggleFavoriteItem, authInfo} = props;

  return (
    <article className={`${styleSettings.classSelect} place-card`} onMouseEnter={
      () => {
        if (onChange) {
          onChange(offer.coords);
        }
      }}
    >
      {offer.mark ? <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div> : null}
      <div className={`${styleSettings.prefix}image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width={styleSettings.width} height={styleSettings.height} alt="Place image"/>
        </a>
      </div>
      <div className={styleSettings.classCardInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {authInfo && <button
            className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`}
            type="button"
            onClick={() => {
              toggleFavoriteItem(offer.id, isFavorite);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>}
          {!!authInfo || <Link
            className={`place-card__bookmark-button button`}
            to={appRoute().LOGIN}
            onClick={() => {
              getLoginPage();
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </Link>}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating[`star`]}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            href="#"
            to={appRoute(offer.id).OFFER}
            onClick={() => {
              onTitleOfferClick(offer.id);
            }}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.features[`entire`]}</p>
      </div>
    </article>
  );
});

OfferCard.propTypes = {
  onTitleOfferClick: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    mark: PropTypes.string,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    rating: PropTypes.object.isRequired,
    features: PropTypes.object.isRequired,
    coords: PropTypes.array.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  styleSettings: PropTypes.object.isRequired,
  authInfo: PropTypes.object,
  getLoginPage: PropTypes.func.isRequired,
  toggleFavoriteItem: PropTypes.func.isRequired,
};

export default OfferCard;
