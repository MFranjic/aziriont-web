import React, { Component } from 'react';
import styles from '../../styles/about.module.css';

class InfoSection extends Component {
	state = {};
	render() {
		return <div className={styles.title}>{this.props.title}</div>;
	}
}

export default InfoSection;
