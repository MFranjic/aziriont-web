import React, { Component } from 'react';
import styles from '../../styles/contact.module.css';

class ContactInput extends Component {
	state = {};
	render() {
		return (
			<div className={styles.inputContanier}>
				<label for={this.props.label} className={styles.label}>
					{this.props.label}
				</label>
				<input
					type="text"
					id={this.props.label}
					className={styles.data}
					style={{ height: this.props.height }}
					placeholder={this.props.placeholder}></input>
			</div>
		);
	}
}

export default ContactInput;
