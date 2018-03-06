import React from 'react';

export default class Joke extends React.Component {
	render() {
		return(
			<div className='container'>
				<p>{ this.props.joke }</p>
			</div>
		);
	}
}