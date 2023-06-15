import { IUserInfo } from "../Users.interfaces";
import { EUserActions } from "./actionTypes";

export const loadUsers = (users: IUserInfo) => ({
	type: EUserActions.LOAD_USERS,
	payload: users
});
