import React, { Component } from 'react';
import styles from '../../styles/general.module.css';
import Image from 'next/image';
import profile from '../../data/profileData.js';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className={styles.footer} style={{ position: this.props.position }}>
				<div className={styles.companyContainer}>
					<div className={styles.companyAddress}>
						<p className={styles.companyInfo}>Aziriont.j.d.o.o.</p>
						<p className={styles.companyInfo}>Trg Luke Ilića-Oriovčanina 8</p>
						<p className={styles.companyInfo}>44330 Novska, Croatia</p>
					</div>
					<div className={styles.companyLogo}>
						<Image src="/resources/logo.png" alt="Logo" height={57} width={61} />
					</div>
				</div>
				<div className={styles.buttonsContainer}>
					<a href={profile.linkedin} target="_blank" className={styles.circle}>
						<Image
							src="/resources/icons/icon-general-linkedin.png"
							alt="profile-photo"
							height={22}
							width={22}
							layout="fixed"
							objectFit="cover"
						/>
					</a>
					<a href={profile.github} target="_blank" className={styles.circle}>
						<Image
							src="/resources/icons/icon-general-github.png"
							alt="profile-photo"
							height={30}
							width={30}
							layout="fixed"
							objectFit="cover"
						/>
					</a>
					<a href={profile.facebook} target="_blank" className={styles.circle}>
						<Image
							src="/resources/icons/icon-general-facebook.png"
							alt="profile-photo"
							height={22}
							width={22}
							layout="fixed"
							objectFit="cover"
						/>
					</a>
					<a href={profile.instagram} target="_blank" className={styles.circle}>
						<Image
							src="/resources/icons/icon-general-instagram.png"
							alt="profile-photo"
							height={22}
							width={22}
							layout="fixed"
							objectFit="cover"
						/>
					</a>
				</div>
				<div className={styles.emailContainer}>{profile.email}</div>
			</footer>
		);
	}
}

export default Footer;
