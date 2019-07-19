import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import App from "./Components/App"

//STARTING POINT

var root = $("div#root")[0]

ReactDOM.render(
    <App />,
    root
)
