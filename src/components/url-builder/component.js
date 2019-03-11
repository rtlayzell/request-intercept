import React from 'react';
import UrlBuilderScheme from './scheme.component';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import styled from 'styled-components';


class UrlBuilder extends React.Component {
	render() {
		const {
			url,
			...props
		} = this.props;

		console.log(url);

		return (
			<div {...props}>
				<Paper>
					<InputBase value={url} style={{ width: '100%' }} />
				</Paper>
				<UrlBuilderScheme />
			</div>
		);
	}
}

export default styled(UrlBuilder)`
`;