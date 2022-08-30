import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/about.module.css';

class InfoInteraction extends Component {
	state = {};

	fetchButtonStyle = (buttonOrder) => {
		return buttonOrder === this.props.active ? styles.buttonFocused : styles.button;
	};

	getContainerWidth = () => {
		return this.props.items.length * 110 - 50;
	};

	render() {
		const { onSelect, section } = this.props;

		return (
			<div className={styles.buttons} style={{ width: this.getContainerWidth() }}>
				{this.props.items.map((item, index) => {
					return (
						<div className={styles.buttonContainer}>
							<button className={this.fetchButtonStyle(index)} onClick={() => onSelect(index)}>
								<Image
									src={'/resources/icons/icon-about-' + section + '-' + (index + 1) + '.png'}
									width={38}
									height={38}
									layout="fixed"
									objectFit="cover"
								/>
							</button>
						</div>
					);
				})}
			</div>
		);
	}
}

export default InfoInteraction;
