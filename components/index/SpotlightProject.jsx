import React, { Component } from 'react';
import styles from '../../styles/homepage.module.css';
import Image from 'next/image';

class SpotlightProject extends Component {
	state = {};
	render() {
		return (
			<div className={styles.projectContainer}>
				<Image src="/resources/photos/projects/photo-comba-1.png" alt="project-image" layout="fill" objectFit="cover" />
				<div className={styles.coverBottom}></div>
				<div className={styles.projectName}>Comba</div>
				<div className={styles.projectDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
				{/* <div className={styles.coverTop}>Comba</div> */}
				<div className={styles.projectTagMobile}>mobile</div>
				<div className={styles.projectTagTime}>2021 - 2022</div>
			</div>
		);
	}
}

export default SpotlightProject;
