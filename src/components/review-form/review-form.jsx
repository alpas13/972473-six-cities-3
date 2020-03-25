import React from "react";
import PropTypes from "prop-types";

const ReviewForm = React.memo(function ReviewForm(props) {
  const {rating, comment, status, handleClearForm, handleChangeRating, handleChangeTextarea, handleSubmit} = props;
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={
      (evt) => {
        handleSubmit(evt);
      }
    }
    >
      <label className="reviews__label form__label" htmlFor="review">Your
        review</label>
      {(status === 400 || status === 401) && <div className={`reviews__error`} style={{backgroundColor: `red`, height: `30px`, marginBottom: `10px`}}>
        <p style={{color: `white`, fontWeight: `bold`, textAlign: `center`, paddingTop: `5px`}}>
          Ошибка отправки коментария!
        </p>
      </div>}
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          checked={rating === `5`}
          onChange={
            (evt) => {
              const target = evt.target;
              if (target.id === `5-stars`) {
                handleChangeRating(target.value);
              }
            }
          }
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          checked={rating === `4`}
          onChange={
            (evt) => {
              const target = evt.target;
              if (target.id === `4-stars`) {
                handleChangeRating(target.value);
              }
            }
          }
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          checked={rating === `3`}
          onChange={
            (evt) => {
              const target = evt.target;
              if (target.id === `3-stars`) {
                handleChangeRating(target.value);
              }
            }
          }
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          checked={rating === `2`}
          onChange={
            (evt) => {
              const target = evt.target;
              if (target.id === `2-stars`) {
                handleChangeRating(target.value);
              }
            }
          }
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          checked={rating === `1`}
          onChange={
            (evt) => {
              const target = evt.target;
              if (target.id === `1-stars`) {
                handleChangeRating(target.value);
              }
            }
          }
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
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
  status: PropTypes.number.isRequired,
  handleChangeRating: PropTypes.func.isRequired,
  handleChangeTextarea: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClearForm: PropTypes.func.isRequired,
};

export default ReviewForm;
