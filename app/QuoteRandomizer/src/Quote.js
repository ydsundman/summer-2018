import React from 'react';
import { Button, Text, View, Card, CardItem } from 'native-base';

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
			<View>
				<Button block onPress={this.newRandomQuote}>
					<Text>Randomize</Text>
				</Button>
				<Card>
					<CardItem>
						<Text>{quote}</Text>
					</CardItem>
				</Card>
			</View>
		);
	}
}
