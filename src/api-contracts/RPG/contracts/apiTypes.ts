import { z } from 'zod';

// Типизация ответов и запросов к API

export const headers = z.object({
	authorization: z.string(),
});

export const stringId = z.string().nanoid();

export const empty = z.object({});

export const serverResponse = {
	success: z.boolean(),
};

export const noContentServerResponse = z.object(serverResponse);

export const serverErrorResponse = z.object({
	success: z.boolean(),
	message: z.string(),
	details: z.object({}).passthrough().optional(),
});

export const userData = z.object({
	email: z.string().email(),
	password: z.string(),
	name: z.string(),
});

export const registerData = userData;

export const loginData = z.object({
	email: z.string().email(),
	password: z.string(),
});

export const logoutData = z.object({
	refreshToken: z.string(),
});

export const user = z.object({
	id: z.string(),
	email: z.string().email(),
	name: z.string(),
});

export const authResponse = z.object({
	...serverResponse,
	refreshToken: z.string(),
	accessToken: z.string(),
	user: user,
});

export const userUpdateData = z.object(userData.shape).partial();

export const refreshRequestBody = z.object({
	token: z.string(), // refreshToken
});

export const refreshResponse = z.object({
	...serverResponse,
	accessToken: z.string(),
	refreshToken: z.string(),
});

export const passwordResetRequestData = z.object({
	email: z.string().email(),
});

export const passwordResetData = z.object({
	password: z.string(),
	token: z.string(),
});

export const passwordResetResponse = z.object({
	...serverResponse,
});

export const character = z.object({
	id: z.string().nanoid(),
	name: z.string(),
	description: z.string().length(300),
	image: z.string().url(),
	createdAt: z.string().date(),
	updatedAt: z.string().date(),
	creator: user,
	adventure: z.string().nanoid(),
});

export const adventure = z.object({
	id: z.string().nanoid(),
	title: z.string().length(50),
	description: z.string().length(300),
	text: z.string(),
	creator: user,
	createdAt: z.string().date(),
	updatedAt: z.string().date(),
	image: z.string().url(),
	characters: z.array(character),
});

export const adventureCreateUpdateData = z.object({
	title: z.string().length(50),
	description: z.string().length(300),
	text: z.string(),
	image: z.string().url(),
});
export const adventureCreateData = adventureCreateUpdateData;

export const adventureUpdateData = z
	.object(adventureCreateUpdateData.shape)
	.partial();

export const inviteData = z.object({
	userId: z.string().nanoid(),
});

export const adventureResponse = z.object({
	...serverResponse,
	adventure: adventure,
});

export const adventureListResponse = z.object({
	...serverResponse,
	adventures: z.array(adventure),
});

export const characterCreateUpdateData = z.object({
	name: z.string(),
	origin: z.string().optional(),
	race: z.string().optional(),
	gender: z.string().optional(),
	age: z.number().optional(),
	appearance: z.string().optional(),
	temper: z.string().optional(),
	description: z.string().length(300),
	image: z.string().url(),
});

export const characterCreateData = characterCreateUpdateData;
export const characterUpdateData = z
	.object(characterCreateUpdateData.shape)
	.partial();

export const characterResponse = z.object({
	...serverResponse,
	character: character,
});

export const characterListResponse = z.object({
	...serverResponse,
	characters: z.array(character),
});
export const comment = z.object({
	id: z.string().nanoid(),
	post: z.string().nanoid(),
	creator: character,
	text: z.string(),
	image: z.string().url(),
	createdAt: z.string().date(),
	updatedAt: z.string().date(),
});

export const post = z.object({
	id: z.string().nanoid(),
	thread: z.string().nanoid(),
	title: z.string().length(50),
	description: z.string().length(300),
	creator: character,
	createdAt: z.string().date(),
	updatedAt: z.string().date(),
	image: z.string().url(),
	comments: z.array(comment),
	likes: z.array(character),
	disLikes: z.array(character),
	tags: z.array(z.string().length(20)).length(10),
});

export const thread = z.object({
	id: z.string().nanoid(),
	title: z.string().length(50),
	description: z.string().length(300),
	image: z.string().url(),
	creator: character,
	createdAt: z.string().date(),
	updatedAt: z.string().date(),
	posts: z.array(post),
	private: z.boolean(),
	watchers: z.array(character),
});

export const threadCreateUpdateData = z.object({
	title: z.string().length(50),
	description: z.string().length(300),
	image: z.string().url(),
});

export const threadCreateData = threadCreateUpdateData;

export const threadUpdateData = z
	.object(threadCreateUpdateData.shape)
	.partial();

export const threadResponse = z.object({
	...serverResponse,
	thread: thread,
});

export const threadListResponse = z.object({
	...serverResponse,
	threads: z.array(thread),
});

export const postCreateUpdateData = z.object({
	title: z.string().length(50),
	description: z.string().length(300),
	image: z.string().url(),
	text: z.string(),
	tags: z.array(z.string().length(20)).length(10),
});

export const postCreateData = postCreateUpdateData;

export const postUpdateData = z.object(postCreateUpdateData.shape).partial();

export const postResponse = z.object({
	...serverResponse,
	post: post,
});

export const postListResponse = z.object({
	...serverResponse,
	posts: z.array(post),
});

export const commentCreateUpdateData = z.object({
	text: z.string(),
	image: z.string().url(),
});

export const commentCreateData = commentCreateUpdateData;
export const commentUpdateData = z
	.object(commentCreateUpdateData.shape)
	.partial();

export const commentResponse = z.object({
	...serverResponse,
	comment: comment,
});

export const commentListResponse = z.object({
	...serverResponse,
	comments: z.array(comment),
});
