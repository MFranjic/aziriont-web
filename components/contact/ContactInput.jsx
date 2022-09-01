import React, { Component } from 'react';
import styles from '../../styles/contact.module.css';

class ContactInput extends Component {
	state = {};
	render() {
		return (
			<div className={styles.inputContanier}>
				<label for={this.props.id} className={styles.label}>
					{this.props.label}
				</label>
				<input
					type="text"
					required={this.props.required}
					name={this.props.id}
					id={this.props.id}
					className={styles.data}
					style={{ height: 36 }}
					placeholder={this.props.placeholder}></input>
			</div>
		);
	}
}

export default ContactInput;
