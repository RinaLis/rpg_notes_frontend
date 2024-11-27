import axios, { AxiosRequestConfig } from 'axios';
import { RefreshTokenInputDTO, TokensOutputDTO } from '@utils-types';

const BASE_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.response.use(
	function (response) {
		if (response.data) {
			if (response.status === 200 || response.status === 201) {
				return Promise.resolve(response);
			}
			return Promise.reject(response);
		}

		return Promise.reject(response);
	},
	function (error) {
		// TODO: Оставить только 1 часть, когда поправят бэк
		if (error.response.data.detail[0].msg) {
			const newError = {
				...error,
				message: error.response.data.detail[0].msg,
			};
			return Promise.reject(newError);
		}
		const newError = {
			...error,
			message: error.response.data.detail,
		};
		return Promise.reject(newError);
	}
);

export const request = async <T, U>(options: AxiosRequestConfig<T>): Promise<U> =>
	api(options)
		.then((res) => res.data)
		.catch((error) => Promise.reject(error));

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
		localStorage.setItem('accessToken', refreshData.data.access_token);
		return refreshData.data;
	});

export const requestWithRefresh = async <T, U>(options: AxiosRequestConfig<T>): Promise<U> => {
	const axiosConfig: AxiosRequestConfig<T> = {
		...options,
		headers: {
			...options.headers,
			authorization: `Bearer ${localStorage.getItem('accessToken')}`,
		},
	};
	return api(axiosConfig)
		.then((res) => res.data)
		.catch((error) => {
			if ((error as { message: string }).message === 'jwt expired') {
				return refreshToken()
					.then((refreshData) => {
						if (axiosConfig.headers) {
							(axiosConfig.headers as { [key: string]: string }).authorization =
								refreshData.access_token;
						}
						api(axiosConfig)
							.then((res) => res.data)
							.catch((err) => Promise.reject(err));
					})
					.catch((err) => Promise.reject(err));
			}
			return Promise.reject(error);
		});
};
