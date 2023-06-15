export enum EUserActions {
	LOAD_USERS = 'Load_Users',
	UPDATE_SELECTED_USER = 'Update_Selected_User',
	LOAD_POSTS = 'Load_Posts'
}

export interface UserActions {
	type: EUserActions.LOAD_USERS | EUserActions.UPDATE_SELECTED_USER | EUserActions.LOAD_POSTS;
	payload: any;
}
