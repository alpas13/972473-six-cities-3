import React, {Fragment} from "react";
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item.jsx";
import {connect} from "react-redux";
import {getReviews} from "../../reducer/main/selectors.js";


const ReviewsList = React.memo(function ReviewList(props) {
  const {reviews} = props;
  return (
    <Fragment>
      {reviews.length > 0 && <h2 className="reviews__title">Reviews  &middot;
        <span className="reviews__amount"> {reviews.length}</span></h2>}
      {reviews.length < 1 && <h2 className="reviews__title">Reviews  &middot;
        <span className="reviews__amount"> {0}</span></h2>}
      {reviews.length > 0 &&
      <ul className="reviews__list">
        {reviews.slice(0, 10).sort((a, b) => {
          return Date.parse(b.date) - Date.parse(a.date);
        }).map((review) => {
          return <ReviewItem
            key={review.id}
            review={review}
          />;
        })}
      </ul>}
    </Fragment>);
});

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    userAvatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    proUser: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
