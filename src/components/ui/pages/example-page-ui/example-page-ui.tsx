import { ExampleComponent } from 'src/components/example-component';
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
		</section>
	</>
);
