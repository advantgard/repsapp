import React from "react";
import { round5 } from "../../lib/RecordListHelpers";
import { RecordListRow } from "./RecordListRow";

export const RecordList = props => {

	const unit = props.record / props.steps;
	const percentage = 100 / props.steps;

	let listElements = [];

	for ( let i = 1; i <= props.steps; i++ ) {

		listElements.push(
			<RecordListRow
				key={i}
				label={percentage * i}
				percentage={round5( unit * i )}
			/>
		);

	}

	return (
		<ul className="record-list">
			{listElements}
		</ul>
	);

};