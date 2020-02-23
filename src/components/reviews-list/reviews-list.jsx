import React, {Fragment} from "react";
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item.jsx";


const ReviewsList = (props) => {
  const {offer} = props;
  return (
    <Fragment>
      {offer.reviews.length > 0 && <h2 className="reviews__title">Reviews  &middot;
        <span className="reviews__amount"> {offer.reviews.length}</span></h2>}
      {offer.reviews.length < 0 || <h2 className="reviews__title">Reviews</h2>}
      <ul className="reviews__list">
        {offer.reviews.map((review, index) => {
          return <ReviewItem
            key={review.id + index}
            review={review}
          />;
        })}
      </ul>
    </Fragment>
  );
};

ReviewsList.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default ReviewsList;
