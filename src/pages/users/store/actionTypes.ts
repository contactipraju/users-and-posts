export enum EUserActions {
	LOAD_USERS = 'Load_Users',
	LOAD_POSTS = 'Load_Posts'
}

export interface UserActions {
	type: EUserActions.LOAD_USERS | EUserActions.LOAD_POSTS;
	payload: any;
}
