import React from "react";
import { ValuePicker } from "./ValuePicker";
import { createNumberDigits } from "../../lib/ValuePickerHelpers";

export const NumberPicker = props => {

	const value = createNumberDigits( props.value, props.maxValue );
	const maxOperationValue = Math.pow( 10, value.length - 1 );

	const digits = value.split( "" ).map( ( value, index ) => {

		const divisor = index ? Math.pow( 10, index ) : 1;
		const operationValue = maxOperationValue / divisor;

		return <ValuePicker
			increase={props.handler.bind( null, "increase", operationValue )}
			decrease={props.handler.bind( null, "decrease", operationValue )}
			value={value}
			key={index}
		/>;

	} );

	return <div className="number-picker"> {digits} </div>;

};