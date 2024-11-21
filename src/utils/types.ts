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
	/**
	 * Аватарка
	 * @format uuid4
	 */
	image: string;
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
	avatar?: string | null;
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
	avatar?: string | null;
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
	/**
	 * Аватарка
	 * @format uuid4
	 */
	image: string;
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
