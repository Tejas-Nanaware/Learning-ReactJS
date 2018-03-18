import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
	render () {
		return(
			<Auxiliary>
				<Burger />
				<div>Controls</div>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;