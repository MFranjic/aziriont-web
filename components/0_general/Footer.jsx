import React, { Component } from 'react';
import styles from '../../styles/general.module.css';
import Image from 'next/image';
import Link from 'next/link';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className={styles.footer} style={{ position: this.props.position }}>
				<div className={styles.companyContainer}>
					<div className={styles.companyAddress}>
						<p className={styles.companyInfo}>Aziriont.j.d.o.o.</p>
						<p className={styles.companyInfo}>Trg Luke Ilića-Oriovčanina 8</p>
						<p className={styles.companyInfo}>44330 Novska, Croatia</p>
					</div>
					<div className={styles.companyLogo}>
						<Image src="/resources/logo.png" alt="Logo" height={57} width={61} />
					</div>
				</div>
				<div className={styles.buttonsContainer}></div>
			</footer>
		);
	}
}

export default Footer;
