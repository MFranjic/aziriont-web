import Image from 'next/image';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProfileHomepage from '../components/index/ProfileHomepage';
import SpotlightContainer from '../components/index/SpotlightContainer';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/homepage.module.css';

export default function Home() {
	return (
		<div className={stylesGeneral.background}>
			<Header />
			<div className={styles.main}>
				<ProfileHomepage />
				<SpotlightContainer />
			</div>
			<Footer position="absolute" />
		</div>
	);
}
