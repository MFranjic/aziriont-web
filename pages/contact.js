import Image from 'next/image';
import Header from '../components/0_general/Header';
import Footer from '../components/0_general/Footer';
import ContactContainer from '../components/contact/ContactContainer';
import stylesGeneral from '../styles/general.module.css';
import styles from '../styles/contact.module.css';

export default function Contact() {
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
			<main>
				<h1 className={stylesGeneral.title}>Contact me</h1>
			</main>
			<div className={styles.main}>
				<ContactContainer />
			</div>
			<Footer />
		</div>
	);
}
