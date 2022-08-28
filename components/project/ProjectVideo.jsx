import React, { Component } from 'react';
import styles from '../../styles/project.module.css';

class ProjectVideo extends Component {
	state = {};
	render() {
		return (
			<div className={styles.videoContainer}>
				<iframe
					width="560"
					height="315"
					src={this.props.youtube}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen></iframe>
			</div>
		);
	}
}

export default ProjectVideo;
