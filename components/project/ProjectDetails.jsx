import React, { Component } from 'react';
import styles from '../../styles/project.module.css';

class ProjectDetails extends Component {
	state = {};
	render() {
		return (
			<div className={styles.detailsContainer}>
				<div className={styles.title}>More info</div>
				<div className={styles.description}></div>
				<div className={styles.description}></div>
			</div>
		);
	}
}

export default ProjectDetails;
