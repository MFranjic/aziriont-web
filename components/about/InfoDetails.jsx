import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/about.module.css';

class InfoDetails extends Component {
	state = {};
	render() {
		return <div id="activate-description" className={this.props.display}></div>;
	}
}

export default InfoDetails;
