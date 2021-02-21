import React from "react";
import WrappedMap from './WrappedMap';

const loadingElement = <div style={{ height: "100%" }} />
const keyAPIGoogleMaps = process.env.REACT_APP_GOOGLE_KEY;
const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${keyAPIGoogleMaps}`;

function MapLoader() {
    return (
        <div style={{ padding: '1vw', height: '100vh', width: '96vw' }}>
            <WrappedMap
                googleMapURL={googleMapURL}
                loadingElement={loadingElement}
                containerElement={loadingElement}
                mapElement={loadingElement}
            />
        </div>
    );
}

export default MapLoader;