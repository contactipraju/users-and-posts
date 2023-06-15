import { IStore } from "./store";
import { UserActions, EUserActions } from "./actionTypes";

export default function userReducer(state: IStore = {}, action: UserActions): IStore {
	switch(action.type) {
		case EUserActions.LOAD_USERS:
			return {
				...state,
				users: action.payload
			}

		case EUserActions.UPDATE_SELECTED_USER:
			return {
				...state,
				selectedUser: action.payload
			};

		default:
			// Just return the original state
			return state;
	}
}