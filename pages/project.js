import Image from 'next/image';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProjectGallery from '../components/project/ProjectGallery';
import ProjectMainInfo from '../components/project/ProjectMainInfo';
import ProjectVideo from '../components/project/ProjectVideo';
import ProjectTimeline from '../components/project/ProjectTimeline';
import ProjectDetails from '../components/project/ProjectDetails';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/project.module.css';

export default function Project() {
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
			<div class={styles.gallery}>
				<ProjectGallery />
			</div>
			<main>
				<h1 className={stylesGeneral.title}>About me</h1>
			</main>
			<div className={styles.main}>
				<ProjectMainInfo />
				<ProjectVideo />
				<ProjectTimeline />
				<ProjectDetails />
			</div>
			<Footer />
		</div>
	);
}
