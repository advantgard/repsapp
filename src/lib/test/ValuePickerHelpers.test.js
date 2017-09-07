import { createNumberDigits } from "../ValuePickerHelpers";

describe( "createNumberDigits", () => {

	const zeroValue = createNumberDigits( 0, 0 );
	const smallValue = createNumberDigits( 1, 999 );
	const bigValue = createNumberDigits( 999, 100 );
	const zeroValueExpectedResult = "0";
	const smallValueExpectedResult = "001";
	const bigValueExpectedResult = "100";

	test( "Should return a 0 string if both arguments are 0", () => {
		expect( zeroValue ).toEqual( zeroValueExpectedResult );
	} );

	test( "Should always render based on maxValue digits length", () => {
		expect( smallValue.length ).toEqual( smallValueExpectedResult.length );
	} );

	test( "Should render maxValue if value is greater than maxValue", () => {
		expect( bigValue ).toEqual( bigValueExpectedResult );
	} );

} );