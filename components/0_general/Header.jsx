import React, { Component } from 'react';
import styles from '../../styles/general.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href="/">
					<Image
						src="/resources/logo.png"
						alt="Logo"
						height={57}
						width={61}
					/>
				</Link>
			</div>
			<div className={styles.buttonsContainer}>
				<Link href="/projects">
					<a className={styles.button + ' ' + styles.buttonBorder}>
						PROJECTS
					</a>
				</Link>
				<Link href="/about">
					<a className={styles.button + ' ' + styles.buttonBorder}>
						ABOUT ME
					</a>
				</Link>
				<Link href="/contact">
					<a className={styles.button}>CONTACT</a>
				</Link>
			</div>
		</header>
	);
};

export default Header;
