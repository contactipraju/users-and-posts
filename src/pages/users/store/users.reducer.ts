import { IStore } from "./store";
import { UserActions, EUserActions } from "./actionTypes";

export default function reducer(state: IStore = {}, action: UserActions): IStore {
	switch(action.type) {
		case EUserActions.LOAD_USERS:
			return {
				...state,
				users: action.payload
			}

		case EUserActions.LOAD_POSTS:
			// TODO: 
			return state;

		default:
			// Just return the original state
			return state;
	}
}