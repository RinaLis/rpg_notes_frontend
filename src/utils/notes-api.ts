import {
	AdventureDTO,
	AdventuresListDTO,
	BodyUploadMediaUploadPost,
	CommentDTO,
	CommentListDTO,
	CreateAdventureInputDTO,
	CreateCommentInputDTO,
	CreatePostInputDTO,
	CreateThreadInputDTO,
	DeleteAdventureInputDTO,
	DeleteCommentInputDTO,
	DeletePlayerInputDTO,
	DeletePostInputDTO,
	DeleteThreadInputDTO,
	InviteToAdventureInputDTO,
	LoginInputDTO,
	PlayersByAdventureOutputDTO,
	PostDTO,
	PostListDTO,
	RequestVerifyCodeInputDTO,
	SignupInputDTO,
	SuccessDTO,
	ThreadDTO,
	ThreadListDTO,
	TokensOutputDTO,
	UpdateAdventureInputDTO,
	UpdateCommentInputDTO,
	UpdatePostInputDTO,
	UpdateThreadInputDTO,
	UpdateUserInputDTO,
	UploadFileOutputDTO,
	UserDTO,
} from './api-client';
import { request, requestWithRefresh } from './request';

// async function getSongs(): Promise<> {
//     // try {
//     const url = "https://be-ask.tanaypratap.repl.co/playlist";
//     const response = await axios.get<Playlist>(url);
//     return response.data.songs;

//     export const getUserApi = () =>
//         fetchWithRefresh<TUserData>(`auth/user`, {
//           headers: {
//             authorization: getCookie('accessToken')
//           } as HeadersInit
//

export const registerUserApi = (data: SignupInputDTO) =>
	request<SignupInputDTO, TokensOutputDTO>({
		method: 'post',
		url: '/auth/signup',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const loginUserApi = (data: LoginInputDTO): Promise<TokensOutputDTO> =>
	request<LoginInputDTO, TokensOutputDTO>({
		method: 'post',
		url: '/auth/login',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getUserApi = () =>
	requestWithRefresh<{}, UserDTO>({
		method: 'get',
		url: '/users/get_self'
	});

export const getUserByLoginApi = (login: string) =>
	requestWithRefresh<{ login: string }, UserDTO>({
		method: 'get',
		url: '/users/get_by_login',
		params: {
			login: login,
		}
	});

export const updateUserApi = (data: UpdateUserInputDTO) =>
	requestWithRefresh<UpdateUserInputDTO, UserDTO>({
		method: 'put',
		url: '/users/update',
		data: data
	});

export const sendCodeApi = (data: RequestVerifyCodeInputDTO) =>
	request<RequestVerifyCodeInputDTO, SuccessDTO>({
		method: 'post',
		url: '/auth/send_code',
		data: data,
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
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getAdventureApi = (id: string) =>
	requestWithRefresh<{adventure_id: string}, AdventureDTO>({
		method: 'get',
		url: '/adventures/get_by_id',
		params: {
			adventure_id: id,
		},
	});

export const inviteUserInAdventureApi = (data: InviteToAdventureInputDTO) =>
	requestWithRefresh<InviteToAdventureInputDTO, PlayersByAdventureOutputDTO>({
		method: 'post',
		url: '/adventures/invite',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const deleteUserInAdventureApi = (data: DeletePlayerInputDTO) =>
	requestWithRefresh<DeletePlayerInputDTO, PlayersByAdventureOutputDTO>({
		method: 'post',
		url: '/adventures/delete_player',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getAdventureUsersApi = (id: string) =>
	requestWithRefresh<{adventure_id: string}, PlayersByAdventureOutputDTO>({
		method: 'get',
		url: '/adventures/players_by_adventure',
		params: {
			adventure_id: id,
		},
	});

export const updateAdventureApi = (data: UpdateAdventureInputDTO) =>
	requestWithRefresh<UpdateAdventureInputDTO, AdventureDTO>({
		method: 'put',
		url: '/adventures/update',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const deleteAdventureApi = (data: DeleteAdventureInputDTO) =>
	requestWithRefresh<DeleteAdventureInputDTO, SuccessDTO>({
		method: 'delete',
		url: '/adventures/delete',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const createThreadApi = (data: CreateThreadInputDTO) =>
	requestWithRefresh<CreateThreadInputDTO, ThreadDTO>({
		method: 'post',
		url: '/threads/create',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});
	
export const getThreadsByAdventureApi = (id: string) =>
	requestWithRefresh<{adventure_id: string}, ThreadListDTO>({
		method: 'get',
		url: '/threads/list_by_adventure',
		params: {
			adventure_id: id,
		},
	});

export const getThreadApi = (id: string) =>
	requestWithRefresh<{thread_id: string}, ThreadDTO>({
		method: 'get',
		url: '/threads/get_by_id',
		params: {
			thread_id: id,
		},
	});
	
export const updateThreadApi = (data: UpdateThreadInputDTO) =>
	requestWithRefresh<UpdateThreadInputDTO, ThreadDTO>({
		method: 'put',
		url: '/threads/update',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});
	
export const deleteThreadApi = (data: DeleteThreadInputDTO) =>
	requestWithRefresh<DeleteThreadInputDTO, SuccessDTO>({
		method: 'delete',
		url: '/threads/delete',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const createPostApi = (data: CreatePostInputDTO) =>
	requestWithRefresh<CreatePostInputDTO, PostDTO>({
		method: 'post',
		url: '/posts/create',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});
	
export const getPostsByThreadApi = ({id, offset}: {id: string, offset: number}) =>
	requestWithRefresh<{id: string, count: number, offset: number}, PostListDTO>({
		method: 'get',
		url: '/posts/list_by_thread',
		params: {
			thread_id: id,
			count: 20,
			offset: offset
		},
	});

export const getPostsByAdventureApi = ({id, offset}: {id: string, offset: number}) =>
	requestWithRefresh<{id: string, count: number, offset: number}, PostListDTO>({
		method: 'get',
		url: '/posts/list_by_adventure',
		params: {
			thread_id: id,
			count: 20,
			offset: offset
		},
	});

export const getPostApi = (id: string) =>
	requestWithRefresh<{post_id: string}, PostDTO>({
		method: 'get',
		url: '/posts/get_by_id',
		params: {
			post_id: id,
		},
	});
	
export const updatePostApi = (data: UpdatePostInputDTO) =>
	requestWithRefresh<UpdatePostInputDTO, PostDTO>({
		method: 'put',
		url: '/posts/update',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});
	
export const deletePostApi = (data: DeletePostInputDTO) =>
	requestWithRefresh<DeletePostInputDTO, SuccessDTO>({
		method: 'delete',
		url: '/posts/delete',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const createCommentApi = (data: CreateCommentInputDTO) =>
	requestWithRefresh<CreateCommentInputDTO, CommentDTO>({
		method: 'post',
		url: '/comments/create',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});
	
export const getCommentsByPostApi = ({id, offset}: {id: string, offset: number}) =>
	requestWithRefresh<{id: string, count: number, offset: number}, CommentListDTO>({
		method: 'get',
		url: '/comments/list_by_post',
		params: {
			post_id: id,
			count: 20,
			offset: offset
		},
	});

export const updateCommentApi = (data: UpdateCommentInputDTO) =>
	requestWithRefresh<UpdateCommentInputDTO, CommentDTO>({
		method: 'put',
		url: '/comments/update',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});
	
export const deleteCommentApi = (data: DeleteCommentInputDTO) =>
	requestWithRefresh<DeleteCommentInputDTO, SuccessDTO>({
		method: 'delete',
		url: '/comments/delete',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});

export const getImageApi = (id: string) =>
	requestWithRefresh<{id: string}, any>({
		method: 'get',
		url: '/media/get',
		params: {
			id: id,
		},
	});

export const uploadImageApi = (data: BodyUploadMediaUploadPost) =>
	requestWithRefresh<BodyUploadMediaUploadPost, UploadFileOutputDTO>({
		method: 'post',
		url: '/media/upload',
		data: data,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	});
	
export const deleteImageApi = (id: string) =>
	requestWithRefresh<{id: string}, SuccessDTO>({
		method: 'delete',
		url: '/media/delete',
		params: {
			id: id,
		},
	});