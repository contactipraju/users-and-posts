import { useState, useEffect } from "react";

import { getUsers } from "./Users.service";

import Users from './components/Users/Users';
import NameSearch from "./components/NameSearch/NameSearch";

import './UsersPage.scss';

function UsersPage() {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);

	useEffect(() => {
		getUsers().then(resp => {
			setUsers(resp);
			return resp;
		}).then(resp => {
			setFilteredUsers(resp);
		});
	}, []);

	return (
		<div id="users-page">
			<NameSearch users={users} setFilteredUsers={setFilteredUsers} />
			<Users users={filteredUsers}/>
		</div>
	);
}

export default UsersPage;
