import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import axios from "axios";

axios.defaults.headers.common["user-key"] = "60ab2e4ea7d0d93bb6758f839398eeb4";
axios.defaults.headers.common["Content-Type"] = "text/json";

const app = <App />;

ReactDOM.render(app, document.querySelector("#root"));
