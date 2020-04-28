import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import axios from "axios";

axios.defaults.headers.common["user-key"] = "53a5ae29b1fdf5a3f7886a5ea6dceffd";
axios.defaults.headers.common["Content-Type"] = "text/json";

const app = <App />;

ReactDOM.render(app, document.querySelector("#root"));
