import React, { Component } from 'react';
import stylesGeneral from '../../styles/general.module.css';

class Tag extends Component {
	state = {};

	fetchStyling = () => {
		switch (this.props.color) {
			case 'gray':
				return stylesGeneral.tagGray;
			case 'blue':
				return stylesGeneral.tagBlue;
			case 'green':
				return stylesGeneral.tagGreen;
			case 'orange':
				return stylesGeneral.tagOrange;
			case 'red':
				return stylesGeneral.tagRed;
		}
	};

	render() {
		return (
			<div className={stylesGeneral.projectTag}>
				<div className={this.fetchStyling()}>{this.props.value}</div>
			</div>
		);
	}
}

export default Tag;
