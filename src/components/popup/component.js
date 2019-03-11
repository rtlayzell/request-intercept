import React from 'react';
import Url from 'url-parse';
import UrlBuilder from '../url-builder/component';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import styled from 'styled-components';

class ExtensionPopup extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			url: new Url(),
			actions: []
		};

		this.handleUrlChange = this.handleUrlChange.bind(this);
	}

	componentDidMount() {
		chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
			this.setState({ url: new Url(tabs[0].url) });
		});
	}

	handleUrlChange() {
		console.log('URL updated.');
	}

	render() {
		const {
			hostname,
			...state
		} = this.state.url;

		const {
			...props
		} = this.props;

		return (
			<div {...props}>
				<UrlBuilder
					url={this.state.url.toString()}
					onChange={this.handleUrlChange} />
				<Divider style={{ marginTop: '1em', marginBottom: '1em' }} />
				<Button variant='contained' color='primary'>Add Rule</Button>
			</div>
		);
	}
}

export default styled(ExtensionPopup)`
	min-width: 420px;
`;



