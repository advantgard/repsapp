import React from "react";

export const RecordListRow = (props) => {

	return (
		<li className="record-list__row">
			<div>{props.percentage}</div>
		</li>
	);

};