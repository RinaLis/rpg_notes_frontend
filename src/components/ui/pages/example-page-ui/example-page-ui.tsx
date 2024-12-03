import eyeInput from '@assets/icons/eyeInput.svg';
import basket from '@assets/icons/basket.svg';
import pen from '@assets/icons/pen.svg';
import send from '@assets/icons/send.svg';
import annotation from '@assets/icons/annotation.svg';
import logo from '@assets/icons/logo.svg';
import newLogo from '@assets/icons/newLogo.svg';
import sadFace from '@assets/images/sadFace.png';
import adventuresBackground from '@assets/images/adventuresBackground.png';
import allAdventuresBackground from '@assets/images/allAdventuresBackground.png';
import beautifulCubes from '@assets/images/beautifulCubes.png';
import createAdventuresBackground from '@assets/images/createAdventuresBackground.png';
import cubes from '@assets/images/cubes.png';
import styles from './example-page-ui.module.scss';

export const ExamplePageUI: React.FC = () => (
	<>
		<section className={styles.exampleSection}>
			<div className={styles.exampleSection__title}>icons</div>
			<div className={styles.exampleSection}>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>eyeInput</p>
					<img className={styles.exampleSection__img} src={eyeInput} alt="eyeInput" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>pen</p>
					<img className={styles.exampleSection__img} src={pen} alt="pen" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>send</p>
					<img
						className={styles.exampleSection__img}
						src={send}
						alt="send"
						style={{ background: 'gray' }}
					/>
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>annotation</p>
					<img className={styles.exampleSection__img} src={annotation} alt="annotation" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>basket</p>
					<img className={styles.exampleSection__img} src={basket} alt="basket" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>logo</p>
					<img className={styles.exampleSection__img} src={logo} alt="logo" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>newLogo</p>
					<img className={styles.exampleSection__img} src={newLogo} alt="newLogo" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>sadFace</p>
					<img className={styles.exampleSection__img} src={sadFace} alt="sadFace" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>createAdventuresBackground</p>
					<img
						className={styles.exampleSection__img}
						src={createAdventuresBackground}
						alt="createAdventuresBackground"
					/>
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>adventuresBackground</p>
					<img
						className={styles.exampleSection__img}
						src={adventuresBackground}
						alt="adventuresBackground"
					/>
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>beautifulCubes</p>
					<img className={styles.exampleSection__img} src={beautifulCubes} alt="beautifulCubes" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>cubes</p>
					<img className={styles.exampleSection__img} src={cubes} alt="cubes" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>allAdventuresBackground</p>
					<img
						className={styles.exampleSection__img}
						src={allAdventuresBackground}
						alt="allAdventuresBackground"
					/>
				</div>
			</div>
		</section>
	</>
);
