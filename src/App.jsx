import React from "react";
import PercentageResult from "./containers/PercentageResult.jsx";
import BlockItem from "./components/BlockItem.jsx";

export default class App extends React.Component {

	render() {

		let PR = 185;

		let Result =  PercentageResult(BlockItem, PR, 0.5);

		return <Result/>;
	}

}