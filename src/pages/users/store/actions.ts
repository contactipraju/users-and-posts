import { IUserInfo } from "../Users.interfaces";
import { EUserActions } from "./actionTypes";

export const loadUsers = (users: IUserInfo[]) => ({
	type: EUserActions.LOAD_USERS,
	payload: users
});

export const updateSelectedUser = (user: IUserInfo) => ({
	type: EUserActions.UPDATE_SELECTED_USER,
	payload: user
});
