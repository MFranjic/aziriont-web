import React, { Component } from 'react';
import styles from '../../styles/contact.module.css';

class ContactInput extends Component {
	state = {};
	render() {
		const { id, label, required, placeholder } = this.props;

		return (
			<div className={styles.inputContanier}>
				<label for={id} className={styles.label}>
					{label}
				</label>
				<input
					type="text"
					required={required}
					name={id}
					id={id}
					className={styles.data}
					style={{ height: 36 }}
					placeholder={placeholder}></input>
			</div>
		);
	}
}

export default ContactInput;
