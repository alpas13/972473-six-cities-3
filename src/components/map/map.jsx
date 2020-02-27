import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const {offers, offer} = this.props;
    if (this.mapRef.current === null) {
      return;
    }

    this.city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 39]
    });
    this.zoom = 12;
    this.map = leaflet.map(this.mapRef.current, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.city, this.zoom);

    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);

    this.markers = leaflet
        .layerGroup();

    if (offer) {
      offer.neighbourhoodOffers.map((offerItem) => {
        offers.slice().filter((item) => offerItem === item.id).map((neighbourhood) => {
          this.markers.addLayer(leaflet.marker(neighbourhood.coords, {icon}));
        });
      });
    } else {
      offers.map((item) => {
        this.markers.addLayer(leaflet.marker(item.coords, {icon}));
      });
    }

    this.markers.addTo(this.map);
  }

  componentDidUpdate({offers}) {
    if (this.props.offers !== offers) {
      this.markers.clearLayers();

      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 39]
      });

      if (this.props.offer) {
        this.props.offer.neighbourhoodOffers.map((offerItem) => {
          this.props.offers.slice().filter((item) => offerItem === item.id).map((neighbourhood) => {
            this.markers.addLayer(leaflet.marker(neighbourhood.coords, {icon}));
          });
        });
      } else {
        this.props.offers.map((item) => {
          this.markers.addLayer(leaflet.marker(item.coords, {icon}));
        });
      }

      this.markers.addTo(this.map);
    }
  }

  render() {
    const {styleSettings} = this.props;
    return (
      <div style={styleSettings} ref={this.mapRef}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  offer: PropTypes.object,
  styleSettings: PropTypes.object.isRequired,
};
export default Map;
