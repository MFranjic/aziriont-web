import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/project.module.css';

class ProjectGallery extends Component {
	state = {};
	render() {
		return (
			<div className={styles.galleryContainer}>
				{this.props.images.map((imagePath) => {
					return (
						<div className={styles.galleryImageContainer}>
							<div className={styles.galleryImage}>
								<Image src={imagePath} alt="project-image" width={230} height={178} objectFit="cover" />
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default ProjectGallery;
