import React from "react";

export default function PercentageResult(WrappedComponent, number, percentage) {

	return class PercentageResult extends React.Component {

		constructor(props) {
			super(props);
		}

		render() {

			return (
				<WrappedComponent {...this.props}>
					{ Math.round(number * percentage) }
				</WrappedComponent>
			);

		}

	}

}