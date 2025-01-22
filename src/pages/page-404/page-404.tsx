type Page404Props = {
	text?: string;
};

export const Page404: React.FC<Page404Props> = ({ text }) => (
	<h2>{text || 'Страницы нет. 404.'}</h2>
);
