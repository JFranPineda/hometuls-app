import React, { useState } from 'react';

const AddressForm = () => {
    const [lat, setLat] = useState("-12.063190");
    const [lng, setLng] = useState("-77.147476");
    const [address, setAddress] = useState("Melo Park 123");
    const [state, setState] = useState("Lima");
    const [country, setCountry] = useState("Peru");

    const [savedId, setSavedId] = useState(null);
    const [isSaved, setIsSaved] = useState(true);

    function submitPlace() {
        const apiUrl = `http://localhost:3000/coordinates`;
        fetch(apiUrl,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ lat, lng, address, state, country })
            })
            .then(response => response.json())
            .then(data => {
                if (data._id) {
                    setSavedId(data._id);
                    setIsSaved(true);
                } else {
                    setIsSaved(false);
                }
            })
            .catch(function (error) {
                console.log(error);
                setIsSaved(false);
            });
    };

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submitPlace();
                }}
            >
                <label htmlFor="Latitude">
                    Latitud
                    <input
                        id="latitude"
                        value={lat}
                        placeholder="Latitude"
                        onChange={e => setLat(e.target.value)}
                    />
                </label>
                <label htmlFor="Longitude">
                    Longitud
                    <input
                        id="longitude"
                        value={lng}
                        placeholder="Longitude"
                        onChange={e => setLng(e.target.value)}
                    />
                </label>
                <label htmlFor="Address">
                    Address
                    <input
                        id="address"
                        value={address}
                        placeholder="Address"
                        onChange={e => setAddress(e.target.value)}
                    />
                </label>
                <label htmlFor="State">
                    State
                    <input
                        id="state"
                        value={state}
                        placeholder="State"
                        onChange={e => setState(e.target.value)}
                    />
                </label>
                <label htmlFor="Country">
                    Country
                    <input
                        id="country"
                        value={country}
                        placeholder="Country"
                        onChange={e => setCountry(e.target.value)}
                    />
                </label>
                {
                    savedId && isSaved ?
                        (
                            <label htmlFor="Post-response">
                                Saved Place Id: {savedId}
                            </label>
                        ) : !isSaved ?
                            (<label htmlFor="error">Error saving your place...</label>)
                            : null
                }

                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddressForm;