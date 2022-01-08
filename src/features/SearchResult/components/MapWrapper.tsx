import React from "react";
import ResultMap from "./ResultMap";

const key = "AIzaSyAXpN81K4I86iD3QJjkEZTdoQ6-XuRcADE";
const lat = 10.7994639;
const long = 106.6855589;
function MapWrapper(props: any) {
  const { chooseItem, width } = props;
  return (
    <div className="result-map" style={{ width: width }}>
      <ResultMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        zoom={16}
        lat={chooseItem ? chooseItem?.latitude : lat}
        lng={chooseItem ? chooseItem?.longitude : long}
        containerElement={
          <div
            style={{
              height: `100%`,
              margin: `auto`,
              width: `100%`,
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default MapWrapper;
