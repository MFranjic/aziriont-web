import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/about.module.css';
import Tag from '../../components/0_general/Tag';

class InfoDetails extends Component {
	state = {};
	render() {
		return (
			<div className={this.props.display}>
				<div className={styles.itemTitle}>{this.props.section?.title}</div>
				<div className={styles.itemData}>
					<div className={styles.itemInfo}>
						<div className={styles.tagsArea}>
							{this.props.section?.tags?.map((tag) => {
								return (
									<div style={{ marginRight: 15 }}>
										<Tag color={tag[0]} value={tag[1]} />
									</div>
								);
							})}
						</div>
						<div className={styles.textArea}>
							{this.props.section?.description?.map((paragraph) => {
								return <div className={styles.textItem}>{paragraph}</div>;
							})}
						</div>
					</div>
					<div className={styles.itemPhotos}>
						<div className={styles.itemPhotoContainer}>
							<div className={styles.itemPhoto}>
								<Image
									src="/resources/photos/projects/photo-comba-1.png"
									width={230}
									height={144}
									layout="fixed"
									objectFit="cover"
								/>
							</div>
						</div>
						<div className={styles.itemPhotoContainer}>
							<div className={styles.itemPhoto}>
								<Image
									src="/resources/photos/projects/photo-gamejams-1.png"
									width={230}
									height={144}
									layout="fixed"
									objectFit="cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InfoDetails;
