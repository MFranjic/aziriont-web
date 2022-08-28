import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/project.module.css';

class ProjectTimeline extends Component {
	state = {};
	render() {
		return (
			<div className={styles.timelineContainer}>
				<Image src={this.props.timeline} width={1130} height={160} />
			</div>
		);
	}
}

export default ProjectTimeline;
