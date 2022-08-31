import React, { Component } from 'react';
import styles from '../../styles/homepage.module.css';
import Image from 'next/image';
import profile from '../../data/profileData.js';

class ProfileHomePage extends Component {
	state = {};
	render() {
		return (
			<div className={styles.profileContainer}>
				<div className={styles.profilePhoto}>
					<Image
						src={profile.profilePhoto}
						alt="Profile Photo"
						height={210}
						width={210}
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className={styles.profileData}>
					<div className={styles.profileName}>{profile.name}</div>
					<div className={styles.profileProfession}>{profile.profession}</div>
					<div className={styles.profileSpecialization}>
						<div className={styles.profileSpecializationItem}>{profile.specialization[0]}</div>
						<div className={styles.profileSpecializationItem}>{profile.specialization[1]}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileHomePage;
