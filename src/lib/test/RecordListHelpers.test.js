import { round5 } from "../RecordListHelpers";

describe( "round5", () => {

	const exampleUse = round5( 163 );
	const zeroArgument = round5( 0 );

	test( "Should be always divisible by 5", () => {

		expect( exampleUse % 5 ).toEqual( 0 );

	} );

	test( "Should return 0 if argument is 0", () => {

		expect( zeroArgument ).toEqual( 0 );

	} );

} );