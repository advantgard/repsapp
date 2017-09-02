import React from "react";
import {RecordList} from "./components/RecordList";

export default class App extends React.Component {

	render() {

		const rows = [
			{"id": 1, "percentage": 0.1},
			{"id": 2, "percentage": 0.2},
			{"id": 3, "percentage": 0.3}
		];

		return <RecordList items={rows}/>

	}

}