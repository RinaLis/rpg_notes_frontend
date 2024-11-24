import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import logo from '@assets/logo.svg';
import styles from './app-header.module.scss';

export const AppHeaderUI: React.FC = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.headerMenu}>
				<div className={styles.headerLinkContainer}>
					<NavLink
						to="/adventures"
						className={({ isActive }) =>
							clsx(styles.headerLink, isActive && styles.headerLinkActive)
						}
					>
						Приключения
					</NavLink>
				</div>
				<div className={styles.headerLogoContainer}>
					<NavLink to="/login">
						<img src={logo} alt="logo" className={styles.headerLogo} />
					</NavLink>
				</div>
				<div className={styles.headerLinkContainer}>
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							clsx(styles.headerLink, isActive && styles.headerLinkActive)
						}
					>
						Личный кабинет
					</NavLink>
				</div>
			</nav>
		</header>
	);
};
