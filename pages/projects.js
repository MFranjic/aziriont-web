import Image from 'next/image';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProjectThumbnail from '../components/projects/ProjectThumbnail';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/projects.module.css';

export default function Projects() {
	return (
		<div className={stylesGeneral.container}>
			<div className={stylesGeneral.background}>
				<Image
					alt="Background"
					src="/resources/background-2.png"
					layout="fill"
					objectFit="cover"
					objectPosition="top"
					quality={100}
				/>
			</div>
			<Header />
			<main>
				<h1 className={stylesGeneral.title}>Projects</h1>
			</main>
			<div className={styles.main}>
				<div className={styles.projectsGrid}>
					<ProjectThumbnail
						thumbnail="/resources/photos/projects/photo-comba-1.png"
						title="Comba"
						time="2021 - 2022"
						tags={['mobile']}
					/>
					<ProjectThumbnail
						thumbnail="/resources/photos/projects/photo-towerdefense-1.png"
						title="Tower Defense"
						time="2022"
						tags={['VR']}
					/>
					<ProjectThumbnail
						thumbnail="/resources/photos/projects/photo-gamejams-1.png"
						title="Game jams"
						time="2020 - 2022"
						tags={['desktop', 'VR']}
					/>
					<ProjectThumbnail
						thumbnail="/resources/photos/projects/photo-snakesladders-1.png"
						title="Snakes & Ladders"
						time="2021"
						tags={['desktop']}
					/>
					<ProjectThumbnail
						thumbnail="/resources/photos/projects/photo-slonko-1.png"
						title="Slonko - coloring"
						time="2020"
						tags={['mobile']}
					/>
					<ProjectThumbnail
						thumbnail="/resources/photos/projects/photo-unityprojects-1.png"
						title="Unity education projects"
						time="2019 - 2020"
						tags={['desktop']}
					/>
					<ProjectThumbnail
						thumbnail="/resources/photos/projects/photo-masterthesis-1.png"
						title="Master thesis - object recognition"
						time="2019"
						tags={['mobile', 'AI']}
					/>
					<ProjectThumbnail
						thumbnail="/resources/photos/projects/photo-morris-1.png"
						title="Nine men's morris"
						time="2018"
						tags={['desktop']}
					/>
				</div>
			</div>
			<Footer position="relative" />
		</div>
	);
}
