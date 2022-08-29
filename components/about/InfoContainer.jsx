import React, { Component } from 'react';
import styles from '../../styles/about.module.css';
import InfoSection from './InfoSection';
import InfoInteraction from './InfoInteraction';
import InfoDetails from './InfoDetails';

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
		return (
			<div className={styles.infoContainer}>
				<InfoSection title={this.props.title} />
				<InfoInteraction
					section={this.props.section}
					items={this.props.items}
					onSelect={this.handleButtonClick}
					active={this.state.active}
				/>
				<InfoDetails display={this.state.descriptionStyle} active={this.state.active} />
			</div>
		);
	}
}

export default InfoContainer;
