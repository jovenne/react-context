import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends Component {
	static contextType = LanguageContext;

	render() {
		const text = this.context === 'english' ? 'Name' : 'Naam';

		return (
			<div className="ui field" style={{marginTop: 10}}>
				<label>{text}:</label>
				<input />
			</div>

		); 
	}
}

export default Field;