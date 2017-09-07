import React from "react";
import { ValuePickerBox } from "./ValuePickerBox";

export const ValuePicker = props =>

	<div className="value-picker">
		<button className="value-picker__button--increase" onClick={props.increase}/>
		<ValuePickerBox value={props.value}/>
		<button className="value-picker__button--decrease" onClick={props.decrease}/>
	</div>;