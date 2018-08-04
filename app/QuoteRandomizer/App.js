import React from 'react';
import { Font, AppLoading } from 'expo';
import { Container } from 'native-base';

import Quote from './src/Quote.js';

export default class App extends React.Component {
	state = {
		isReady: false
	};

	componentWillMount() {
		this.loadFonts();
	}

	async loadFonts() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		});
		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return <AppLoading />;
		}

		return (
			<Container>
				<Quote />
			</Container>
		);
	}
}
