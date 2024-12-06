import { ExampleComponent } from 'src/components/example-component';
// что бы вставить SVG не как картинку
// импортируем его как компонент
// вместо Frame пишем имя кторое бхотим нашему SVG компоненту
// и ипортируем из нужного svg файла
import { ReactComponent as Frame } from '@assets/frame.svg';
import styles from './example-page-ui.module.scss';

export const ExamplePageUI: React.FC = () => (
	// здесь пишем верстку страницы
	// без логики
	// обратите внимание на именя css классов без дефисов
	//  стили с дефисами писать можно но вызывать будет не удобно
	<>
		<section className={styles.exampleSection}>
			<div className={styles.exampleSection__title}>
				<ExampleComponent />
			</div>
			<div className={styles.exampleSection__content}>
				<ExampleComponent />
			</div>
			<div className={styles.exampleSection__frame}>
				<Frame />
			</div>
		</section>
	</>
);

// посмотрите как вставлять SVG обарачиваем его в div или любой другой тег
// ему пишем нужный нам класс, стараемся следовать БЭМ
// в файле стилей пишем стили для этого класса
// в example-page-ui.module.scss напишу пример
