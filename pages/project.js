import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProjectGallery from '../components/project/ProjectGallery';
import ProjectMainInfo from '../components/project/ProjectMainInfo';
import ProjectVideo from '../components/project/ProjectVideo';
import ProjectTimeline from '../components/project/ProjectTimeline';
import ProjectDetails from '../components/project/ProjectDetails';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/project.module.css';
import projects from '../data/projectsData.js';

export default function Project() {
	var router = useRouter();
	var id = router.query['id'];

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
			<div className={styles.main}>
				<ProjectGallery
					images={[
						projects[id].photoPath + '1.png',
						projects[id].photoPath + '2.png',
						projects[id].photoPath + '3.png',
						projects[id].photoPath + '4.png',
					]}
				/>
				<main>
					<h1 className={stylesGeneral.title} style={{ marginTop: 50 }}>
						{projects[id].title}
					</h1>
				</main>
				<ProjectMainInfo project={projects[id]} />
				<ProjectVideo youtube={projects[id].youtube} />
				<ProjectTimeline timeline={projects[id].timeline} />
				<ProjectDetails description1={projects[id].description1} description2={projects[id].description2} />
			</div>
			<Footer position="relative" />
		</div>
	);
}
