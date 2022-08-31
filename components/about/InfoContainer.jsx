import React, { Component } from 'react';
import styles from '../../styles/about.module.css';
import InfoSection from './InfoSection';
import InfoInteraction from './InfoInteraction';
import InfoDetails from './InfoDetails';
import profile from '../../data/profileData.js';

class InfoContainer extends Component {
	state = {
		descriptionStyle: styles.hideDescription,
		active: null,
	};

	handleButtonClick = (order) => {
		if (order !== this.state.active) {
			this.setState({
				descriptionStyle: styles.descriptionContainer,
				active: order,
			});
		} else {
			this.setState({
				descriptionStyle: styles.hideDescription,
				active: null,
			});
		}
	};

	render() {
		const { index } = this.props;

		return (
			<div className={styles.infoContainer}>
				<InfoSection title={profile.sections[index].title} />
				<InfoInteraction
					id={profile.sections[index].id}
					items={profile.sections[index].items}
					onSelect={this.handleButtonClick}
					active={this.state.active}
				/>
				<InfoDetails
					display={this.state.descriptionStyle}
					section={profile.sections[index].items[this.state.active]}
				/>
			</div>
		);
	}
}

export default InfoContainer;
