import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProjectThumbnail from '../components/projects/ProjectThumbnail';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/projects.module.css';
import projects from '../data/projectsData.js';

export default function Projects() {
	return (
		<div className={stylesGeneral.background2}>
			<Header />
			<main>
				<h1 className={stylesGeneral.title}>Projects</h1>
			</main>
			<div className={styles.main}>
				<div className={styles.projectsGrid}>
					{projects.map((project, index) => {
						return (
							<Link href={'/project?id=' + index}>
								<a>
									<ProjectThumbnail
										thumbnail={projects[index].photoPath + '1.png'}
										title={projects[index].title}
										time={projects[index].time}
										tags={projects[index].tags}
									/>
								</a>
							</Link>
						);
					})}
				</div>
			</div>
			<Footer position="relative" />
		</div>
	);
}
