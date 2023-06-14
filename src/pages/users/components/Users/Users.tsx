import './Users.scss';

import { IUserInfo } from '../../Users.interfaces';

function Users(props: any) {

	return (
		<div id="users-and-posts">
			{
				props.users && props.users.length > 0 && 
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
							props.users.map((user: IUserInfo, index: number) => (
								<tr key={user.id}>
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
