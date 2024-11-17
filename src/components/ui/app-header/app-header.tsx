import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import logo from '@assets/logo.svg';
import styles from './app-header.module.scss';

export const AppHeaderUI: React.FC = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.menu}>
				<div className={styles.menu_part_left}>
					<NavLink
						to="/adventures"
						className={({ isActive }) => clsx(styles.link, isActive && styles.link_active)}
					>
						Все приключения
					</NavLink>
				</div>
				<div className={styles.logo}>
					<NavLink to="/">
						<a className="" href="/">
							<img src={logo} alt="logo" />
						</a>
					</NavLink>
				</div>
				<div className={styles.menu_part_right}>
					<NavLink
						to="/profile"
						className={({ isActive }) => clsx(styles.link, isActive && styles.link_active)}
					>
						Личный кабинет
					</NavLink>
				</div>
			</nav>
		</header>
	);
};
