import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import icon from '../../../constants/icon'

function MapBox(props: any) {
      const { lat, lng, zoom } = props;
      return (
            <div>
                  <GoogleMap
                        zoom={zoom}
                        center={{ lat: lat, lng: lng }}
                  >
                        <Marker
                              icon={{
                                    url: icon.pinMap,
                                    //scaledSize: new window.google:any.maps.Size(40, 40)
                              }}
                              position={{ lat: lat, lng: lng }}
                        />
                  </GoogleMap>
            </div>
      );
}

export default withScriptjs(withGoogleMap(MapBox));