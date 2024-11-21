import {
	AdventureDTO,
	AdventuresListDTO,
	BodyUploadMediaUploadPost,
	CommentDTO,
	CommentListDTO,
	CreateAdventureInputDTO,
	CreateCommentInputDTO,
	CreateHeroInputDTO,
	CreatePostInputDTO,
	CreateThreadInputDTO,
	DeleteAdventureInputDTO,
	DeleteCommentInputDTO,
	DeletePlayerInputDTO,
	DeletePostInputDTO,
	DeleteThreadInputDTO,
	HeroesDTO,
	HeroWithCharacteristicsDTO,
	InviteToAdventureInputDTO,
	LoginInputDTO,
	PlayersByAdventureOutputDTO,
	PostDTO,
	PostListDTO,
	RecoveryPasswordInputDTO,
	RequestVerifyCodeInputDTO,
	SignupInputDTO,
	SuccessDTO,
	ThreadDTO,
	ThreadListDTO,
	TokensOutputDTO,
	UpdateAdventureInputDTO,
	UpdateCommentInputDTO,
	UpdateHeroInputDTO,
	UpdatePostInputDTO,
	UpdateThreadInputDTO,
	UpdateUserInputDTO,
	UploadFileOutputDTO,
	UserDTO,
} from '@utils-types';
import { request, requestWithRefresh } from './request';

export const registerUserApi = (data: SignupInputDTO) =>
	request<SignupInputDTO, TokensOutputDTO>({
		method: 'post',
		url: '/auth/signup',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const loginUserApi = (data: LoginInputDTO): Promise<TokensOutputDTO> =>
	request<LoginInputDTO, TokensOutputDTO>({
		method: 'post',
		url: '/auth/login',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getUserApi = () =>
	requestWithRefresh<{}, UserDTO>({
		method: 'get',
		url: '/users/get_self',
	});

export const getUserByLoginApi = (login: string) =>
	requestWithRefresh<{ login: string }, UserDTO>({
		method: 'get',
		url: '/users/get_by_login',
		params: {
			login,
		},
	});

export const updateUserApi = (data: UpdateUserInputDTO) =>
	requestWithRefresh<UpdateUserInputDTO, UserDTO>({
		method: 'put',
		url: '/users/update',
		data,
	});

export const sendCodeApi = (data: RequestVerifyCodeInputDTO) =>
	request<RequestVerifyCodeInputDTO, SuccessDTO>({
		method: 'post',
		url: '/auth/send_code',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const resetPasswordApi = (data: RecoveryPasswordInputDTO) =>
	request<RecoveryPasswordInputDTO, TokensOutputDTO>({
		method: 'post',
		url: '/auth/password_reset',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getUserAdventuresApi = () =>
	requestWithRefresh<{}, AdventuresListDTO>({
		method: 'get',
		url: '/adventures/list_by_user',
	});

export const createAdventureApi = (data: CreateAdventureInputDTO) =>
	requestWithRefresh<CreateAdventureInputDTO, AdventureDTO>({
		method: 'post',
		url: '/adventures/create',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getAdventureApi = (adventure_id: string) =>
	requestWithRefresh<{ adventure_id: string }, AdventureDTO>({
		method: 'get',
		url: '/adventures/get_by_id',
		params: {
			adventure_id,
		},
	});

export const inviteUserInAdventureApi = (data: InviteToAdventureInputDTO) =>
	requestWithRefresh<InviteToAdventureInputDTO, PlayersByAdventureOutputDTO>({
		method: 'post',
		url: '/adventures/invite',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const deleteUserInAdventureApi = (data: DeletePlayerInputDTO) =>
	requestWithRefresh<DeletePlayerInputDTO, PlayersByAdventureOutputDTO>({
		method: 'post',
		url: '/adventures/delete_player',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getAdventureUsersApi = (adventure_id: string) =>
	requestWithRefresh<{ adventure_id: string }, PlayersByAdventureOutputDTO>({
		method: 'get',
		url: '/adventures/players_by_adventure',
		params: {
			adventure_id,
		},
	});

export const updateAdventureApi = (data: UpdateAdventureInputDTO) =>
	requestWithRefresh<UpdateAdventureInputDTO, AdventureDTO>({
		method: 'put',
		url: '/adventures/update',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const deleteAdventureApi = (data: DeleteAdventureInputDTO) =>
	requestWithRefresh<DeleteAdventureInputDTO, SuccessDTO>({
		method: 'delete',
		url: '/adventures/delete',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const createThreadApi = (data: CreateThreadInputDTO) =>
	requestWithRefresh<CreateThreadInputDTO, ThreadDTO>({
		method: 'post',
		url: '/threads/create',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getThreadsByAdventureApi = (adventure_id: string) =>
	requestWithRefresh<{ adventure_id: string }, ThreadListDTO>({
		method: 'get',
		url: '/threads/list_by_adventure',
		params: {
			adventure_id,
		},
	});

export const getThreadApi = (thread_id: string) =>
	requestWithRefresh<{ thread_id: string }, ThreadDTO>({
		method: 'get',
		url: '/threads/get_by_id',
		params: {
			thread_id,
		},
	});

export const updateThreadApi = (data: UpdateThreadInputDTO) =>
	requestWithRefresh<UpdateThreadInputDTO, ThreadDTO>({
		method: 'put',
		url: '/threads/update',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const deleteThreadApi = (data: DeleteThreadInputDTO) =>
	requestWithRefresh<DeleteThreadInputDTO, SuccessDTO>({
		method: 'delete',
		url: '/threads/delete',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const createPostApi = (data: CreatePostInputDTO) =>
	requestWithRefresh<CreatePostInputDTO, PostDTO>({
		method: 'post',
		url: '/posts/create',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getPostsByThreadApi = ({ thread_id, offset }: { thread_id: string; offset: number }) =>
	requestWithRefresh<{ thread_id: string; count: number; offset: number }, PostListDTO>({
		method: 'get',
		url: '/posts/list_by_thread',
		params: {
			thread_id,
			count: 20,
			offset,
		},
	});

export const getPostsByAdventureApi = ({
	thread_id,
	offset,
}: {
	thread_id: string;
	offset: number;
}) =>
	requestWithRefresh<{ thread_id: string; count: number; offset: number }, PostListDTO>({
		method: 'get',
		url: '/posts/list_by_adventure',
		params: {
			thread_id,
			count: 20,
			offset,
		},
	});

export const getPostApi = (post_id: string) =>
	requestWithRefresh<{ post_id: string }, PostDTO>({
		method: 'get',
		url: '/posts/get_by_id',
		params: {
			post_id,
		},
	});

export const updatePostApi = (data: UpdatePostInputDTO) =>
	requestWithRefresh<UpdatePostInputDTO, PostDTO>({
		method: 'put',
		url: '/posts/update',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const deletePostApi = (data: DeletePostInputDTO) =>
	requestWithRefresh<DeletePostInputDTO, SuccessDTO>({
		method: 'delete',
		url: '/posts/delete',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const createCommentApi = (data: CreateCommentInputDTO) =>
	requestWithRefresh<CreateCommentInputDTO, CommentDTO>({
		method: 'post',
		url: '/comments/create',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getCommentsByPostApi = ({ post_id, offset }: { post_id: string; offset: number }) =>
	requestWithRefresh<{ post_id: string; count: number; offset: number }, CommentListDTO>({
		method: 'get',
		url: '/comments/list_by_post',
		params: {
			post_id,
			count: 20,
			offset,
		},
	});

export const updateCommentApi = (data: UpdateCommentInputDTO) =>
	requestWithRefresh<UpdateCommentInputDTO, CommentDTO>({
		method: 'put',
		url: '/comments/update',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const deleteCommentApi = (data: DeleteCommentInputDTO) =>
	requestWithRefresh<DeleteCommentInputDTO, SuccessDTO>({
		method: 'delete',
		url: '/comments/delete',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getImageApi = (id: string) =>
	requestWithRefresh<{ id: string }, any>({
		method: 'get',
		url: '/media/get',
		params: {
			id,
		},
	});

export const uploadImageApi = (data: BodyUploadMediaUploadPost) =>
	requestWithRefresh<BodyUploadMediaUploadPost, UploadFileOutputDTO>({
		method: 'post',
		url: '/media/upload',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const deleteImageApi = (id: string) =>
	requestWithRefresh<{ id: string }, SuccessDTO>({
		method: 'delete',
		url: '/media/delete',
		params: {
			id,
		},
	});

export const createHeroApi = (data: CreateHeroInputDTO) =>
	requestWithRefresh<CreateHeroInputDTO, HeroWithCharacteristicsDTO>({
		method: 'post',
		url: '/heroes/create',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getHeroesByAdventureAndUserApi = ({
	adventure_id,
	user_id,
}: {
	adventure_id: string;
	user_id: string;
}) =>
	requestWithRefresh<{ adventure_id: string; user_id: string }, HeroesDTO>({
		method: 'get',
		url: '/heroes/list_for_user_by_adventure',
		params: {
			adventure_id,
			user_id,
		},
	});

export const updateHeroApi = (data: UpdateHeroInputDTO) =>
	requestWithRefresh<UpdateHeroInputDTO, HeroWithCharacteristicsDTO>({
		method: 'put',
		url: '/heroes/update',
		data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getHeroByIdApi = (hero_id: string) =>
	requestWithRefresh<{ hero_id: string }, HeroWithCharacteristicsDTO>({
		method: 'delete',
		url: '/comments/delete',
		params: {
			hero_id,
		},
	});
