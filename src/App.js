import React from "react";
import { RecordInput, RecordList } from "./components/RecordList";
import { NumberPicker } from "./components/ValuePicker";

export default class App extends React.Component {

	constructor() {
		super();

		this.state = {
			record: 0,
			steps: 10
		};

		this.modifyRecord = this.modifyRecord.bind( this );
	}

	modifyRecord( action, value ) {

		const record = this.state.record;
		const newValue = action === "increase" ? record + value : record - value;

		this.setState( {
			record: newValue
		} );

	}

	render() {

		return (
			<div className="rxapp">
				<NumberPicker
					handler={this.modifyRecord}
					value={this.state.record}
					maxValue={999}
				/>
				<RecordList record={this.state.record} steps={this.state.steps}/>
			</div>
		);

	}

}