import React, { useState } from "react";
import useSWR from "swr";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";

import mapStyle from "./mapStyle";

const fetcher = (...args) => fetch(...args).then(res => res.json());

function Map() {
    const [selectedPlace, setSelectedPlace] = useState(null);

    const apiUrl = `http://localhost:3000/coordinates`;

    const { data, error } = useSWR(apiUrl, fetcher);

    if (error) {
        return <div>Error...</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    function clickedPlace(coordinate) {
        setSelectedPlace(coordinate);
    }

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: -12.046373, lng: -77.042755 }}
            defaultOptions={{ styles: mapStyle }}
        >
            {data.map((coordinate) => (
                <Marker key={coordinate._id}
                    position={{ lat: Number(coordinate.lat), lng: Number(coordinate.lng) }}
                    onClick={() => clickedPlace(coordinate)}
                />
            ))}

            {selectedPlace && (
                <InfoWindow
                    position={{ lat: Number(selectedPlace.lat), lng: Number(selectedPlace.lng) }}
                    onCloseClick={() => clickedPlace(null)}
                >
                    <div>
                        <h2>{selectedPlace.state + ", " + selectedPlace.country}</h2>
                        <p>Address: {selectedPlace.address}</p>
                        <p>lat: {selectedPlace.lat}</p>
                        <p>long: {selectedPlace.lng}</p>
                    </div>
                </InfoWindow>
            )}

        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;