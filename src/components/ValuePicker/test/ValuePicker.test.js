import React from "react";
import renderer from "react-test-renderer";
import { ValuePicker } from "../ValuePicker";

describe( "ValuePicker", () => {

	test( "renders correctly", () => {

		const tree = renderer.create(
			<ValuePicker value="0" increase={() => {
			}} decrease={() => {
			}}/>
		).toJSON();

		expect( tree ).toMatchSnapshot();

	} );

} );