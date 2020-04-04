import * as React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withHandleSorting = (Component) => {
  class WithHandleSorting extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
        sortType: this.props.sortType,
        city: this.props.city,
      };

      this.handleChangeSorting = this.handleChangeSorting.bind(this);
      this.handleSortingPopupToggle = this.handleSortingPopupToggle.bind(this);
    }

    handleChangeSorting(item) {
      this.setState(
          {
            sortType: item,
          },
          this.props.onSortingChange(item, this.state.city));
    }

    handleSortingPopupToggle() {
      this.setState(
          {
            isOpen: !this.state.isOpen,
          });
    }

    render() {
      return (
        <Component
          {...this.props}
          isOpen={this.state.isOpen}
          sortType={this.state.sortType}
          onSortingPopupToggle={this.handleSortingPopupToggle}
          onSortingChange={this.handleChangeSorting}
        />
      );
    }
  }

  WithHandleSorting.propTypes = {
    city: PropTypes.string.isRequired,
    sortType: PropTypes.string.isRequired,
    onSortingChange: PropTypes.func.isRequired,
  };

  return WithHandleSorting;
};

export default withHandleSorting;
