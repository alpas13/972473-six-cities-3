import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null,
      };

      this.handleChangeItem = this.handleChangeItem.bind(this);
    }

    handleChangeItem(item) {
      this.setState({
        activeItem: item,
      }, this.props.handleSelectItem(item));
    }


    render() {
      return (
        <Component
          {...this.props}
          onChange={this.handleChangeItem}
          activeItem={this.state.activeItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    handleSelectItem: PropTypes.func.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
