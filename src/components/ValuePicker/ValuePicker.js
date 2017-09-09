import React from "react";

export const ValuePicker = props =>

	<div className="value-picker">
		<button className="value-picker__button--increase" onClick={props.increase}/>
		<div className="value-picker__box"> {props.value} </div>
		<button className="value-picker__button--decrease" onClick={props.decrease}/>
	</div>;