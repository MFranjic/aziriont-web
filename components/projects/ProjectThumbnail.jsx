import React, { Component } from 'react';
import styles from '../../styles/projects.module.css';
import Image from 'next/image';
import Tag from '../../components/0_general/Tag';

class ProjectThumbnail extends Component {
	state = {};
	render() {
		return (
			<div className={styles.projectContainer}>
				<div className={styles.thumbnail}>
					<Image
						src={this.props.thumbnail}
						alt="project-thumbnail"
						width={400}
						height={300}
						objectFit="cover"
					/>
					<div className={styles.coverTop}>
						<div className={styles.projectTitle}>{this.props.title}</div>
					</div>
					<div className={styles.coverBottom}>
						<div className={styles.projectDescription}>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
						</div>
					</div>
					<div className={styles.tagsArea}>
						<div className={styles.thumbnailTag} style={{ left: 0 }}>
							<Tag color="gray" value={this.props.time} />
						</div>
						<div className={styles.thumbnailTag} style={{ right: 0 }}>
							<div className={styles.typeTags}>
								{this.props.tags.map((tag) => {
									return (
										<div style={{ marginLeft: 8 }}>
											<Tag color={tag[0]} value={tag[1]} />
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectThumbnail;
