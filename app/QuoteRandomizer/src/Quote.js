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

const duration = 500;

export default class Quote extends React.Component {
	state = {
		index: getRandomInt(quotes.length),
		animation: 'fadeInRight',
		duration
	};

	newRandomQuote = () => {
		this.setState({ animation: 'fadeOutLeft', duration });
		setTimeout(
			() =>
				this.setState({
					index: getRandomInt(quotes.length),
					animation: 'fadeInRight',
					duration
				}),
			duration
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
			<Footer key="footer" style={{ height: 200 }}>
				<FooterTab>
					<Button
						full
						primary
						onPress={this.newRandomQuote}
						style={{ height: 200 }}>
						<Text style={{ color: 'white', fontSize: 25 }}>Randomize</Text>
					</Button>
				</FooterTab>
			</Footer>
		];
	}
}
