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
	Card,
	CardItem
} from 'native-base';

import * as Animatable from 'react-native-animatable';
const MyCard = Animatable.createAnimatableComponent(Card);

import quotes from '../data/quotes.json';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export default class Quote extends React.Component {
	state = {
		index: getRandomInt(quotes.length),
		animation: 'fadeInRight',
		duration: 1000
	};

	newRandomQuote = () => {
		this.setState({ animation: 'fadeOutLeft', duration: 500 });
		setTimeout(
			() =>
				this.setState({
					index: getRandomInt(quotes.length),
					animation: 'fadeInRight',
					duration: 1000
				}),
			1000
		);
	};

	render() {
		const quote = quotes[this.state.index];
		return [
			<Header key="header">
				<Body>
					<Title>Quote Randomizer</Title>
				</Body>
			</Header>,
			<Content
				key="content"
				padder
				contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
				<MyCard animation={this.state.animation} duration={this.state.duration}>
					<CardItem>
						<Text
							style={{
								fontSize: 30,
								fontWeight: '200',
								textAlign: 'center',
								fontStyle: 'italic'
							}}>
							{quote}
						</Text>
					</CardItem>
				</MyCard>
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
