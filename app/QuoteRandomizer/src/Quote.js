import React from 'react';
import {
	Header,
	Content,
	Body,
	Title,
	Footer,
	FooterTab,
	Button,
	Text,
	View,
	Card,
	CardItem
} from 'native-base';

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
		return [
			<Header key="header">
				<Body>
					<Title>Quote Randomizer</Title>
				</Body>
			</Header>,
			<Content key="content" padder>
				<View>
					<Card>
						<CardItem>
							<Text>{quote}</Text>
						</CardItem>
					</Card>
				</View>
			</Content>,
			<Footer key="footer">
				<FooterTab>
					<Button full primary onPress={this.newRandomQuote}>
						<Text style={{ color: 'white', fontSize: 16 }}>Randomize</Text>
					</Button>
				</FooterTab>
			</Footer>
		];
	}
}
