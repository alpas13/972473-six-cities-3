import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withHandleForm = (Component) => {
  class WithHandleForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        comment: ``,
        status: this.props.sendCommentStatus,
      };

      this.handleChangeRating = this.handleChangeRating.bind(this);
      this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
    }

    handleChangeRating(item) {
      this.setState(
          {
            rating: item,
          });
    }

    handleChangeTextarea(item) {
      this.setState(
          {
            comment: item,
          });
    }

    handleClearForm(status) {
      if (status === 200) {
        this.setState({
          rating: ``,
          comment: ``,
          status: 0,
        });
      }
    }

    handleSubmit(evt) {
      const {offerId, onSubmit} = this.props;

      evt.preventDefault();

      onSubmit(offerId, {
        rating: this.state.rating,
        comment: this.state.comment,
      })
          .then(this.handleClearForm(this.state.status));
    }

    render() {
      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          comment={this.state.comment}
          checkedId={this.state.checkedId}
          status={this.state.status}
          handleClearForm={this.handleClearForm}
          handleChangeRating={this.handleChangeRating}
          handleChangeTextarea={this.handleChangeTextarea}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }

  WithHandleForm.propTypes = {
    offerId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    sendCommentStatus: PropTypes.number.isRequired,
  };

  return WithHandleForm;
};

export default withHandleForm;
