import { ExampleComponent } from 'src/components/example-component';
// что бы вставить SVG не как картинку
// импортируем его как компонент
// вместо Frame пишем имя кторое бхотим нашему SVG компоненту
// и ипортируем из нужного svg файла

import styles from './example-page-ui.module.scss';
import { Select } from '../../select/select';

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
		<div className={styles.selectContainer}>
			<Select
				// пример применения компонента Select
				// options - массив объектов с опциями
				options={[
					{ label: 'Все', value: '1' },
					{ label: 'Создатель', value: '2' },
					{ label: 'Игрок', value: '3' },
				]}
				// onChange - функция которая вызывается при выборе опции
				// принимает объект выбранной опции или null если опция снята
				onChange={(option) => {
					if (option) {
						console.log(option);
					} else {
						console.log('clear');
					}
				}}
				// placeholder - текст в пустом поле
				placeholder="Фильтровать"
				// classNameProp - дополнительный класс для стилизации размера и местоположения
				classNameProp={styles.exampleSection__select}
			/>
		</div>
	</>
);

// посмотрите как вставлять SVG обарачиваем его в div или любой другой тег
// ему пишем нужный нам класс, стараемся следовать БЭМ
// в файле стилей пишем стили для этого класса
// в example-page-ui.module.scss напишу пример
