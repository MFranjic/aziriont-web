import React, { Component } from 'react';
import stylesGeneral from '../../styles/general.module.css';
import styles from '../../styles/homepage.module.css';
import Image from 'next/image';
import Tag from '../../components/0_general/Tag';

class SpotlightProject extends Component {
	state = {};
	render() {
		return (
			<div className={styles.projectContainer}>
				<Image
					src="/resources/photos/projects/photo-comba-1.png"
					alt="project-image"
					layout="fill"
					objectFit="cover"
				/>
				<div className={styles.coverBottom}></div>
				<div className={styles.projectName}>Comba</div>
				<div className={styles.projectDescription}>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
				</div>
				{/* <div className={styles.coverTop}>Comba</div> */}
				<div className={styles.spotlightTag} style={{ right: 16 }}>
					<Tag color="blue" value="mobile" />
				</div>
				<div className={styles.spotlightTag} style={{ left: 16 }}>
					<Tag color="gray" value="2021 - 2022" />
				</div>
			</div>
		);
	}
}

export default SpotlightProject;
