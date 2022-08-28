import React, { Component } from 'react';
import styles from '../../styles/contact.module.css';

class ContactInput extends Component {
	state = {};
	render() {
		return (
			<div className={styles.inputContanier}>
				<div className={styles.label}>{this.props.label}</div>
				<input
					type="text"
					className={styles.data}
					style={{ height: this.props.height }}
					placeholder={this.props.placeholder}></input>
			</div>
		);
	}
}

export default ContactInput;
