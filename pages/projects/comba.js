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
				<ProjectDetails
					description1={[
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ' +
							'eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis ' +
							'parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ' +
							'nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' +
							'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim ' +
							'justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis ' +
							'eu pede mollis pretium. Integer tincidunt.',
						'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ' +
							'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ' +
							'ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut ' +
							'metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel ' +
							'augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas ' +
							'tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing ' +
							'sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, ' +
							'lorem. Maecenas nec odio et ante tincidunt tempus.',
					]}
					description2={[
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ' +
							'eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis ' +
							'parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ' +
							'nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' +
							'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim ' +
							'justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis ' +
							'eu pede mollis pretium. Integer tincidunt.',
						'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ' +
							'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ' +
							'ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut ' +
							'metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel ' +
							'augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas ' +
							'tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing ' +
							'sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, ' +
							'lorem. Maecenas nec odio et ante tincidunt tempus.',
					]}
				/>
			</div>
			<Footer position="relative" />
		</div>
	);
}
