import React from "react";
import {RecordList} from "./components/RecordList";

export default class App extends React.Component {

	render() {

		return <RecordList record={185} steps={10}/>;

	}

}