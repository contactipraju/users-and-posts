import { createStore } from "redux";

import reducer from "./users.reducer";
import { IUserInfo } from '../Users.interfaces';

export interface IStore {
	users?: IUserInfo[];
};

const store = createStore(reducer);

export default store;
