import * as React from "react";
import {Subtract} from "utility-types";

interface Props {
    city: string;
    sortType: string;
    onSortingChange: (item: string, city: string) => void;
}

interface State {
    isOpen: boolean;
    sortType: string;
    city: string;
}

interface InjectedProps {
    onSortingPopupToggle: () => void;
    onSortChange: (item: string) => void;
}

const withHandleSorting = (Component) => {
    type P = React.ComponentProps<typeof Component>;
    type T = Subtract<P, InjectedProps>;

    class WithHandleSorting extends React.PureComponent<T, State> {
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
            onSortChange={this.handleChangeSorting}
          />
        );
      }
    }

    return WithHandleSorting;
};

export default withHandleSorting;
