import React, { Component } from 'react';
import stylesGeneral from '../../styles/general.module.css';

class Tag extends Component {
	state = {};

	fetchStyling = () => {
		switch (this.props.type) {
			case 'time':
				return stylesGeneral.tagTime;
			case 'mobile':
				return stylesGeneral.tagMobile;
			case 'desktop':
				return stylesGeneral.tagDesktop;
			case 'VR':
				return stylesGeneral.tagVR;
			case 'AI':
				return stylesGeneral.tagAI;
		}
	};

	fetchValue = () => {
		switch (this.props.type) {
			case 'time':
				return this.props.value;
			default:
				return this.props.type;
		}
	};

	render() {
		return (
			<div className={stylesGeneral.projectTag}>
				<div className={this.fetchStyling()}>{this.fetchValue()}</div>
			</div>
		);
	}
}

export default Tag;
