import React, { Component } from 'react';
import styles from '../../styles/homepage.module.css';
import Image from 'next/image';
import SpotlightProject from './SpotlightProject';

class SpotlightContainer extends Component {
	state = {};
	render() {
		return (
			<div className={styles.spotlightContainer}>
				<div className={styles.spotlightArrow}>
					<Image src="/resources/shapes/arrow-left.png" alt="arrow-left" height={40} width={40} />
				</div>
				<SpotlightProject />
				<div className={styles.spotlightArrow}>
					<Image src="/resources/shapes/arrow-right.png" alt="arrow-right" height={40} width={40} />
				</div>
			</div>
		);
	}
}

export default SpotlightContainer;
