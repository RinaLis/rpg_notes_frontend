export * as apiTypes from './apiTypes';
import auth from './authContract';
import unAuth from './unAuthContract';
import adventure from './adventureContract';
import adventureCharacter from './adventureCharacterContract';
import adventureThread from './adventureTheadContract';
import character from './characterContract';
import post from './postContract';
import thread from './threadContract';
import comment from './commentContract';
import inviteContract from './adventureInviteContract';

// Сборка всех контрактов в один объект
export default {
	'Auth Unauthorized': unAuth,
	Auth: auth,
	Adventure: adventure,
	'Adventure Character': adventureCharacter,
	'Adventure Thread': adventureThread,
	'Adventure Invite': inviteContract,
	Character: character,
	Thread: thread,
	Post: post,
	Comment: comment,
};
