import React from "react";
import ResultMap from "../../SearchResult/components/ResultMap";

const key = "AIzaSyCf1Cp3oMKfEGuRu71h3YJnaesYjxsb4Rw";
const lat = 10.7994639;
const long = 106.6855589;
export default function Map(props: any) {
  // const { chooseItem, width } = props;
  return (
    <div className="appointInfor-map">
      <div className="result-map">
        <ResultMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}`}
          loadingElement={<div style={{ height: `100%` }} />}
          zoom={16}
          lat={lat}
          lng={long}
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
    </div>
  );
}
