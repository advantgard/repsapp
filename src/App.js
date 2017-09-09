import React from "react";
import { RecordList } from "./components/RecordList";
import { NumberPicker } from "./components/ValuePicker";

require( "./scss/index.scss" );

export default class App extends React.Component {

	constructor() {
		super();

		this.state = {
			record: 0,
			steps: 10,
			maxValue: 999
		};

		this.modifyRecord = this.modifyRecord.bind( this );
	}

	modifyRecord( action, value ) {

		if ( this.state.record <= this.state.maxValue ) {

			const record = this.state.record;
			const newValue = action === "increase" ? record + value : record - value;
			const finalValue = newValue < 0 ? 0 : newValue;

			this.setState( {
				record: finalValue
			} );

		}

	}

	render() {

		return (
			<div className="wrapper">
				<NumberPicker
					handler={this.modifyRecord}
					value={this.state.record}
					maxValue={this.state.maxValue}
				/>
				<RecordList record={this.state.record} steps={this.state.steps}/>
			</div>
		);

	}

}