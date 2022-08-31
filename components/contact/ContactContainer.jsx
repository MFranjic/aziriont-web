import React, { Component } from 'react';
import styles from '../../styles/contact.module.css';
import ContactInput from './ContactInput';

class ContactContainer extends Component {
	state = {};
	render() {
		return (
			<div className={styles.contactContainer}>
				<div className={styles.infoContainer}>
					<ContactInput label="First name" placeholder="Enter your first name..." height="36px" />
					<ContactInput label="Second name" placeholder="Enter your second name..." height="36px" />
					<ContactInput label="Title" placeholder="Enter your title..." height="36px" />
					<ContactInput label="E-mail" placeholder="Enter your email..." height="36px" />
					<div className={styles.inputContanier}>
						<label for="Message" className={styles.label}>
							Message
						</label>
						<textarea
							name="Message"
							id="Message"
							className={styles.data}
							style={{
								height: 168,
								minHeight: 36,
								maxWidth: 303,
								minWidth: 303,
								lineHeight: 1.5,
								paddingTop: 5,
							}}
							placeholder="Write your message..."
							cols="40"
							rows="5"></textarea>
					</div>
				</div>
				<button className={styles.sendButton}>Send</button>
			</div>
		);
	}
}

export default ContactContainer;
