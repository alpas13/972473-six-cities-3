import React, {Fragment} from "react";
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item.jsx";


const ReviewsList = React.memo(function ReviewList(props) {
  const {reviews} = props.offer;
  return (
    <Fragment>
      {reviews.length > 0 && <h2 className="reviews__title">Reviews  &middot;
        <span className="reviews__amount"> {reviews.length}</span></h2>}
      {reviews.length < 1 || <h2 className="reviews__title">Reviews</h2>}
      {reviews.length &&
      <ul className="reviews__list">
        {reviews.map((review) => {
          return <ReviewItem
            key={review.id}
            review={review}
          />;
        })}
      </ul>}
    </Fragment>);
});

ReviewsList.propTypes = {
  offer: PropTypes.shape({
    reviews: PropTypes.array,
  }).isRequired,
};

export default ReviewsList;
