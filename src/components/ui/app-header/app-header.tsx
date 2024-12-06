import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import logo from '@assets/icons/logo.svg';
import styles from './app-header.module.scss';

export const AppHeaderUI: React.FC = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.header__menu}>
				<div className={styles.header__linkContainer}>
					<NavLink
						to="/adventures"
						className={({ isActive }) =>
							clsx(styles.header__link, isActive && styles.header__link_active)
						}
					>
						Приключения
					</NavLink>
				</div>
				<div className={styles.header__logoContainer}>
					<NavLink to="/auth/login">
						<img src={logo} alt="logo" className={styles.header__logo} />
					</NavLink>
				</div>
				<div className={styles.header__linkContainer}>
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							clsx(styles.header__link, isActive && styles.header__link_active)
						}
					>
						Личный кабинет
					</NavLink>
				</div>
			</nav>
		</header>
	);
};
