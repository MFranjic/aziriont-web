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
					<ContactInput label="Message" placeholder="Write your message..." height="168px" />
				</div>
				<button className={styles.sendButton}>Send</button>
			</div>
		);
	}
}

export default ContactContainer;
