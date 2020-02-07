import React, {Fragment} from "react";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offersCount} = props;

  return (
    <main className="page__main page__main--index">
      <Fragment>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <Fragment>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Paris</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Cologne</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Brussels</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item tabs__item--active">
                    <span>Amsterdam</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Hamburg</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Dusseldorf</span>
                  </a>
                </li>
              </Fragment>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Fragment>
              <section className="cities__places places">
                <Fragment>
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersCount} places to stay in Amsterdam</b>
                  <form className="places__sorting" action="#" method="get">
                    <Fragment>
                      <span className="places__sorting-caption">Sort by</span>
                      <span className="places__sorting-type" tabIndex="0">
                      Popular
                        <svg className="places__sorting-arrow" width="7" height="4">
                          <use xlinkHref="#icon-arrow-select"></use>
                        </svg>
                      </span>
                      <ul className="places__options places__options--custom places__options--opened">
                        <Fragment>
                          <li className="places__option places__option--active" tabIndex="0">Popular</li>
                          <li className="places__option" tabIndex="0">Price: low to
                            high
                          </li>
                          <li className="places__option" tabIndex="0">Price: high to
                            low
                          </li>
                          <li className="places__option" tabIndex="0">Top rated first
                          </li>
                        </Fragment>
                      </ul>
                      <select className="places__sorting-type" id="places-sorting">
                        <Fragment>
                          <option className="places__option" value="popular" selected="">Popular</option>
                          <option className="places__option" value="to-high">Price: low to high</option>
                          <option className="places__option" value="to-low">Price: high to low</option>
                          <option className="places__option" value="top-rated">Top rated first</option>
                        </Fragment>
                      </select>
                    </Fragment>
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    <Fragment>
                      <article className="cities__place-card place-card">
                        <Fragment>
                          <div className="place-card__mark">
                            <span>Premium</span>
                          </div>
                          <div className="cities__image-wrapper place-card__image-wrapper">
                            <a href="#">
                              <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"/>
                            </a>
                          </div>
                          <div className="place-card__info">
                            <Fragment>
                              <div className="place-card__price-wrapper">
                                <Fragment>
                                  <div className="place-card__price">
                                    <Fragment>
                                      <b className="place-card__price-value">&euro;120</b>
                                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                                    </Fragment>
                                  </div>
                                  <button className="place-card__bookmark-button button" type="button">
                                    <Fragment>
                                      <svg className="place-card__bookmark-icon" width="18" height="19">
                                        <use xlinkHref="#icon-bookmark"></use>
                                      </svg>
                                      <span className="visually-hidden">To bookmarks</span>
                                    </Fragment>
                                  </button>
                                </Fragment>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <Fragment>
                                    {/* <span style="width: 80%"></span>*/}
                                    <span className="visually-hidden">Rating</span>
                                  </Fragment>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <a href="#">Beautiful &amp; luxurious apartment at great
                                  location
                                </a>
                              </h2>
                              <p className="place-card__type">Apartment</p>
                            </Fragment>
                          </div>
                        </Fragment>
                      </article>
                      <article className="cities__place-card place-card">
                        <Fragment>
                          <div className="cities__image-wrapper place-card__image-wrapper">
                            <a href="#">
                              <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                            </a>
                          </div>
                          <div className="place-card__info">
                            <Fragment>
                              <div className="place-card__price-wrapper">
                                <Fragment>
                                  <div className="place-card__price">
                                    <Fragment>
                                      <b className="place-card__price-value">&euro;80</b>
                                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                                    </Fragment>
                                  </div>
                                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                    <Fragment>
                                      <svg className="place-card__bookmark-icon" width="18" height="19">
                                        <use xlinkHref="#icon-bookmark"></use>
                                      </svg>
                                      <span className="visually-hidden">In bookmarks</span>
                                    </Fragment>
                                  </button>
                                </Fragment>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <Fragment>
                                    {/* <span style="width: 80%"></span>*/}
                                    <span className="visually-hidden">Rating</span>
                                  </Fragment>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <a href="#">Wood and stone place</a>
                              </h2>
                              <p className="place-card__type">Private room</p>
                            </Fragment>
                          </div>
                        </Fragment>
                      </article>
                      <article className="cities__place-card place-card">
                        <Fragment>
                          <div className="cities__image-wrapper place-card__image-wrapper">
                            <a href="#">
                              <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
                            </a>
                          </div>
                          <div className="place-card__info">
                            <Fragment>
                              <div className="place-card__price-wrapper">
                                <Fragment>
                                  <div className="place-card__price">
                                    <Fragment>
                                      <b className="place-card__price-value">&euro;132</b>
                                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                                    </Fragment>
                                  </div>
                                  <button className="place-card__bookmark-button button" type="button">
                                    <Fragment>
                                      <svg className="place-card__bookmark-icon" width="18" height="19">
                                        <use xlinkHref="#icon-bookmark"></use>
                                      </svg>
                                      <span className="visually-hidden">To bookmarks</span>
                                    </Fragment>
                                  </button>
                                </Fragment>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <Fragment>
                                    {/* <span style="width: 80%"></span>*/}
                                    <span className="visually-hidden">Rating</span>
                                  </Fragment>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <a href="#">Canal View Prinsengracht</a>
                              </h2>
                              <p className="place-card__type">Apartment</p>
                            </Fragment>
                          </div>
                        </Fragment>
                      </article>
                      <article className="cities__place-card place-card">
                        <Fragment>
                          <div className="place-card__mark">
                            <span>Premium</span>
                          </div>
                          <div className="cities__image-wrapper place-card__image-wrapper">
                            <a href="#">
                              <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
                            </a>
                          </div>
                          <div className="place-card__info">
                            <Fragment>
                              <div className="place-card__price-wrapper">
                                <Fragment>
                                  <div className="place-card__price">
                                    <Fragment>
                                      <b className="place-card__price-value">&euro;180</b>
                                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                                    </Fragment>
                                  </div>
                                  <button className="place-card__bookmark-button button" type="button">
                                    <Fragment>
                                      <svg className="place-card__bookmark-icon" width="18" height="19">
                                        <use xlinkHref="#icon-bookmark"></use>
                                      </svg>
                                      <span className="visually-hidden">To bookmarks</span>
                                    </Fragment>
                                  </button>
                                </Fragment>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <Fragment>
                                    {/* <span style="width: 100%"></span>*/}
                                    <span className="visually-hidden">Rating</span>
                                  </Fragment>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <a href="#">Nice, cozy, warm big bed apartment</a>
                              </h2>
                              <p className="place-card__type">Apartment</p>
                            </Fragment>
                          </div>
                        </Fragment>
                      </article>
                      <article className="cities__place-card place-card">
                        <Fragment>
                          <div className="cities__image-wrapper place-card__image-wrapper">
                            <a href="#">
                              <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                            </a>
                          </div>
                          <div className="place-card__info">
                            <Fragment>
                              <div className="place-card__price-wrapper">
                                <Fragment>
                                  <div className="place-card__price">
                                    <Fragment>
                                      <b className="place-card__price-value">&euro;80</b>
                                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                                    </Fragment>
                                  </div>
                                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                    <Fragment>
                                      <svg className="place-card__bookmark-icon" width="18" height="19">
                                        <use xlinkHref="#icon-bookmark-active"></use>
                                      </svg>
                                      <span className="visually-hidden">In bookmarks</span>
                                    </Fragment>
                                  </button>
                                </Fragment>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <Fragment>
                                    {/* <span style="width: 80%"></span>*/}
                                    <span className="visually-hidden">Rating</span>
                                  </Fragment>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <a href="#">Wood and stone place</a>
                              </h2>
                              <p className="place-card__type">Private room</p>
                            </Fragment>
                          </div>
                        </Fragment>
                      </article>
                    </Fragment>
                  </div>
                </Fragment>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </Fragment>
          </div>
        </div>
      </Fragment>
    </main>
  );
};

export default Main;
