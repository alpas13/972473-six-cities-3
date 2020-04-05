import * as React from "react";
import {AuthInfo, Coords, Offer} from "../../types";
import {Subtract} from "utility-types";

interface Props {
    offers: Offer[];
    offerId?: number;
    match?: {params: {id: number}};
    offer?: Offer;
    isFavorite?: boolean;
    authInfo?: AuthInfo | null;
    toggleFavoriteItem?: (offerId: number, status: boolean) => void;
    sendReview?: (offerId: number, review: {
        rating: string;
        comment: string;
    }, clearForm: (status: boolean) => void) => void;
    updateOfferId?: (offerId: number) => void;
    city?: string;
    cities?: string[];
    onCityClick?: (city: string) => void;
    sortType?: string;
    onSortingChange?: (sortValue: string, city: string) => void;
}

interface State {
    activePin: Coords | null;
}

interface InjectedProps {
    handleMouse: (offerCoords: number[]) => void;
}

const withActivePin = (Component) => {
    type P = React.ComponentProps<typeof Component>;
    type T = Props & Subtract<P, InjectedProps>;

    class WithActivePin extends React.PureComponent<T, State> {
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
