import { useState, useEffect } from "react";

import { getUsers } from "./Users.service";

import Users from './components/Users/Users';

import './UsersPage.scss';

function UsersPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then((resp) => {
			setUsers(resp);
		})
	}, []);

	return (
		<div id="users-page">
			<Users users={users}/>
		</div>
	);
}

export default UsersPage;
