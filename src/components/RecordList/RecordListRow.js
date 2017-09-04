import React from "react";

export const RecordListRow = (props) => {

	return (
		<li className="record-list__row">
			<div className="record-list__label-item"> {props.label + "%"} </div>
			<div className="record-list__percentage-item"> {props.percentage + " lbs"} </div>
		</li>
	);

};