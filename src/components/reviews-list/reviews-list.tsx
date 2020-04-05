import * as React from "react";
import ReviewItem from "../review-item/review-item";
import {connect} from "react-redux";
import {getReviews} from "../../reducer/main/selectors";
import {Review} from "../../types";

interface Props {
    reviews: Review[];
}

const ReviewsList: React.FC<Props> = (props: Props) => {
  const {reviews} = props;
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews  &middot;
        <span className="reviews__amount"> {reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.slice(0, 10).sort((a, b) => {
          return Date.parse(b.date) - Date.parse(a.date);
        }).map((review) => {
          return <ReviewItem
            key={review.id}
            review={review}
          />;
        })}
      </ul>
    </React.Fragment>);
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

export {ReviewsList};
export default connect(mapStateToProps)(React.memo(ReviewsList));
