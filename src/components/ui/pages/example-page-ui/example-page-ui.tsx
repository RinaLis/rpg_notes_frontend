import eyeInput from '@assets/eyeInput.svg';
import basket from '@assets/basket.svg';
import pen from '@assets/pen.svg';
import send from '@assets/send.svg';
import annotation from '@assets/annotation.svg';
import logo from '@assets/logo.svg';
import newLogo from '@assets/newLogo.svg';
import logoUser from '@assets/logoUser.svg';
import adventuresPic1 from '@assets/images/adventuresPic1.png';
import adventuresPic2 from '@assets/images/adventuresPic2.png';
import adventuresPic3 from '@assets/images/adventuresPic3.png';
import adventuresPicEmpty from '@assets/images/adventuresPicEmpty.png';
import sadFace from '@assets/images/sadFace.png';
import dragonPic from '@assets/images/dragonPic.png';
import dragonPic2 from '@assets/images/dragonPic2.png';
import beautifulCubes from '@assets/beautifulCubes.svg';
import cubes from '@assets/cubes.svg';
import itemPic from '@assets/images/itemPic.png';
import logoThreads from '@assets/images/logoThreads.png';
import postPic from '@assets/images/postPic.png';
import styles from './example-page-ui.module.scss';

export const ExamplePageUI: React.FC = () => (
	<>
		<section>
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
					<p className={styles.exampleSection__text}>logoUser</p>
					<img className={styles.exampleSection__img} src={logoUser} alt="logoUser" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>adventuresPic1</p>
					<img className={styles.exampleSection__img} src={adventuresPic1} alt="adventuresPic1" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>adventuresPic2</p>
					<img className={styles.exampleSection__img} src={adventuresPic2} alt="adventuresPic2" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>adventuresPic3</p>
					<img className={styles.exampleSection__img} src={adventuresPic3} alt="adventuresPic3" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>adventuresPicEmpty</p>
					<img
						className={styles.exampleSection__img}
						src={adventuresPicEmpty}
						alt="adventuresPicEmpty"
					/>
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>sadFace</p>
					<img className={styles.exampleSection__img} src={sadFace} alt="sadFace" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>dragonPic</p>
					<img className={styles.exampleSection__img} src={dragonPic} alt="dragonPic" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>dragonPic2</p>
					<img className={styles.exampleSection__img} src={dragonPic2} alt="dragonPic2" />
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
					<p className={styles.exampleSection__text}>itemPic</p>
					<img className={styles.exampleSection__img} src={itemPic} alt="itemPic" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>logoThreads</p>
					<img className={styles.exampleSection__img} src={logoThreads} alt="logoThreads" />
				</div>
				<div className={styles.exampleSection__content}>
					<p className={styles.exampleSection__text}>postPic</p>
					<img className={styles.exampleSection__img} src={postPic} alt="postPic" />
				</div>
			</div>
		</section>
	</>
);
