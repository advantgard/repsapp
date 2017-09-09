import React from "react";
import renderer from "react-test-renderer";
import { NumberPicker } from "../NumberPicker";

describe( "ValuePicker", () => {

	test( "renders correctly", () => {

		const tree = renderer.create(
			<NumberPicker handler={() => {
			}} value={160} maxValue={999}/>
		).toJSON();

		expect( tree ).toMatchSnapshot();

	} );

} );