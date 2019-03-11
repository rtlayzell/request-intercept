import React from 'react';

import styled from 'styled-components';

class ExtensionOptions extends React.Component {
	render() {
		const {
			...props
		} = this.props;

		return (
			<div {...props}>Options Page</div>
		);
	}
}

export default styled(ExtensionOptions)`
`;