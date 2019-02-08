import React, { Component } from 'react';
import './AutoCompleteText.css';

export default class AutoCompleteText extends Component {
	constructor(props) {
		super(props);
		this.state = {
			suggestions: [],
			text: '',
		};
	}

	onTextChanged = e => {
		const { items } = this.props;
		//We destructure this.props here and not this.state.
		const value = e.target.value.replace(/[.*+?^${}()|[\]\\]/g, '');
		let suggestions = [];
		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, 'i');
			suggestions = items.sort().filter(v => regex.test(v));
		}
		this.setState(() => ({ suggestions, text: value }));
	};

	suggestionSelected(value) {
		this.setState(() => ({
			text: value,
			suggestions: [],
		}));
	}

	renderSuggestions() {
		const { suggestions } = this.state;
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<ul>
				{suggestions.map(item => (
					<li onClick={() => this.suggestionSelected(item)}>{item}</li>
				))}
			</ul>
		);
	}
	/*
1) this.onTextChanged is called without () because we are passing the value of input to the function - 
which is received as e.
2) this.renderSuggestions() is called with () because we want to execute this function
*/
	render() {
		const { text } = this.state;
		return (
			<div>
				<form className="form-inline AutoCompleteText my-2 my-lg-0">
					<input
						value={text}
						onChange={this.onTextChanged}
						className="form-control mr-sm-2 text-monospace"
						type="search"
						placeholder="SEARCH"
						aria-label="Search"
					/>
					{this.renderSuggestions()}
				</form>
			</div>
		);
	}
}
/*
Add value prop in input to make it controlled, i.e. React controls it instead of a browser
*/

/*
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
					</form>
					*/
