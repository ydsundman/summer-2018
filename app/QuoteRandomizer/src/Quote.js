import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';

import quotes from '../data/quotes.json';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export default class Quote extends React.Component {
	state = {
		index: getRandomInt(quotes.length)
	};

	newRandomQuote = () => {
		this.setState({
			index: getRandomInt(quotes.length)
		});
	};

	render() {
		const quote = quotes[this.state.index];
		return (
			<View style={styles.container}>
				<Button block onPress={this.newRandomQuote}>
					<Text>Randomize</Text>
				</Button>
				<Text>{quote}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
