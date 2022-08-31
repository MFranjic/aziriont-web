import React, { Component } from 'react';
import Image from 'next/image';
import SpotlightProject from './SpotlightProject';
import projects from '../../data/projectsData';
import styles from '../../styles/homepage.module.css';

class SpotlightContainer extends Component {
	state = {
		order: 0,
		currentProject: projects[0],
	};

	handleForwards = () => {
		const newOrder = this.state.order < 4 ? this.state.order + 1 : 0;
		this.setState({ order: newOrder, currentProject: projects[newOrder] });
	};

	handleBackwards = () => {
		const newOrder = this.state.order > 0 ? this.state.order - 1 : 4;
		this.setState({ order: newOrder, currentProject: projects[newOrder] });
	};

	render() {
		return (
			<div className={styles.spotlightContainer}>
				<button
					className={styles.spotlightArrow}
					onClick={() => {
						this.handleBackwards();
					}}>
					<Image src="/resources/shapes/arrow-left.png" alt="arrow-left" height={40} width={40} />
				</button>
				<SpotlightProject project={this.state.currentProject} projectID={this.state.order} />
				<button
					className={styles.spotlightArrow}
					onClick={() => {
						this.handleForwards();
					}}>
					<Image src="/resources/shapes/arrow-right.png" alt="arrow-right" height={40} width={40} />
				</button>
			</div>
		);
	}
}

export default SpotlightContainer;
