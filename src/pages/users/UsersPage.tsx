import { useState, useEffect } from "react";
import { Provider } from "react-redux";

import store from './store/store';
import { getUsers } from "./Users.service";

import Users from './components/Users/Users';
import NameSearch from "./components/NameSearch/NameSearch";

import './UsersPage.scss';
import { loadUsers } from "./store/actions";

function UsersPage() {
	const [filteredUsers, setFilteredUsers] = useState([]);

	// Load all users once, store them in the global store, and provide them to all components under this page
	useEffect(() => {
		getUsers().then(resp => {
			store.dispatch(loadUsers(resp));
			return resp;
		}).then(resp => {
			setFilteredUsers(resp);
		});
	}, []);

	return (
		<Provider store={store}>
			<div id="users-page">
				<NameSearch setFilteredUsers={setFilteredUsers} />
				<Users filteredUsers={filteredUsers}/>
			</div>
		</Provider>

	);
}

export default UsersPage;
