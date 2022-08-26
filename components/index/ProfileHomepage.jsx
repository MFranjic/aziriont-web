import React, { Component } from 'react';
import styles from '../../styles/homepage.module.css';
import Image from 'next/image';

class ProfileHomePage extends Component {
	state = {};
	render() {
		return (
			<div className={styles.profileContainer}>
				<div className={styles.profilePhoto}>
					<Image src="/resources/profile.JPG" alt="Profile Photo" height={210} width={210} layout="fill" objectFit="cover" />
				</div>
				<div className={styles.profileData}>
					<div className={styles.profileName}>Marko Franjić</div>
					<div className={styles.profileProfession}>Software developer</div>
					<div className={styles.profileSpecialization}>
						<div className={styles.profileSpecializationItem}>Frontend web</div>
						<div className={styles.profileSpecializationItem}>Games</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileHomePage;
