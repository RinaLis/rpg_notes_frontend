import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import logo from '@assets/logo.svg';
import styles from './app-header.module.scss';

export const AppHeaderUI: React.FC = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.header_menu}>
				<div>
					<NavLink
						to="/adventures"
						className={({ isActive }) =>
							clsx(styles.header_link, isActive && styles.header_link_active)
						}
					>
						Все приключения
					</NavLink>
				</div>
				<div className={styles.header_logo}>
					<NavLink to="/">
						<img src={logo} alt="logo" className={styles.header_logo_img} />
					</NavLink>
				</div>
				<div>
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							clsx(styles.header_link, isActive && styles.header_link_active)
						}
					>
						Личный кабинет
					</NavLink>
				</div>
			</nav>
		</header>
	);
};
