import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../../components/0_general/Tag';
import styles from '../../styles/homepage.module.css';

class SpotlightProject extends Component {
	state = {};
	render() {
		return (
			<div className={styles.projectContainer}>
				<Link href={'/project?id=' + this.props.projectID}>
					<a>
						<Image
							src={this.props.project.photoPath + '1.png'}
							alt="project-image"
							layout="fill"
							objectFit="cover"
						/>
						{/* <div className={styles.coverTop}>Comba</div> */}
						<div className={styles.coverBottom}></div>
						<div className={styles.projectName}>{this.props.project.title}</div>
						<div className={styles.projectDescription}>{this.props.project.description}</div>
						<div className={styles.tagsArea}>
							<div className={styles.thumbnailTag} style={{ left: 10 }}>
								<Tag color="gray" value={this.props.project.time} />
							</div>
							<div className={styles.thumbnailTag} style={{ right: 10 }}>
								<div className={styles.typeTags}>
									{this.props.project.tags.map((tag) => {
										return (
											<div style={{ marginLeft: 8 }}>
												<Tag color={tag[0]} value={tag[1]} />
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</a>
				</Link>
			</div>
		);
	}
}

export default SpotlightProject;
