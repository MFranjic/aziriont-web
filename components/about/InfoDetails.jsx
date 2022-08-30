import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/about.module.css';
import Tag from '../../components/0_general/Tag';

class InfoDetails extends Component {
	state = {};
	render() {
		return (
			<div className={this.props.display}>
				<div className={styles.itemTitle}>Item title</div>
				<div className={styles.itemData}>
					<div className={styles.itemInfo}>
						<div className={styles.tagsArea}>
							<div style={{ marginRight: 15 }}>
								<Tag color="gray" value="Sep 2013 - Jul 2019" />
							</div>
							<div style={{ marginRight: 15 }}>
								<Tag color="blue" value="Zagreb, Croatia" />
							</div>
						</div>
						<div className={styles.textArea}>
							<div className={styles.textItem}>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
								dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus.
							</div>
							<div className={styles.textItem}>
								Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
								massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
								enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
								mollis pretium. Integer tincidunt.
							</div>
							<div className={styles.textItem}>
								Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
								leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
								dapibus in, viverra quis, feugiat a, tellus.
							</div>
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
