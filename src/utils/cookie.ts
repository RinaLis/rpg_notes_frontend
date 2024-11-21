export const getCookie = (name: string): string | undefined => {
	const matches = document.cookie.match(
		new RegExp(`(?:^|; )${name.replace('/([.$?*|{}()[]\\/+^])/g', '\\$1')}=([^;]*)`)
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (
	name: string,
	value: string,
	props: { expires: string | number | Date | boolean } | {} = {}
) => {
	const propsWithPath = {
		path: '/',
		...props,
	};

	let exp = propsWithPath.expires;
	if (exp && typeof exp === 'number') {
		const d = new Date();
		d.setTime(d.getTime() + exp * 1000);
		exp = d;
	}

	if (exp && exp instanceof Date) {
		propsWithPath.expires = exp.toUTCString();
	}
	const encodeValue = encodeURIComponent(value);
	const updatedCookie = `${name}=${encodeValue}; expires=${propsWithPath.expires}`;
	document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
	setCookie(name, '', { expires: -1 });
};
