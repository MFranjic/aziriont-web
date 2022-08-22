import Image from 'next/image';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ProfileHomepage from '../components/index/ProfileHomepage';
import SpotlightContainer from '../components/index/SpotlightContainer';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/homepage.module.css';

export default function Home() {
	return (
		<div>
			<div className={stylesGeneral.background}>
				<Image
					alt="Background"
					src="/resources/background-1.png"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
			</div>
			<Header />
			<div className={styles.main}>
				<ProfileHomepage />
				<SpotlightContainer />
			</div>
			<Footer />
		</div>
	);
}
