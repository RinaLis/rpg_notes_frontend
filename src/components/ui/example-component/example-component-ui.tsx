import { ExampleComponentUIProps } from './type';
import styles from './example-component.module.scss';

export const ExampleComponentUI: React.FC<ExampleComponentUIProps> = ({ digit, onClick }) => (
	// Здесь только верстка компонента
	// Прописываем пропсы в файле type.ts

	// Все стили компонента находятся в файле example-component.module.scss
	// стараемся не использовать в стилях тире
	// вместо этого используем camelCase
	// стараемся соответсвовать БЭМ

	<div className={styles.example}>
		<div className={styles.example__title}>Example Component</div>
		<div className={styles.example__content}>
			<span className={styles.example__digit}>{digit}</span>
			<button className={styles.example__button} onClick={onClick}>
				Click me!
			</button>
		</div>
	</div>
);
