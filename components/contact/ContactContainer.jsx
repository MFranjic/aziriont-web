import React, { Component } from 'react';
import styles from '../../styles/contact.module.css';
import ContactInput from './ContactInput';

class ContactContainer extends Component {
	state = {};
	render() {
		return (
			<form action="/api/form" method="post">
				<div className={styles.contactContainer}>
					<div className={styles.infoContainer}>
						<ContactInput
							label="First name"
							id="firstName"
							placeholder="Enter your first name..."
							required={true}
						/>
						<ContactInput
							label="Second name"
							id="secondName"
							placeholder="Enter your second name..."
							required={true}
						/>
						<ContactInput label="Title" id="title" placeholder="Enter your title..." required={false} />
						<ContactInput label="E-mail" id="email" placeholder="Enter your email..." required={true} />
						<div className={styles.inputContanier}>
							<label for="Message" className={styles.label}>
								Message
							</label>
							<textarea
								name="Message"
								id="message"
								type="text"
								required={true}
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
					<button type="submit" className={styles.sendButton}>
						Send
					</button>
				</div>
			</form>
		);
	}
}

export default ContactContainer;
