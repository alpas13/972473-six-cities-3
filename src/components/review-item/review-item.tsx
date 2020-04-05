import * as React from "react";
import {dateFormat} from "../../utils";
import {Review} from "../../types";

const MAX_RATING = 5;

interface Props {
    review: Review;
}

const ReviewItem: React.FC<Props> = (props: Props) => {
    const {review} = props;
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
};

export default React.memo(ReviewItem);
