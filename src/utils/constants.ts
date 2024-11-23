export const userSliceConst = {
	name: 'user',
	requests: {
		login: 'login',
		register: 'register',
		byToken: 'getByToken',
		update: 'updateUser',
		sendCode: 'sendCode',
		reset: 'resetPassword',
	},
};

export const adventuresSliceConst = {
	name: 'adventures',
	requests: {
		byUser: 'getAdventures',
		create: 'create',
		byId: 'getById',
		update: 'update',
		delete: 'delete',
	},
};

export const threadsSliceConst = {
	name: 'threads',
	requests: {
		create: 'create',
		byAdventure: 'getByAdventure',
		byId: 'getById',
		update: 'update',
		delete: 'delete',
	},
};

export const postsSliceConst = {
	name: 'posts',
	requests: {
		create: 'create',
		byThread: 'getByThread',
		byAdventure: 'getByAdventure',
		byId: 'getById',
		update: 'update',
		delete: 'delete',
	},
};

export const commentsSliceConst = {
	name: 'comments',
	requests: {
		create: 'create',
		byPost: 'getByPost',
		update: 'update',
		delete: 'delete',
	},
};

export const playersSliceConst = {
	name: 'players',
	requests: {
		byLogin: 'getByLogin',
		invite: 'inviteUser',
		byAdventure: 'getByAdventure',
		delete: 'delete',
	},
};

export const heroesSliceConst = {
	name: 'heroes',
	requests: {
		create: 'create',
		byAdventure: 'getByAdventure',
		update: 'update',
		byId: 'getById',
	},
};
