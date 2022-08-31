import React, { Component } from 'react';
import styles from '../../styles/project.module.css';

class ProjectMainInfo extends Component {
	state = {};
	render() {
		return (
			<div className={styles.mainInfoContainer}>
				<div className={styles.mainInfoLeft}>
					<div className={styles.mainInfoLeftItem}>
						<div className={styles.label}>About</div>
						<div className={styles.data}>{this.props.project.about}</div>
					</div>
					<div className={styles.mainInfoLeftItem}>
						<div className={styles.label}>Idea</div>
						<div className={styles.data}>{this.props.project.idea}</div>
					</div>
					<div className={styles.mainInfoLeftItem}>
						<div className={styles.label}>Result</div>
						<div className={styles.data}>{this.props.project.result}</div>
					</div>
					<div className={styles.mainInfoLeftItem}>
						<div className={styles.label}>Team</div>
						<div className={styles.data}>{this.props.project.team}</div>
					</div>
				</div>
				<div className={styles.mainInfoRight}>
					<div className={styles.label}>Tools</div>
					<div className={styles.data}>
						{this.props.project.tools.map((tool) => {
							return <div className={styles.dataItem}>&bull; {tool}</div>;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectMainInfo;
