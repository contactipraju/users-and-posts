import store from './../../store/store';
import { updateSelectedUser } from "../../store/actions";

import { IUserInfo } from '../../Users.interfaces';

import './Users.scss';

function Users({filteredUsers}: any) {
	return (
		<div id="filtered-users">
			{
				filteredUsers && filteredUsers.length > 0 && 
				<div className="users">
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>City</th>
								<th>Company</th>
							</tr>
						</thead>
						<tbody>
						{
							filteredUsers.map((user: IUserInfo, index: number) => (
								<tr key={user.id} onClick={() => store.dispatch(updateSelectedUser(user))}>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.address.city}</td>
									<td>{user.company.name}</td>
								</tr>
							))
						}
						</tbody>
					</table>
				</div>
			}
		</div>
	)
}

export default Users;
