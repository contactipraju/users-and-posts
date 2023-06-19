import store from './../../store/store';
import { updateSelectedUser } from '../../store/actions';

import { IUserInfo } from '../../Users.interfaces';

import './Users.scss';

function Users({filteredUsers}: any) {
	return (
		<div id='filtered-users'>
			{
				filteredUsers && filteredUsers.length > 0 && 
				<div className='users'>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Username</th>
								<th>Email</th>
								<th>Full Address</th>
								<th>Company</th>
								<th>Website</th>
							</tr>
						</thead>
						<tbody>
						{
							filteredUsers.map((user: IUserInfo, index: number) => (
								<tr key={user.id} onClick={() => store.dispatch(updateSelectedUser(user))}>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.address.suite}, {user.address.city}, {user.address.zipcode}</td>
									<td>{user.company.name}</td>
									<td>{user.website}</td>
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
