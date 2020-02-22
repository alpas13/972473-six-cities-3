import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardMouseOver = this._handleCardMouseOver.bind(this);

    this.state = {
      card: {},
    };
  }

  _handleCardMouseOver(offer) {
    this.setState({
      card: offer,
    });
  }

  render() {
    const {offers, offersCount, city, onTitleOfferClick} = this.props;

    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount} places to stay in {city}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
                Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to
              high
            </li>
            <li className="places__option" tabIndex="0">Price: high to
              low
            </li>
            <li className="places__option" tabIndex="0">Top rated first
            </li>
          </ul>
          <select className="places__sorting-type" id="places-sorting">
            <option className="places__option" value="popular" defaultValue>Popular</option>
            <option className="places__option" value="to-high">Price: low to high</option>
            <option className="places__option" value="to-low">Price: high to low</option>
            <option className="places__option" value="top-rated">Top rated first</option>
          </select>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer, index) => {
            return <OfferCard key={offer.id + index}
              onTitleOfferClick={onTitleOfferClick}
              onCardMouseOver={this._handleCardMouseOver}
              offer={offer}
            />;
          })}
        </div>
      </section>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  offersCount: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  onTitleOfferClick: PropTypes.func.isRequired,
};

export default OffersList;
