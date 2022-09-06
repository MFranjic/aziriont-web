import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/project.module.css';
import { ImageViewer } from 'react-image-viewer-dv';

class ProjectGallery extends Component {
	state = {};
	render() {
		return (
			<div className={styles.galleryContainer}>
				{this.props.images.map((imagePath) => {
					return (
						<div className={styles.galleryImageContainer}>
							<ImageViewer>
								<div className={styles.galleryImage}>
									<Image
										src={imagePath}
										alt="project-image"
										width={2300}
										height={1780}
										layout="intrinsic"
										objectFit="cover"
									/>
								</div>
							</ImageViewer>
						</div>
					);
				})}
			</div>
		);
	}
}

export default ProjectGallery;
