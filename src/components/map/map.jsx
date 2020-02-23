import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  componentDidMount() {
    if (this.map.current === null) {
      return;
    }

    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 39]
    });
    const zoom = 12;
    const map = leaflet.map(this.map.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

    const {offers} = this.props;
    const markersData = offers.map((offer) => {
      return leaflet.marker(offer.coords, {icon});
    });


    const markers = leaflet
        .layerGroup(markersData);

    markers.addTo(map);
  }

  render() {
    return (
      <div style={{height: `800px`, top: `170px`}} ref={this.map}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Map;
