import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";

render(<App/>, document.getElementById("app"));

if (module.hot) {
	module.hot.accept(App, () => { render(<App/>, document.getElementById("app")) })
}