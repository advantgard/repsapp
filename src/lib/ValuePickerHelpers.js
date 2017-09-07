export const createNumberDigits = ( value, maxValue ) => {

	const maxValueString = maxValue.toString();
	const valueString = value > maxValue ? maxValueString : value.toString();
	const extraDigits = maxValueString.length - valueString.length;
	return extraDigits ? ( "0".repeat( extraDigits ) + valueString ) : valueString;

};