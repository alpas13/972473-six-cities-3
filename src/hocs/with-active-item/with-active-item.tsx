import * as React from "react";
import {Subtract} from "utility-types";
import {Offer, StyleSettings} from "../../types";

interface Props {
    offers?: Offer[];
    cities?: string[] | null;
    styleSettings?: StyleSettings;
    handleSelectItem: (item: number[] | string ) => void;
}

interface State {
    activeItem: string | null;
}

interface InjectedProps {
    onChange: (item: any) => void;
    activeItem: string | null;
}

const withActiveItem = (Component) => {
    type P = React.ComponentProps<typeof Component>;
    type T = Subtract<P, InjectedProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
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

  return WithActiveItem;
};

export default withActiveItem;
