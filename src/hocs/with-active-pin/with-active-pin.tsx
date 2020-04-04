import React, {PureComponent} from "react";

const withActivePin = (Component) => {
  class WithActivePin extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePin: null,
      };

      this.handleMouse = this.handleMouse.bind(this);
    }

    handleMouse(item) {
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
          handleMouse={this.handleMouse}
        />
      );
    }
  }

  return WithActivePin;
};

export default withActivePin;
