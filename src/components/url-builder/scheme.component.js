import React from 'react'

const urlSchemes = [
	"https",
	"http",
	"all"
];

class UrlBuilderScheme extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scheme: urlSchemes[0]
		};
	}

	handleSchemeChange(e, data) {

	}

	render() {
		const {
			...props
		} = this.props;

		return (
			<div></div>
			// <div>{this.state.scheme}</div>
		);
	}
}

export default UrlBuilderScheme