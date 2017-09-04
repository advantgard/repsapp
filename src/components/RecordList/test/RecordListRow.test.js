import React from "react";
import renderer from "react-test-renderer";
import { RecordListRow } from "../RecordListRow";

describe( "RecordListRow", () => {

	it( "renders correctly", () => {

		const tree = renderer.create(
			<RecordListRow label={10} percentage={20}/>
		).toJSON();

		expect( tree ).toMatchSnapshot();

	} );

} );