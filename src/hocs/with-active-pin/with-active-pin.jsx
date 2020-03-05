import React, {PureComponent} from "react";

const withActivePin = (Component) => {
  class WithActivePin extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePin: null,
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseEnter(item) {
      this.setState(
          {
            activePin: item,
          });
    }


    render() {
      return (
        <Component
          {...this.props}
          activePin={this.state.activePin}
          handleMouseEnter={this.handleMouseEnter}
        />
      );
    }
  }

  return WithActivePin;
};

export default withActivePin;
