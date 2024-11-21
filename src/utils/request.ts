import axios, { AxiosRequestConfig } from 'axios';
import { RefreshTokenInputDTO, TokensOutputDTO } from '@utils-types';
import { getCookie, setCookie } from '@cookie';

const BASE_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.response.use(
	function (response) {
		if (response.data) {
			if (response.status === 200 || response.status === 201) {
				return response;
			}
			return Promise.reject(response);
		}

		return Promise.reject(response);
	},
	function (error) {
		return Promise.reject(error);
	}
);

export const request = async <T, U>(options: AxiosRequestConfig<T>): Promise<U> =>
	api(options)
		.then((res) => {
			return res.data;
		})
		.catch((error) => {
			return error;
		});

export const refreshToken = (): Promise<TokensOutputDTO> =>
	api({
		method: 'POST',
		url: '/auth/refresh',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		data: {
			refresh_token: localStorage.getItem('refreshToken'),
		} as RefreshTokenInputDTO,
	}).then((refreshData) => {
		localStorage.setItem('refreshToken', refreshData.data.refresh_token);
		setCookie('accessToken', refreshData.data.access_token);
		return refreshData.data;
	});

export const requestWithRefresh = async <T, U>(options: AxiosRequestConfig<T>): Promise<U> => {
	const axiosConfig = {
		...options,
		headers: {
			...options.headers,
			authorization: `Bearer ${getCookie('accessToken')}`,
		},
	};
	try {
		const res = await api(axiosConfig);
		return res.data;
	} catch (err) {
		if ((err as { message: string }).message === 'jwt expired') {
			const refreshData = await refreshToken();
			if (axiosConfig.headers) {
				(axiosConfig.headers as { [key: string]: string }).authorization = refreshData.access_token;
			}
			const res = await api(axiosConfig);
			return res.data;
		}
		return Promise.reject(err);
	}
};
