import React from 'react';
import * as Expo from 'expo';
import Quote from './src/Quote.js';

export default class App extends React.Component {
	state = {
		isReady: false
	};

	componentWillMount() {
		this.loadFonts();
	}

	async loadFonts() {
		await Expo.Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		});
		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return <Expo.AppLoading />;
		}

		return <Quote />;
	}
}
