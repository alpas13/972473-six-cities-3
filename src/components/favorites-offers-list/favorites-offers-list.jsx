import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {findMatch, uniqueFilter} from "../../utils";

const FavoritesOffersList = React.memo(function FavoritesOffersList(props) {
  const {favoritesOffers, favoritesId, onTitleOfferClick, styleSettings, getLoginPage, toggleFavoriteItem, authInfo} = props;

  return (
    <ul className="favorites__list">
      {uniqueFilter(favoritesOffers, `city`).map((city) => {
        return (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {favoritesOffers
                      .slice()
                      .filter((favoriteOffer) => favoriteOffer.city === city)
                      .map((favoriteOffer) => {
                        return (
                          <OfferCard
                            key={favoriteOffer.id}
                            offer={favoriteOffer}
                            offers={favoritesOffers}
                            isFavorite={findMatch(favoriteOffer.id, favoritesId)}
                            onTitleOfferClick={onTitleOfferClick}
                            styleSettings={styleSettings}
                            authInfo={authInfo}
                            getLoginPage={getLoginPage}
                            toggleFavoriteItem={toggleFavoriteItem}
                          />
                        );
                      })}
            </div>
          </li>
        );
      })}
    </ul>
  );
});

FavoritesOffersList.propTypes = {
  favoritesOffers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  favoritesId: PropTypes.array.isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
  styleSettings: PropTypes.object.isRequired,
  authInfo: PropTypes.object,
  getLoginPage: PropTypes.func.isRequired,
  toggleFavoriteItem: PropTypes.func.isRequired,
};

export default FavoritesOffersList;
