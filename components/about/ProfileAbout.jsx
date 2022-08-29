import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/about.module.css';

class ProfileAbout extends Component {
	state = {};
	render() {
		return (
			<div className={styles.profileContainer}>
				<div className={styles.photo}>
					<Image src="/resources/profile.JPG" alt="profile-photo" layout="fill" objectFit="cover" />
				</div>
				<div className={styles.info}>
					<div className={styles.topInfo}>
						<div className={styles.name}>Marko Franjić</div>
						<div className={styles.birthday}>
							23<sup>rd</sup> Jan 1995
						</div>
						<div className={styles.birthday}>Zagreb, Croatia</div>
					</div>
					<div className={styles.bottomInfo}>
						<div className={styles.profession}>Software developer</div>
						<div className={styles.specialization}>
							<div className={styles.specializationItem}>Frontend web</div>
							<div className={styles.specializationItem}>Unity</div>
						</div>
					</div>
				</div>
				<div className={styles.links}>
					<div className={styles.circles} style={{ width: 135 }}>
						<button className={styles.circle}>CV</button>
						<a href={this.props.github} target="_blank" className={styles.circle}>
							<Image
								src="/resources/icons/icon-general-github.png"
								alt="profile-photo"
								height={42}
								width={42}
								layout="fixed"
								objectFit="cover"
							/>
						</a>
					</div>
					<div className={styles.email}>mfranjic995@gmail.com</div>
					<div className={styles.circles} style={{ width: 210 }}>
						<a href={this.props.linkedin} target="_blank" className={styles.circle}>
							<Image
								src="/resources/icons/icon-general-linkedin.png"
								alt="profile-photo"
								height={34}
								width={34}
								layout="fixed"
								objectFit="cover"
							/>
						</a>
						<a href={this.props.facebook} target="_blank" className={styles.circle}>
							<Image
								src="/resources/icons/icon-general-facebook.png"
								alt="profile-photo"
								height={34}
								width={34}
								layout="fixed"
								objectFit="cover"
							/>
						</a>
						<a href={this.props.instagram} target="_blank" className={styles.circle}>
							<Image
								src="/resources/icons/icon-general-instagram.png"
								alt="profile-photo"
								height={34}
								width={34}
								layout="fixed"
								objectFit="cover"
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileAbout;
