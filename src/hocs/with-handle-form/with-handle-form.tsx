import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withHandleForm = (Component) => {
  class WithHandleForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        comment: ``,
        status: true,
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

    handleClearForm(status = true) {
      if (status) {
        this.setState({
          rating: ``,
          comment: ``,
        });
      } else if (!status) {
        this.setState({
          status,
        });
      }
    }

    handleSubmit(evt) {
      const {offerId, onSubmit} = this.props;

      evt.preventDefault();

      onSubmit(offerId, {
        rating: this.state.rating,
        comment: this.state.comment,
      }, this.handleClearForm);
    }

    render() {
      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          comment={this.state.comment}
          status={this.state.status}
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
  };

  return WithHandleForm;
};

export default withHandleForm;
