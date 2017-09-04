import React from "react";
import renderer from "react-test-renderer";
import { RecordList } from "../RecordList";

describe( "RecordList", () => {

	it( "renders correctly", () => {

		const tree = renderer.create(
			<RecordList record={160} steps={10}/>
		).toJSON();

		expect( tree ).toMatchSnapshot();

	} );

} );