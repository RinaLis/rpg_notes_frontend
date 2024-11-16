import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './app-header.module.css';
import logo from '/logo.svg';

export const AppHeaderUI: React.FC = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.menu}>
				<div className={styles.menu_part_left}>
					<NavLink
						to="/adventures"
						className={({ isActive }) =>
							isActive ? styles.link + ' ' + styles.link_active : styles.link
						}
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
						className={({ isActive }) =>
							isActive ? styles.link + ' ' + styles.link_active : styles.link
						}
					>
						Личный кабинет
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

