import React from "react";
import PropTypes from "prop-types";
import {dateFormat} from "../../utils";

const MAX_RATING = 5;

const ReviewItem = React.memo(function ReviewItem({review}) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.userAvatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{review.userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${(review.rating / MAX_RATING) * 100}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.description}</p>
        <time className="reviews__time" dateTime={dateFormat(review.date, false)}>
          {dateFormat(review.date)}</time>
      </div>
    </li>
  );
});

ReviewItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userAvatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;
