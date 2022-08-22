import Image from 'next/image';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProjectThumbnail from '../components/projects/ProjectThumbnail';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/projects.module.css';

export default function Projects() {
	return (
		<div>
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
				<div className={styles.grid}>
					<ProjectThumbnail />
					<ProjectThumbnail />
					<ProjectThumbnail />
					<ProjectThumbnail />
					<ProjectThumbnail />
					<ProjectThumbnail />
					<ProjectThumbnail />
					<ProjectThumbnail />
				</div>
			</div>
			<Footer />
		</div>
	);
}
