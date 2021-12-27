import React from 'react';
import MapBox from './MapBox'

const key = 'AIzaSyCf1Cp3oMKfEGuRu71h3YJnaesYjxsb4Rw';
const lat = 10.7994639;
const long = 106.6855589;
function MapWrapper(props:any) {
      return (
            <div className="mb-result-map">
                  <MapBox
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
      );
}

export default MapWrapper;