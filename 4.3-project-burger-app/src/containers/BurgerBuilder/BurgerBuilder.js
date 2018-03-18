import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxiliary from '../../hoc/Auxiliary';

class BurgerBuilder extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0
			}
		};
	}
	render () {
		return(
			<Auxiliary>
				<Burger ingredients={this.state.ingredients} />
				<div>Controls</div>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;