import Image from 'next/image';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProfileAbout from '../components/about/ProfileAbout';
import InfoContainer from '../components/about/InfoContainer';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/about.module.css';

export default function About() {
	return (
		<div className={stylesGeneral.background2}>
			<Header />
			<main>
				<h1 className={stylesGeneral.title}>About me</h1>
			</main>
			<div className={styles.main}>
				<ProfileAbout />
				<InfoContainer index="0" />
				<InfoContainer index="1" />
				<InfoContainer index="2" />
				<InfoContainer index="3" />
			</div>
			<Footer position="relative" />
		</div>
	);
}
