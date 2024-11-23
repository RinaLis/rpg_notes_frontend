/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AdventureDTO */
export interface AdventureDTO {
	/**
	 * Id приключения
	 * @format uuid4
	 */
	id: string;
	/** Название */
	name: string;
	/** Описание */
	description?: string | null;
	/** Владелец */
	owner: UserDTO;
	/** Картинка */
	image?: string | null;
	/**
	 * Создание
	 * @format date-time
	 */
	created_at: string;
	/** Текст */
	text?: string | null;
}

/** AdventureShortDTO */
export interface AdventureShortDTO {
	/**
	 * Id приключения
	 * @format uuid4
	 */
	id: string;
	/** Название */
	name: string;
	/** Описание */
	description?: string | null;
	/** Владелец */
	owner: UserDTO;
	/** Картинка */
	image?: string | null;
	/**
	 * Создание
	 * @format date-time
	 */
	created_at: string;
}

/** AdventuresListDTO */
export interface AdventuresListDTO {
	/**
	 * Список приключений
	 * @default []
	 */
	adventures?: AdventureShortDTO[];
}

/** Body_upload_media_upload__post */
export interface BodyUploadMediaUploadPost {
	/**
	 * File
	 * @format binary
	 */
	file: File;
}

/** CommentDTO */
export interface CommentDTO {
	/**
	 * ID комментария
	 * @format uuid4
	 */
	id: string;
	/**
	 * ID поста
	 * @format uuid4
	 */
	post_id: string;
	/** текст */
	text: string;
	/** Создатель */
	owner?: HeroDTO | null;
	/** Создатель */
	user: UserDTO;
	/**
	 * Дата создания
	 * @format date-time
	 */
	created_at: string;
}

/** CommentListDTO */
export interface CommentListDTO {
	/**
	 * Список комментов
	 * @default []
	 */
	comments?: CommentDTO[];
}

/** CreateAdventureInputDTO */
export interface CreateAdventureInputDTO {
	/** Имя */
	name: string;
	/** Описание */
	description: string;
	/** Текст */
	text: string;
	/** Картинка */
	image?: string | null;
}

/** CreateCommentInputDTO */
export interface CreateCommentInputDTO {
	/**
	 * Id поста
	 * @format uuid4
	 */
	post_id: string;
	/** Текст коммента */
	text: string;
}

/** CreateHeroInputDTO */
export interface CreateHeroInputDTO {
	/**
	 * Id приключения
	 * @format uuid4
	 */
	adventure_id: string;
	/** Имя */
	name: string;
	/** Аватарка */
	image?: string | null;
	/**
	 * Характеристики
	 * @default []
	 */
	characteristics?: HeroCharacteristicDTO[];
}

/** CreatePostInputDTO */
export interface CreatePostInputDTO {
	/**
	 * Id треда
	 * @format uuid4
	 */
	thread_id: string;
	/** Название поста */
	name: string;
	/** Описание поста */
	description: string;
	/** Текст поста */
	text: string;
	/**
	 * Теги поста
	 * @default []
	 */
	tags?: string[];
	/** Картинка */
	image?: string | null;
}

/** CreateThreadInputDTO */
export interface CreateThreadInputDTO {
	/**
	 * Id приключения
	 * @format uuid4
	 */
	adventure_id: string;
	/** Название треда */
	name: string;
	/** Тип треда */
	type: ThreadType;
	/** Картинка */
	image?: string | null;
}

/** DeleteAdventureInputDTO */
export interface DeleteAdventureInputDTO {
	/**
	 * Id пользователя
	 * @format uuid4
	 */
	id: string;
}

/** DeleteCommentInputDTO */
export interface DeleteCommentInputDTO {
	/**
	 * Id коммента
	 * @format uuid4
	 */
	id: string;
}

/** DeletePlayerInputDTO */
export interface DeletePlayerInputDTO {
	/**
	 * Приключение
	 * @format uuid4
	 */
	adventure_id: string;
	/**
	 * Пользователь
	 * @format uuid4
	 */
	user_id: string;
}

/** DeletePostInputDTO */
export interface DeletePostInputDTO {
	/**
	 * Id поста
	 * @format uuid4
	 */
	id: string;
}

/** DeleteThreadInputDTO */
export interface DeleteThreadInputDTO {
	/**
	 * Id треда
	 * @format uuid4
	 */
	id: string;
}

/** FinishVkOauthInputDTO */
export interface FinishVkOauthInputDTO {
	/** Код */
	code: string;
	/** id device */
	device_id: string;
	/** state */
	state: string;
	/** type */
	type: string;
}

/** GetOauthUrlOutputDTO */
export interface GetOauthUrlOutputDTO {
	/** Ссылка */
	url: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
	/** Detail */
	detail?: ValidationError[];
}

/** HeroCharacteristicDTO */
export interface HeroCharacteristicDTO {
	/** Код */
	code: HeroCharacteristicsEnum;
	/** Значение */
	value: string;
}

/** HeroCharacteristicsEnum */
export enum HeroCharacteristicsEnum {
	Age = 'age',
	Description = 'description',
	Background = 'background',
	Class = 'class',
	Race = 'race',
	Gender = 'gender',
	Character = 'character',
	Others = 'others',
}

/** HeroDTO */
export interface HeroDTO {
	/** Имя */
	name: string;
	/**
	 * Id
	 * @format uuid4
	 */
	id: string;
	/**
	 * Жив
	 * @default true
	 */
	is_alive?: boolean;
	/**
	 * Игрок
	 * @format uuid4
	 */
	user_in_adventure_id: string;
	/** Аватар */
	image?: string | null;
	/** Используется */
	is_used: boolean;
}

/** HeroWithCharacteristicsDTO */
export interface HeroWithCharacteristicsDTO {
	/** Имя */
	name: string;
	/**
	 * Id
	 * @format uuid4
	 */
	id: string;
	/**
	 * Жив
	 * @default true
	 */
	is_alive?: boolean;
	/**
	 * Игрок
	 * @format uuid4
	 */
	user_in_adventure_id: string;
	/** Аватар */
	image?: string | null;
	/** Используется */
	is_used: boolean;
	/**
	 * Характеристики
	 * @default []
	 */
	characteristics?: HeroCharacteristicDTO[];
}

/** HeroesDTO */
export interface HeroesDTO {
	/**
	 * Герои
	 * @default []
	 */
	heroes?: HeroWithCharacteristicsDTO[];
}

/** InviteToAdventureInputDTO */
export interface InviteToAdventureInputDTO {
	/**
	 * Приключение
	 * @format uuid4
	 */
	adventure_id: string;
	/** Логин */
	login: string;
}

/** LoginInputDTO */
export interface LoginInputDTO {
	/**
	 * Email пользователя
	 * @format email
	 */
	email: string;
	/** Пароль пользователя */
	password: string;
}

/** OauthType */
export enum OauthType {
	Vk = 'vk',
}

/** PlayerDTO */
export interface PlayerDTO {
	/**
	 * Id пользователя
	 * @format uuid4
	 */
	id: string;
	/** Персонажи игрока */
	heroes: HeroDTO[];
}

/** PlayersByAdventureOutputDTO */
export interface PlayersByAdventureOutputDTO {
	/** Игроки */
	players: PlayerDTO[];
}

/** PostDTO */
export interface PostDTO {
	/**
	 * ID поста
	 * @format uuid4
	 */
	id: string;
	/** Название */
	name: string;
	/** Описание */
	description?: string | null;
	/**
	 * Теги
	 * @default []
	 */
	tags?: string[];
	/** Создатель */
	owner?: HeroDTO | null;
	/** Создатель */
	user: UserDTO;
	/**
	 * Тред
	 * @format uuid4
	 */
	thread_id: string;
	/** Картинка */
	image?: string | null;
	/**
	 * Дата создания
	 * @format date-time
	 */
	created_at: string;
	/** Текст */
	text?: string | null;
}

/** PostListDTO */
export interface PostListDTO {
	/**
	 * Список постов
	 * @default []
	 */
	posts?: PostShortDTO[];
}

/** PostShortDTO */
export interface PostShortDTO {
	/**
	 * ID поста
	 * @format uuid4
	 */
	id: string;
	/** Название */
	name: string;
	/** Описание */
	description?: string | null;
	/**
	 * Теги
	 * @default []
	 */
	tags?: string[];
	/** Создатель */
	owner?: HeroDTO | null;
	/** Создатель */
	user: UserDTO;
	/**
	 * Тред
	 * @format uuid4
	 */
	thread_id: string;
	/** Картинка */
	image?: string | null;
	/**
	 * Дата создания
	 * @format date-time
	 */
	created_at: string;
}

/** RecoveryPasswordInputDTO */
export interface RecoveryPasswordInputDTO {
	/** Код проверки */
	code: string;
	/** Пароль */
	password: string;
}

/** RefreshTokenInputDTO */
export interface RefreshTokenInputDTO {
	/** Refresh token пользователя */
	refresh_token: string;
}

/** RequestVerifyCodeInputDTO */
export interface RequestVerifyCodeInputDTO {
	/** Почта */
	email: string;
	/** Тип */
	type: VerifyCodeType;
}

/** SignupInputDTO */
export interface SignupInputDTO {
	/**
	 * Email пользователя
	 * @format email
	 */
	email: string;
	/** Имя пользователя */
	name: string;
	/** Логин пользователя */
	login: string;
	/** Пароль пользователя */
	password: string;
}

/** SuccessDTO */
export interface SuccessDTO {
	/**
	 * Success
	 * @default true
	 */
	success?: boolean;
}

/** ThreadDTO */
export interface ThreadDTO {
	/**
	 * Id треда
	 * @format uuid4
	 */
	id: string;
	/**
	 * Id приключения
	 * @format uuid4
	 */
	adventure_path_id: string;
	/** Картинка */
	image?: string | null;
	/** Название */
	name: string;
	/** Тип */
	type: ThreadType;
	/** Владелец */
	owner?: HeroDTO | null;
	/** Владелец */
	user: UserDTO;
	/**
	 * Дата создания
	 * @format date-time
	 */
	created_at: string;
}

/** ThreadListDTO */
export interface ThreadListDTO {
	/**
	 * Список тредов
	 * @default []
	 */
	threads?: ThreadDTO[];
}

/** ThreadType */
export enum ThreadType {
	Public = 'public',
	Private = 'private',
}

/** TokensOutputDTO */
export interface TokensOutputDTO {
	/** Access Token */
	access_token: string;
	/** Refresh Token */
	refresh_token: string;
}

/** UpdateAdventureInputDTO */
export interface UpdateAdventureInputDTO {
	/**
	 * Id приключения
	 * @format uuid4
	 */
	id: string;
	/** Название */
	name: string;
	/** Описание */
	description: string;
	/** Картинка */
	image?: string | null;
	/** текст */
	text: string;
}

/** UpdateCommentInputDTO */
export interface UpdateCommentInputDTO {
	/**
	 * Id Коммента
	 * @format uuid4
	 */
	id: string;
	/** Текст коммента */
	text: string;
}

/** UpdateHeroInputDTO */
export interface UpdateHeroInputDTO {
	/**
	 * Id героя
	 * @format uuid4
	 */
	id: string;
	/** Имя */
	name: string;
	/** Аватарка */
	image?: string | null;
	/**
	 * Характеристики
	 * @default []
	 */
	characteristics?: HeroCharacteristicDTO[];
	/**
	 * Жив
	 * @default true
	 */
	is_alive?: boolean;
	/**
	 * Используется
	 * @default true
	 */
	is_used?: boolean;
}

/** UpdatePostInputDTO */
export interface UpdatePostInputDTO {
	/**
	 * Id поста
	 * @format uuid4
	 */
	id: string;
	/** Название поста */
	name: string;
	/** Описание поста */
	description: string;
	/** Текст поста */
	text: string;
	/**
	 * Теги поста
	 * @default []
	 */
	tags?: string[];
	/** Картинка */
	image?: string | null;
}

/** UpdateThreadInputDTO */
export interface UpdateThreadInputDTO {
	/**
	 * Id треда
	 * @format uuid4
	 */
	id: string;
	/** Название */
	name: string;
	/** Картинка */
	image?: string | null;
	/** Тип */
	type: ThreadType;
}

/** UpdateUserInputDTO */
export interface UpdateUserInputDTO {
	/** Почта */
	email: string;
	/** Имя */
	name: string;
	/** Логин */
	login: string;
	/** Аватар */
	avatar?: string | null;
}

/** UploadFileOutputDTO */
export interface UploadFileOutputDTO {
	/**
	 * id файла
	 * @format uuid4
	 */
	id: string;
}

/** UserDTO */
export interface UserDTO {
	/**
	 * Id
	 * @format uuid4
	 */
	id: string;
	/** Email пользователя */
	email: string;
	/** Имя пользователя */
	name: string;
	/** Логин пользователя */
	login: string;
	/** Аватар пользователя */
	avatar?: string | null;
}

/** ValidationError */
export interface ValidationError {
	/** Location */
	loc: (string | number)[];
	/** Message */
	msg: string;
	/** Error Type */
	type: string;
}

/** VerifyCodeType */
export enum VerifyCodeType {
	Reset = 'reset',
	Update = 'update',
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean;
	/** request path */
	path: string;
	/** content type of request body */
	type?: ContentType;
	/** query params */
	query?: QueryParamsType;
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat;
	/** request body */
	body?: unknown;
	/** base url */
	baseUrl?: string;
	/** request cancellation token */
	cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string;
	baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
	securityWorker?: (
		securityData: SecurityDataType | null
	) => Promise<RequestParams | void> | RequestParams | void;
	customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
	data: D;
	error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
	Json = 'application/json',
	FormData = 'multipart/form-data',
	UrlEncoded = 'application/x-www-form-urlencoded',
	Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = '';
	private securityData: SecurityDataType | null = null;
	private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
	private abortControllers = new Map<CancelToken, AbortController>();
	private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

	private baseApiParams: RequestParams = {
		credentials: 'same-origin',
		headers: {},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	};

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig);
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data;
	};

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key);
		return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key]);
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key];
		return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {};
		const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
		return keys
			.map((key) =>
				Array.isArray(query[key])
					? this.addArrayQueryParam(query, key)
					: this.addQueryParam(query, key)
			)
			.join('&');
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery);
		return queryString ? `?${queryString}` : '';
	}

	private contentFormatters: Record<ContentType, (input: any) => any> = {
		[ContentType.Json]: (input: any) =>
			input !== null && (typeof input === 'object' || typeof input === 'string')
				? JSON.stringify(input)
				: input,
		[ContentType.Text]: (input: any) =>
			input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key];
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === 'object' && property !== null
							? JSON.stringify(property)
							: `${property}`
				);
				return formData;
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
	};

	protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {}),
			},
		};
	}

	protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken);
			if (abortController) {
				return abortController.signal;
			}
			return void 0;
		}

		const abortController = new AbortController();
		this.abortControllers.set(cancelToken, abortController);
		return abortController.signal;
	};

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken);

		if (abortController) {
			abortController.abort();
			this.abortControllers.delete(cancelToken);
		}
	};

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<HttpResponse<T, E>> => {
		const secureParams =
			((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{};
		const requestParams = this.mergeRequestParams(params, secureParams);
		const queryString = query && this.toQueryString(query);
		const payloadFormatter = this.contentFormatters[type || ContentType.Json];
		const responseFormat = format || requestParams.format;

		return this.customFetch(
			`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
			{
				...requestParams,
				headers: {
					...(requestParams.headers || {}),
					...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
				},
				signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
				body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
			}
		).then(async (response) => {
			const r = response.clone() as HttpResponse<T, E>;
			r.data = null as unknown as T;
			r.error = null as unknown as E;

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data;
							} else {
								r.error = data;
							}
							return r;
						})
						.catch((e) => {
							r.error = e;
							return r;
						});

			if (cancelToken) {
				this.abortControllers.delete(cancelToken);
			}

			if (!response.ok) throw data;
			return data;
		});
	};
}

/**
 * @title RPG NOTES BACKEND
 * @version 0.1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
	users = {
		/**
		 * No description
		 *
		 * @tags Users
		 * @name GetSelfUserUsersGetSelfGet
		 * @summary Get Self User
		 * @request GET:/users/get_self/
		 * @secure
		 */
		getSelfUserUsersGetSelfGet: (params: RequestParams = {}) =>
			this.request<UserDTO, any>({
				path: `/users/get_self/`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users
		 * @name GetUserByLoginUsersGetByLoginGet
		 * @summary Get User By Login
		 * @request GET:/users/get_by_login/
		 * @secure
		 */
		getUserByLoginUsersGetByLoginGet: (
			query: {
				/** Login пользователя */
				login: string;
			},
			params: RequestParams = {}
		) =>
			this.request<UserDTO, HTTPValidationError>({
				path: `/users/get_by_login/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Users
		 * @name UpdateUsersUpdatePut
		 * @summary Update
		 * @request PUT:/users/update/
		 * @secure
		 */
		updateUsersUpdatePut: (data: UpdateUserInputDTO, params: RequestParams = {}) =>
			this.request<UserDTO, HTTPValidationError>({
				path: `/users/update/`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),
	};
	auth = {
		/**
		 * No description
		 *
		 * @tags Auth
		 * @name LoginAuthLoginPost
		 * @summary Login
		 * @request POST:/auth/login/
		 */
		loginAuthLoginPost: (data: LoginInputDTO, params: RequestParams = {}) =>
			this.request<TokensOutputDTO, HTTPValidationError>({
				path: `/auth/login/`,
				method: 'POST',
				body: data,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Auth
		 * @name SignupAuthSignupPost
		 * @summary Signup
		 * @request POST:/auth/signup/
		 */
		signupAuthSignupPost: (data: SignupInputDTO, params: RequestParams = {}) =>
			this.request<TokensOutputDTO, HTTPValidationError>({
				path: `/auth/signup/`,
				method: 'POST',
				body: data,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Auth
		 * @name RefreshAuthRefreshPost
		 * @summary Refresh
		 * @request POST:/auth/refresh/
		 */
		refreshAuthRefreshPost: (data: RefreshTokenInputDTO, params: RequestParams = {}) =>
			this.request<TokensOutputDTO, HTTPValidationError>({
				path: `/auth/refresh/`,
				method: 'POST',
				body: data,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Auth
		 * @name SendCodeAuthSendCodePost
		 * @summary Send Code
		 * @request POST:/auth/send_code/
		 */
		sendCodeAuthSendCodePost: (data: RequestVerifyCodeInputDTO, params: RequestParams = {}) =>
			this.request<SuccessDTO, HTTPValidationError>({
				path: `/auth/send_code/`,
				method: 'POST',
				body: data,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Auth
		 * @name PasswordResetAuthPasswordResetPost
		 * @summary Password Reset
		 * @request POST:/auth/password_reset/
		 */
		passwordResetAuthPasswordResetPost: (
			data: RecoveryPasswordInputDTO,
			params: RequestParams = {}
		) =>
			this.request<TokensOutputDTO, HTTPValidationError>({
				path: `/auth/password_reset/`,
				method: 'POST',
				body: data,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Auth, Oauth2
		 * @name OauthUrlAuthOauthUrlGet
		 * @summary Oauth Url
		 * @request GET:/auth/oauth/url/
		 */
		oauthUrlAuthOauthUrlGet: (
			query: {
				/** Тип */
				type: OauthType;
			},
			params: RequestParams = {}
		) =>
			this.request<GetOauthUrlOutputDTO, HTTPValidationError>({
				path: `/auth/oauth/url/`,
				method: 'GET',
				query: query,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Auth, Oauth2
		 * @name FinishOauthVkAuthOauthFinishVkPost
		 * @summary Finish Oauth Vk
		 * @request POST:/auth/oauth/finish/vk/
		 */
		finishOauthVkAuthOauthFinishVkPost: (data: FinishVkOauthInputDTO, params: RequestParams = {}) =>
			this.request<TokensOutputDTO, HTTPValidationError>({
				path: `/auth/oauth/finish/vk/`,
				method: 'POST',
				body: data,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Auth, Oauth2
		 * @name LinkOauthVkAuthOauthLinkVkPost
		 * @summary Link Oauth Vk
		 * @request POST:/auth/oauth/link/vk/
		 * @secure
		 */
		linkOauthVkAuthOauthLinkVkPost: (data: FinishVkOauthInputDTO, params: RequestParams = {}) =>
			this.request<TokensOutputDTO, HTTPValidationError>({
				path: `/auth/oauth/link/vk/`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),
	};
	adventures = {
		/**
		 * No description
		 *
		 * @tags Adventures
		 * @name ListByUserAdventuresListByUserGet
		 * @summary List By User
		 * @request GET:/adventures/list_by_user/
		 * @secure
		 */
		listByUserAdventuresListByUserGet: (params: RequestParams = {}) =>
			this.request<AdventuresListDTO, any>({
				path: `/adventures/list_by_user/`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Adventures
		 * @name GetByIdAdventuresGetByIdGet
		 * @summary Get By Id
		 * @request GET:/adventures/get_by_id/
		 * @secure
		 */
		getByIdAdventuresGetByIdGet: (
			query: {
				/**
				 * Id приключения
				 * @format uuid4
				 */
				adventure_id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<AdventureDTO, HTTPValidationError>({
				path: `/adventures/get_by_id/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Adventures
		 * @name GetByAdventureAdventuresPlayersByAdventureGet
		 * @summary Get By Adventure
		 * @request GET:/adventures/players_by_adventure/
		 * @secure
		 */
		getByAdventureAdventuresPlayersByAdventureGet: (
			query: {
				/**
				 * Приключение
				 * @format uuid4
				 */
				adventure_id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<PlayersByAdventureOutputDTO, HTTPValidationError>({
				path: `/adventures/players_by_adventure/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Adventures
		 * @name CreateAdventuresCreatePost
		 * @summary Create
		 * @request POST:/adventures/create/
		 * @secure
		 */
		createAdventuresCreatePost: (data: CreateAdventureInputDTO, params: RequestParams = {}) =>
			this.request<AdventureDTO, HTTPValidationError>({
				path: `/adventures/create/`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Adventures
		 * @name InviteAdventuresInvitePost
		 * @summary Invite
		 * @request POST:/adventures/invite/
		 * @secure
		 */
		inviteAdventuresInvitePost: (data: InviteToAdventureInputDTO, params: RequestParams = {}) =>
			this.request<PlayersByAdventureOutputDTO, HTTPValidationError>({
				path: `/adventures/invite/`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Adventures
		 * @name DeleteAdventuresDeleteDelete
		 * @summary Delete
		 * @request DELETE:/adventures/delete/
		 * @secure
		 */
		deleteAdventuresDeleteDelete: (data: DeleteAdventureInputDTO, params: RequestParams = {}) =>
			this.request<SuccessDTO, HTTPValidationError>({
				path: `/adventures/delete/`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Adventures
		 * @name DeletePlayerAdventuresDeletePlayerPost
		 * @summary Delete Player
		 * @request POST:/adventures/delete_player/
		 * @secure
		 */
		deletePlayerAdventuresDeletePlayerPost: (
			data: DeletePlayerInputDTO,
			params: RequestParams = {}
		) =>
			this.request<PlayersByAdventureOutputDTO, HTTPValidationError>({
				path: `/adventures/delete_player/`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Adventures
		 * @name UpdateAdventuresUpdatePut
		 * @summary Update
		 * @request PUT:/adventures/update/
		 * @secure
		 */
		updateAdventuresUpdatePut: (data: UpdateAdventureInputDTO, params: RequestParams = {}) =>
			this.request<AdventureDTO, HTTPValidationError>({
				path: `/adventures/update/`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),
	};
	threads = {
		/**
		 * No description
		 *
		 * @tags Threads
		 * @name ListByAdventureThreadsListByAdventureGet
		 * @summary List By Adventure
		 * @request GET:/threads/list_by_adventure/
		 * @secure
		 */
		listByAdventureThreadsListByAdventureGet: (
			query: {
				/**
				 * Id приключения
				 * @format uuid4
				 */
				adventure_id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<ThreadListDTO, HTTPValidationError>({
				path: `/threads/list_by_adventure/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Threads
		 * @name GetByIdThreadsGetByIdGet
		 * @summary Get By Id
		 * @request GET:/threads/get_by_id/
		 * @secure
		 */
		getByIdThreadsGetByIdGet: (
			query: {
				/**
				 * Id пользователя
				 * @format uuid4
				 */
				thread_id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<ThreadDTO, HTTPValidationError>({
				path: `/threads/get_by_id/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Threads
		 * @name CreateThreadsCreatePost
		 * @summary Create
		 * @request POST:/threads/create/
		 * @secure
		 */
		createThreadsCreatePost: (data: CreateThreadInputDTO, params: RequestParams = {}) =>
			this.request<ThreadDTO, HTTPValidationError>({
				path: `/threads/create/`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Threads
		 * @name DeleteThreadsDeleteDelete
		 * @summary Delete
		 * @request DELETE:/threads/delete/
		 * @secure
		 */
		deleteThreadsDeleteDelete: (data: DeleteThreadInputDTO, params: RequestParams = {}) =>
			this.request<SuccessDTO, HTTPValidationError>({
				path: `/threads/delete/`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Threads
		 * @name UpdateThreadsUpdatePut
		 * @summary Update
		 * @request PUT:/threads/update/
		 * @secure
		 */
		updateThreadsUpdatePut: (data: UpdateThreadInputDTO, params: RequestParams = {}) =>
			this.request<ThreadDTO, HTTPValidationError>({
				path: `/threads/update/`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),
	};
	posts = {
		/**
		 * No description
		 *
		 * @tags Posts
		 * @name ListByThreadPostsListByThreadGet
		 * @summary List By Thread
		 * @request GET:/posts/list_by_thread/
		 * @secure
		 */
		listByThreadPostsListByThreadGet: (
			query: {
				/**
				 * Id треда
				 * @format uuid4
				 */
				thread_id: string;
				/**
				 * Количество
				 * @default 10
				 */
				count?: number;
				/**
				 * Шаг
				 * @default 0
				 */
				offset?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<PostListDTO, HTTPValidationError>({
				path: `/posts/list_by_thread/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Posts
		 * @name GetByIdPostsGetByIdGet
		 * @summary Get By Id
		 * @request GET:/posts/get_by_id/
		 * @secure
		 */
		getByIdPostsGetByIdGet: (
			query: {
				/**
				 * Id поста
				 * @format uuid4
				 */
				post_id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<PostDTO, HTTPValidationError>({
				path: `/posts/get_by_id/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Posts
		 * @name GetByAdventurePostsListByAdventureGet
		 * @summary Get By Adventure
		 * @request GET:/posts/list_by_adventure/
		 * @secure
		 */
		getByAdventurePostsListByAdventureGet: (
			query: {
				/**
				 * Id приключения
				 * @format uuid4
				 */
				adventure_id: string;
				/**
				 * Количество
				 * @default 10
				 */
				count?: number;
				/**
				 * Шаг
				 * @default 0
				 */
				offset?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<PostListDTO, HTTPValidationError>({
				path: `/posts/list_by_adventure/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Posts
		 * @name CreatePostsCreatePost
		 * @summary Create
		 * @request POST:/posts/create/
		 * @secure
		 */
		createPostsCreatePost: (data: CreatePostInputDTO, params: RequestParams = {}) =>
			this.request<PostDTO, HTTPValidationError>({
				path: `/posts/create/`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Posts
		 * @name DeletePostsDeleteDelete
		 * @summary Delete
		 * @request DELETE:/posts/delete/
		 * @secure
		 */
		deletePostsDeleteDelete: (data: DeletePostInputDTO, params: RequestParams = {}) =>
			this.request<SuccessDTO, HTTPValidationError>({
				path: `/posts/delete/`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Posts
		 * @name UpdatePostsUpdatePut
		 * @summary Update
		 * @request PUT:/posts/update/
		 * @secure
		 */
		updatePostsUpdatePut: (data: UpdatePostInputDTO, params: RequestParams = {}) =>
			this.request<PostDTO, HTTPValidationError>({
				path: `/posts/update/`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),
	};
	comments = {
		/**
		 * No description
		 *
		 * @tags Comments
		 * @name ListByPostCommentsListByPostGet
		 * @summary List By Post
		 * @request GET:/comments/list_by_post/
		 * @secure
		 */
		listByPostCommentsListByPostGet: (
			query: {
				/**
				 * Id поста
				 * @format uuid4
				 */
				post_id: string;
				/**
				 * Количество
				 * @default 10
				 */
				count?: number;
				/**
				 * Шаг
				 * @default 0
				 */
				offset?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<CommentListDTO, HTTPValidationError>({
				path: `/comments/list_by_post/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Comments
		 * @name CreateCommentsCreatePost
		 * @summary Create
		 * @request POST:/comments/create/
		 * @secure
		 */
		createCommentsCreatePost: (data: CreateCommentInputDTO, params: RequestParams = {}) =>
			this.request<CommentDTO, HTTPValidationError>({
				path: `/comments/create/`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Comments
		 * @name DeleteCommentsDeleteDelete
		 * @summary Delete
		 * @request DELETE:/comments/delete/
		 * @secure
		 */
		deleteCommentsDeleteDelete: (data: DeleteCommentInputDTO, params: RequestParams = {}) =>
			this.request<SuccessDTO, HTTPValidationError>({
				path: `/comments/delete/`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Comments
		 * @name UpdateCommentsUpdatePut
		 * @summary Update
		 * @request PUT:/comments/update/
		 * @secure
		 */
		updateCommentsUpdatePut: (data: UpdateCommentInputDTO, params: RequestParams = {}) =>
			this.request<CommentDTO, HTTPValidationError>({
				path: `/comments/update/`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),
	};
	media = {
		/**
		 * No description
		 *
		 * @tags Media
		 * @name UploadMediaUploadPost
		 * @summary Upload
		 * @request POST:/media/upload/
		 * @secure
		 */
		uploadMediaUploadPost: (data: BodyUploadMediaUploadPost, params: RequestParams = {}) =>
			this.request<UploadFileOutputDTO, HTTPValidationError>({
				path: `/media/upload/`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.FormData,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Media
		 * @name GetMediaGetGet
		 * @summary Get
		 * @request GET:/media/get/
		 */
		getMediaGetGet: (
			query: {
				/**
				 * id файла
				 * @format uuid4
				 */
				id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<any, HTTPValidationError>({
				path: `/media/get/`,
				method: 'GET',
				query: query,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Media
		 * @name DeleteMediaDeleteDelete
		 * @summary Delete
		 * @request DELETE:/media/delete/
		 * @secure
		 */
		deleteMediaDeleteDelete: (
			query: {
				/**
				 * id файла
				 * @format uuid4
				 */
				id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<SuccessDTO, HTTPValidationError>({
				path: `/media/delete/`,
				method: 'DELETE',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),
	};
	heroes = {
		/**
		 * No description
		 *
		 * @tags Heroes
		 * @name ListForUserByAdventureHeroesListForUserByAdventureGet
		 * @summary List For User By Adventure
		 * @request GET:/heroes/list_for_user_by_adventure/
		 * @secure
		 */
		listForUserByAdventureHeroesListForUserByAdventureGet: (
			query: {
				/**
				 * Adventure Id
				 * Приключение
				 * @format uuid4
				 */
				adventure_id: string;
				/**
				 * User Id
				 * Пользователь
				 * @format uuid4
				 */
				user_id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<HeroesDTO, HTTPValidationError>({
				path: `/heroes/list_for_user_by_adventure/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Heroes
		 * @name CreateHeroesCreatePost
		 * @summary Create
		 * @request POST:/heroes/create/
		 * @secure
		 */
		createHeroesCreatePost: (data: CreateHeroInputDTO, params: RequestParams = {}) =>
			this.request<HeroWithCharacteristicsDTO, HTTPValidationError>({
				path: `/heroes/create/`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Heroes
		 * @name GetByIdHeroesGetByIdGet
		 * @summary Get By Id
		 * @request GET:/heroes/get_by_id/
		 * @secure
		 */
		getByIdHeroesGetByIdGet: (
			query: {
				/**
				 * Hero Id
				 * Герой
				 * @format uuid4
				 */
				hero_id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<HeroWithCharacteristicsDTO, HTTPValidationError>({
				path: `/heroes/get_by_id/`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Heroes
		 * @name UpdateHeroesUpdatePut
		 * @summary Update
		 * @request PUT:/heroes/update/
		 * @secure
		 */
		updateHeroesUpdatePut: (data: UpdateHeroInputDTO, params: RequestParams = {}) =>
			this.request<HeroWithCharacteristicsDTO, HTTPValidationError>({
				path: `/heroes/update/`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params,
			}),
	};
}
