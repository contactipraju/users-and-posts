import { createStore } from "redux";

import userReducer   from "./users.reducer";
import { IUserInfo } from '../Users.interfaces';

export interface IStore {
	users?: IUserInfo[];
	selectedUser?: IUserInfo;
};

const store = createStore(userReducer);

export default store;
