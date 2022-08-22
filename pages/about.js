import Image from 'next/image';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProfileAbout from '../components/about/ProfileAbout';
import InfoContainer from '../components/about/InfoContainer';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/about.module.css';

export default function About() {
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
				<h1 className={stylesGeneral.title}>About me</h1>
			</main>

			<div className={styles.main}>
				<ProfileAbout />
				<InfoContainer />
				<InfoContainer />
				<InfoContainer />
				<InfoContainer />
			</div>
			<Footer />
		</div>
	);
}
