import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import {
	Button,
	Text,
	Header,
	Content,
	Body,
	Title,
	Footer,
	FooterTab,
	Card,
	CardItem
} from 'native-base';
import * as Animatable from 'react-native-animatable';
const AnimatableCard = Animatable.createAnimatableComponent(Card);

import quotes from '../data/quotes.json';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const cardFont = Platform.select({
	ios: {
		fontSize: 30,
		fontWeight: '200',
		fontStyle: 'italic',
		fontFamily: 'Copperplate'
	},
	android: {
		fontSize: 30,
		fontWeight: '200',
		fontStyle: 'italic'
	}
});
export default class Quote extends React.Component {
	state = {
		index: getRandomInt(quotes.length),
		animation: 'fadeInRight'
	};

	newRandomQuote = () => {
		this.setState({
			animation: 'fadeOutLeft'
		});
		setTimeout(
			() =>
				this.setState({
					animation: 'fadeInRight',
					index: getRandomInt(quotes.length)
				}),
			500
		);
	};

	render() {
		const quote = quotes[this.state.index];
		return [
			<Header key="header">
				<Body>
					<Title> Quote Randomizer </Title>
				</Body>
			</Header>,
			<Content
				key="content"
				padder
				contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
				<AnimatableCard animation={this.state.animation} duration={500}>
					<CardItem>
						<Text
							style={{
								textAlign: 'center',
								...cardFont
							}}>
							{quote}
						</Text>
					</CardItem>
				</AnimatableCard>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
