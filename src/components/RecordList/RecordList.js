import React from "react";
import {RecordListRow} from "./RecordListRow";

export const RecordList = (props) => {

	return (
		<ul className="record-list">
			{props.items.map(item => <RecordListRow key={item.id} {...item} />)}
		</ul>
	);

};