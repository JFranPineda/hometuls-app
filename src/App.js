import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import MapLoader from './MapLoader';
import Home from './Home';

import useSWR, { SWRConfig } from 'swr';

export default function App() {
    return (
        <>
            <div>
                <Router>
                    <Home path="/" />
                    <MapLoader path="/map-loader" />
                </Router>
            </div>
        </>
    )
};

render(React.createElement(App), document.getElementById("root"));
