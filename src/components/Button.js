import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends Component {
	// static contextType = LanguageContext;
	renderSubmit(value) {
		return value === 'english' ? 'Submit' : 'Voorleggen'
	}

	renderButton(color) {
		return (
		<button className={`ui button ${color}`}>
			<LanguageContext.Consumer>
				{(value) => this.renderSubmit(value) }
			</LanguageContext.Consumer>
		</button>
		);
	}

	render() {
		// console.log( this.context );
		// const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

		return (
			<ColorContext.Consumer>
				{(color) => this.renderButton(color)}				
			</ColorContext.Consumer>
		);
	}
}

export default Button;