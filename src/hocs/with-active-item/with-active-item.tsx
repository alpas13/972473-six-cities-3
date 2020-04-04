import * as React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      const {cities} = this.props;

      this.state = {
        activeItem: cities ? cities[0] : null,
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
    cities: PropTypes.array,
  };

  return WithActiveItem;
};

export default withActiveItem;
