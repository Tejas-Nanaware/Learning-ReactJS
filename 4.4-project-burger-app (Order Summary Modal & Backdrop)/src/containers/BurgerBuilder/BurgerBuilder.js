import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxiliary from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.4,
	meat: 1.3,
	cheese: 0.7
};

class BurgerBuilder extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0
			},
			totalPrice: 4,
			purchasable: false,
			purchasing: false
		};
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients).map(igKey => {
			return ingredients[igKey];
		}).reduce((sum, el) => {
			return sum+el;
		},0);
		this.setState({purchasable: sum>0});
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if(oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ingredients: updatedIngredients, totalPrice: newPrice});		
		this.updatePurchaseState(updatedIngredients);
	}

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	purchaseCanceledHandler = () => {
		this.setState({purchasing: false});
	}

	purchaseContinueHandler = () => {
		alert("Successfully ordered");
		this.setState({
			ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0
			},
			totalPrice: 4,
			purchasable: false,
			purchasing: false
		});
	}

	render () {

		const disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <=0;
		}

		return(
			<Auxiliary>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCanceledHandler}>
					<OrderSummary ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						purchaseCanceled={this.purchaseCanceledHandler}
						purchaseContinued={this.purchaseContinueHandler} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls 
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHandler}/>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;