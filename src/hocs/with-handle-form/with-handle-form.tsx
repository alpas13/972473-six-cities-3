import * as React from "react";
import {Subtract} from "utility-types";

interface Props {
    offerId: number;
    onSubmit: (offerId: number, review: {
        rating: string,
        comment: string,
    }, clearForm: (status: boolean) => void) => void;
}

interface State {
    rating: string;
    comment: string;
    status: boolean;
}

interface InjectedProps {
    handleChangeRating: (rating: string) => void;
    handleChangeTextarea: (comment: string) => void;
    handleSubmit: (evt: React.SyntheticEvent) => void;
}

const withHandleForm = (Component) => {
    type P = React.ComponentProps<typeof Component>;
    type T = Props & Subtract<P, InjectedProps>;

  class WithHandleForm extends React.PureComponent<T, State> {
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

  return WithHandleForm;
};

export default withHandleForm;
