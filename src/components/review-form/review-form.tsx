import * as React, {Fragment} from "react";
import PropTypes from "prop-types";

const MAX_RATING = 5;

const ReviewForm = React.memo(function ReviewForm(props) {
  const {rating, comment, status, handleChangeRating, handleChangeTextarea, handleSubmit} = props;

  const renderRating = () => {
    const initialArray = new Array(MAX_RATING).fill(``);

    return initialArray.map((item, index) => {
      const currentStar = MAX_RATING - index;

      return <Fragment key={currentStar + `${currentStar > 1 ? `-stars` : `-star`}`}>
        <input className="form__rating-input visually-hidden" name="rating"
          value={currentStar}
          id={currentStar + `${currentStar > 1 ? `-stars` : `-star`}`}
          type="radio" checked={rating === (currentStar) + ``}
          onChange={
            (evt) => {
              const target = evt.target;
              const currentId = currentStar + `${currentStar > 1 ? `-stars` : `-star`}`;
              if (target.id === currentId) {
                handleChangeRating(target.value);
              }
            }
          }
        />
        <label htmlFor={currentStar + `${currentStar > 1 ? `-stars` : `-star`}`}
          className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </Fragment>;
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={
      (evt) => {
        handleSubmit(evt);
      }
    }
    >
      <label className="reviews__label form__label" htmlFor="review">Your
        review</label>
      {!status && <div className={`reviews__error`} style={{backgroundColor: `red`, height: `30px`, marginBottom: `10px`}}>
        <p style={{color: `white`, fontWeight: `bold`, textAlign: `center`, paddingTop: `5px`}}>
          Ошибка отправки коментария!
        </p>
      </div>}
      <div className="reviews__rating-form form__rating">
        {renderRating()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" value={comment} name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={
          (evt) => {
            const target = evt.target;
            if (target.id === `review`) {
              handleChangeTextarea(target.value);
            }
          }
        }
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to
          set <span className="reviews__star">rating</span> and
          describe your stay with at
          least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={`${rating && comment.length > 49 && comment.length < 301 ? `` : `disabled`}`}>Submit</button>
      </div>
    </form>
  );
});

ReviewForm.propTypes = {
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  handleChangeRating: PropTypes.func.isRequired,
  handleChangeTextarea: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;
