import Image from 'next/image';
import Header from '../../components/0_general/Header';
import Footer from '../../components/0_general/Footer';
import ProjectGallery from '../../components/project/ProjectGallery';
import ProjectMainInfo from '../../components/project/ProjectMainInfo';
import ProjectVideo from '../../components/project/ProjectVideo';
import ProjectTimeline from '../../components/project/ProjectTimeline';
import ProjectDetails from '../../components/project/ProjectDetails';
import stylesGeneral from '../../styles/general.module.css';
import styles from '../../styles/project.module.css';

export default function Comba() {
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
						'/resources/photos/projects/photo-comba-1.png',
						'/resources/photos/projects/photo-gamejams-1.png',
						'/resources/photos/projects/photo-morris-1.png',
						'/resources/photos/projects/photo-unityprojects-1.png',
					]}
				/>
				<main>
					<h1 className={stylesGeneral.title} style={{ marginTop: 50 }}>
						Project title
					</h1>
				</main>
				<ProjectMainInfo
					about="Lorem ipsum dolor sit amet, consectetuer adipiscin"
					idea="Lorem ipsum dolor sit amet, consectetuer adipiscin"
					result="Lorem ipsum dolor sit amet, consectetuer adipiscin"
					team="Lorem ipsum dolor sit amet, consectetuer adipiscin"
					tools={['Lorem ipsum dolor sit amet', 'consectetuer adipiscin']}
				/>
				<ProjectVideo youtube="https://www.youtube.com/embed/tHXp03DiiCg" />
				<ProjectTimeline timeline="/resources/photos/projects/timeline-comba.png" />
				<ProjectDetails />
			</div>
			<Footer position="relative" />
		</div>
	);
}
