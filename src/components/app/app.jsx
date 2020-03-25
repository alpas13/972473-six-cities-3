import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator, Operation as MainOperation} from "../../reducer/main/main.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {ActionCreator as UserActionCreator, Operation as UserOperation} from "../../reducer/user/user.js";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import AuthScreen from "../auth-screen/auth-screen.jsx";
import Favorites from "../favorites/favorites.jsx";
import FavoritesOffersList
  from "../favorites-offers-list/favorites-offers-list.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";
import Property from "../property/property.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import withActivePin from "../../hocs/with-active-pin/with-active-pin.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import {
  getOffers,
  getCity,
  getCities
} from "../../reducer/data/selectors.js";
import {
  getAuthorizationStatus,
  getAuthorizationInfo,
  getLoginPageStatus
} from "../../reducer/user/selectors.js";
import {
  getSortType,
  getProperty,
  getNearPlaceOffers,
  getReviews,
  getFavoritesPageStatus,
  getFavorites,
  getFavoritesId,
  getPropertyPageStatus,
} from "../../reducer/main/selectors.js";

const PropertyWithActivePin = withActivePin(Property);
const MainWithActivePin = withActivePin(Main);

const PreviewImageSize = {
  placeCardWidth: `260`,
  placeCardHeight: `200`,
  favoritesCardWidth: `150`,
  favoritesCardHeight: `110`,
};

const ClassPrefixes = {
  OFFER_FOR_MAIN: `cities__`,
  OFFER_FOR_PROPERTY: `near-places__`,
  OFFER_FOR_FAVORITES: `favorites__`
};

const ClassArticle = {
  CLASS_FOR_MAIN: `cities__place-card`,
  CLASS_FOR_PROPERTY: `near-places__card`,
  CLASS_FOR_FAVORITES: `favorites__card`,
  PLACE_CARD_INFO: `place-card__info`,
  FAVORITES_CARD_INFO: `favorites__card-info place-card__info`,
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._propertyStyle = {
      classSelect: ClassArticle.CLASS_FOR_PROPERTY,
      prefix: ClassPrefixes.OFFER_FOR_PROPERTY,
      classCardInfo: ClassArticle.PLACE_CARD_INFO,
      width: PreviewImageSize.placeCardWidth,
      height: PreviewImageSize.placeCardHeight,
    };

    this._mainStyle = {
      classSelect: ClassArticle.CLASS_FOR_MAIN,
      prefix: ClassPrefixes.OFFER_FOR_MAIN,
      classCardInfo: ClassArticle.PLACE_CARD_INFO,
      width: PreviewImageSize.placeCardWidth,
      height: PreviewImageSize.placeCardHeight,
    };

    this._favoritesStyle = {
      classSelect: ClassArticle.CLASS_FOR_FAVORITES,
      prefix: ClassPrefixes.OFFER_FOR_FAVORITES,
      classCardInfo: ClassArticle.FAVORITES_CARD_INFO,
      width: PreviewImageSize.favoritesCardWidth,
      height: PreviewImageSize.favoritesCardHeight,
    };
  }

  _renderApp() {
    const {
      offers,
      city,
      cities,
      property,
      onCityClick,
      nearPlaces,
      reviews,
      onTitleOfferClick,
      sortType,
      onSortingChange,
      favoritesPage,
      favorites,
      favoritesId,
      authorizationStatus,
      authorizationInfo,
      getFavoritesPage,
      login,
      loginPage,
      getLoginPage,
      toggleFavoriteItem,
      propertyPage,
      sendReview,
    } = this.props;

    if ((favoritesPage && !authorizationStatus) || loginPage) {
      return (
        <AuthScreen
          onSubmit={login}
        />
      );
    }

    if (favoritesPage && !favorites.length) {
      return (
        <FavoritesEmpty
          authInfo={authorizationInfo}
          getFavoritesPage={getFavoritesPage}
          getLoginPage={getLoginPage}
        />
      );
    }

    if (favoritesPage && authorizationStatus) {
      return (
        <Favorites
          authInfo={authorizationInfo}
          getFavoritesPage={getFavoritesPage}
          getLoginPage={getLoginPage}
        >
          <FavoritesOffersList
            favoritesOffers={favorites}
            onTitleOfferClick={onTitleOfferClick}
            styleSettings={this._favoritesStyle}
            authInfo={authorizationInfo}
            toggleFavoriteItem={toggleFavoriteItem}
            getLoginPage={getLoginPage}
          />
        </Favorites>
      );
    }

    if (property && propertyPage) {
      return (
        <PropertyWithActivePin
          offer={property}
          offers={nearPlaces}
          reviews={reviews}
          favoritesId={favoritesId}
          onTitleOfferClick={onTitleOfferClick}
          propertyStyle={this._propertyStyle}
          authInfo={authorizationInfo}
          getFavoritesPage={getFavoritesPage}
          getLoginPage={getLoginPage}
          toggleFavoriteItem={toggleFavoriteItem}
          sendReview={sendReview}
        />
      );
    }

    if (!offers.length) {
      return (
        <MainEmpty
          authInfo={authorizationInfo}
          getFavoritesPage={getFavoritesPage}
          getLoginPage={getLoginPage}
        />
      );
    }

    return (
      <MainWithActivePin
        offers={offers}
        offersCount={offers.length}
        city = {city}
        cities={cities}
        favoritesId={favoritesId}
        onCityClick={onCityClick}
        onTitleOfferClick={onTitleOfferClick}
        sortType={sortType}
        propertyStyle={this._mainStyle}
        authInfo={authorizationInfo}
        getFavoritesPage={getFavoritesPage}
        getLoginPage={getLoginPage}
        toggleFavoriteItem={toggleFavoriteItem}
      >
        <PlacesSorting
          city={city}
          sortType={sortType}
          onSortingChange={onSortingChange}
        />
      </MainWithActivePin>
    );
  }

  render() {
    const {offers, favoritesId, onTitleOfferClick, authorizationInfo, getFavoritesPage, getLoginPage, toggleFavoriteItem} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <OffersList
              offers={offers}
              favoritesId={favoritesId}
              onTitleOfferClick={onTitleOfferClick}
              styleSettings={this._mainStyle}
              onChange={() => {}}
              getLoginPage={getLoginPage}
              toggleFavoriteItem={toggleFavoriteItem}
            />
          </Route>
          <Route exact path="/dev-auth">
            <AuthScreen
              onSubmit={()=>{}}
            />
          </Route>
          <Route exact path="/dev-favorites">
            <Favorites
              authInfo={authorizationInfo}
              getFavoritesPage={getFavoritesPage}
              getLoginPage={getLoginPage}
            >
              <FavoritesOffersList
                favoritesOffers={offers}
                onTitleOfferClick={onTitleOfferClick}
                styleSettings={this._favoritesStyle}
                authInfo={authorizationInfo}
                getLoginPage={getLoginPage}
                toggleFavoriteItem={toggleFavoriteItem}
              />
            </Favorites>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  property: PropTypes.object,
  nearPlaces: PropTypes.array.isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
  reviews: PropTypes.array,
  favoritesPage: PropTypes.bool.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  favoritesId: PropTypes.array.isRequired,
  login: PropTypes.func.isRequired,
  loginPage: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.object,
  getFavoritesPage: PropTypes.func.isRequired,
  getLoginPage: PropTypes.func.isRequired,
  toggleFavoriteItem: PropTypes.func.isRequired,
  propertyPage: PropTypes.bool.isRequired,
  sendReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  city: getCity(state),
  cities: getCities(state),
  property: getProperty(state),
  nearPlaces: getNearPlaceOffers(state),
  sortType: getSortType(state),
  reviews: getReviews(state),
  favoritesPage: getFavoritesPageStatus(state),
  favorites: getFavorites(state),
  favoritesId: getFavoritesId(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  loginPage: getLoginPageStatus(state),
  propertyPage: getPropertyPageStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTitleOfferClick(offer) {
    dispatch(ActionCreator.getProperty(offer));
    dispatch(MainOperation.loadNearPlaceOffers(offer.id));
    dispatch(MainOperation.loadReviews(offer.id));
    dispatch(ActionCreator.propertyPage());
  },
  onCityClick(city) {
    dispatch(DataActionCreator.changeCity(city));
  },
  onSortingChange(sortValue, city) {
    dispatch(ActionCreator.changeSorting(sortValue, city));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  getFavoritesPage() {
    dispatch(MainOperation.loadFavorites());
    dispatch(ActionCreator.favoritesPage());
  },
  getLoginPage() {
    dispatch(UserActionCreator.loginPageEnable());
  },
  toggleFavoriteItem(offerId, currentStatus) {
    dispatch(MainOperation.toggleFavoriteItem(offerId, currentStatus));
  },
  sendReview(offerId, review, clearForm) {
    dispatch(MainOperation.sendReview(offerId, review, clearForm));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
