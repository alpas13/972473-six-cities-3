export enum AppRoute {
    ROOT = `/`,
    LOGIN = `/login`,
    OFFER = `/offer/`,
    FAVORITES = `/favorites`,
}

export enum SortType {
    POPULAR = `popular`,
    TO_HIGH = `to-high`,
    TO_LOW = `to-low`,
    TOP_RATED = `top-rated`,
}

export enum SortingDirection {
    POPULAR = `Popular`,
    TO_HIGH = `Price: low to high`,
    TO_LOW = `Price: high to low`,
    TOP_RATED = `Top rated first`,
}

export enum PreviewImageSize {
    PLACE_CARD_WIDTH = `260`,
    PLACE_CARD_HEIGHT = `200`,
    FAVORITES_CARD_WIDTH = `150`,
    FAVORITES_CARD_HEIGHT = `110`,
}

export enum ClassPrefixes {
    OFFER_FOR_MAIN = `cities__`,
    OFFER_FOR_PROPERTY = `near-places__`,
    OFFER_FOR_FAVORITES = `favorites__`
}

export enum ClassArticle {
    CLASS_FOR_MAIN = `cities__place-card`,
    CLASS_FOR_PROPERTY = `near-places__card`,
    CLASS_FOR_FAVORITES = `favorites__card`,
    PLACE_CARD_INFO = `place-card__info`,
    FAVORITES_CARD_INFO = `favorites__card-info place-card__info`,
}

export type Coords = number[];

export interface AuthInfo {
    avatarUrl: string;
    email: string;
    id: number;
    isPro: boolean;
    name: string;
}

export interface Review {
    id: number;
    userAvatar: string;
    userName: string;
    rating: number;
    description: string;
    date: string;
}

export interface Offer {
    id: number;
    city: string;
    cityCoords: Coords;
    cityZoom: number;
    propertyImage: string[];
    title: string;
    mark: string;
    previewImage: string,
    price: number;
    bookmark: boolean;
    propertyText: string;
    rating: {
        star: number;
        value: number;
    },
    features: {
        entire: string;
        bedrooms: number;
        adults: number;
    },
    insideList: string[];
    host: {
        avatarUrl: string;
        id: number;
        name: string;
        isPro: boolean;
    },
    coords: Coords;
    coordsZoom: number;
}

export interface StyleSettings {
    classSelect: string;
    prefix: string;
    classCardInfo: string;
    width: string;
    height: string;
}
