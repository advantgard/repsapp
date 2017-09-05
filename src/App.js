import React from "react";
import { RecordInput, RecordList } from "./components/RecordList";

export default class App extends React.Component {

	constructor() {
		super();

		this.state = {
			record: 160,
			steps: 10
		};

		this.handleRecordChange = this.handleRecordChange.bind( this );
	}

	handleRecordChange( evt ) {

		this.setState( {
			record: evt.target.value
		} );

	}

	render() {

		return (
			<div className="rxapp">
				<RecordInput onChange={this.handleRecordChange} value={this.state.record}/>
				<RecordList record={this.state.record} steps={this.state.steps}/>
			</div>
		);

	}

}