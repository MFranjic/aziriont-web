import React, { Component } from 'react';
import styles from '../../styles/project.module.css';

class ProjectDetails extends Component {
	state = {};
	render() {
		return (
			<div className={styles.detailsContainer}>
				<div className={styles.title}>More info</div>
				<div className={styles.description}>
					{this.props.description1.map((part) => {
						return <div className={styles.descriptionItem}>{part}</div>;
					})}
				</div>
				<div className={styles.description}>
					{this.props.description2.map((part) => {
						return <div className={styles.descriptionItem}>{part}</div>;
					})}
				</div>
			</div>
		);
	}
}

export default ProjectDetails;
