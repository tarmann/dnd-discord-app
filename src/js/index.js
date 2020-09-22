import React from "react";
import ReactDOM from "react-dom";

import AppRouter from './AppRouter';

var mountNode = document.getElementById("app");

ReactDOM.render(<AppRouter />, mountNode);