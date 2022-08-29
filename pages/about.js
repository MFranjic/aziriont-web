import Image from 'next/image';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProfileAbout from '../components/about/ProfileAbout';
import InfoContainer from '../components/about/InfoContainer';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/about.module.css';

export default function About() {
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
				<h1 className={stylesGeneral.title}>About me</h1>
			</main>

			<div className={styles.main}>
				<ProfileAbout
					cv=""
					github="https://github.com/MFranjic"
					linkedin="https://www.linkedin.com/in/marko-franji%C4%87-031aba77/"
					facebook="https://www.facebook.com/marko.franjic.7"
					instagram="https://www.instagram.com/mfranjic95/"
				/>
				<InfoContainer title="Career" section="car" items={['0', '1']} />
				<InfoContainer title="Achievements" section="ach" items={['0', '1', '2']} />
				<InfoContainer title="Education" section="edu" items={['0', '1', '2']} />
				<InfoContainer title="ESN" section="esn" items={['0', '1', '2', '3']} />
			</div>
			<div style={{ marginBottom: 50 }}></div>
			<Footer position="relative" />
		</div>
	);
}
