import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const {offers} = this.props;
    if (this.mapRef.current === null || !offers.length) {
      return;
    }

    this.city = offers[0].cityCoords;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 39]
    });
    this.zoom = offers[0].cityZoom;
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

    offers.map((item) => {
      this.markers.addLayer(leaflet.marker(item.coords, {icon}));
    });

    this.markers.addTo(this.map);
  }

  componentDidUpdate({offers, activePin}) {
    if (this.props.offers !== offers || this.props.activePin !== activePin) {
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 39]
      });
      const activeIcon = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 39]
      });

      this.city = this.props.offers[0].cityCoords;
      this.zoom = this.props.offers[0].cityZoom;

      if (!this.map) {
        this.map = leaflet.map(this.mapRef.current, {
          center: this.city,
          zoom: this.zoom,
          zoomControl: false,
          marker: true
        });

        leaflet
            .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
              attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
            })
            .addTo(this.map);

        this.markers = leaflet
            .layerGroup();
      }

      this.map.setView(this.city, this.zoom);

      if (this.markers) {
        this.markers.clearLayers();
      }

      this.props.offers.map((item) => {
        if (item.coords === this.props.activePin) {
          this.markers.addLayer(leaflet.marker(item.coords, {icon: activeIcon}));
        } else {
          this.markers.addLayer(leaflet.marker(item.coords, {icon}));
        }
      });

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
  styleSettings: PropTypes.object.isRequired,
  activePin: PropTypes.array,
};
export default Map;
