import './Users.scss';

import { useState, useEffect } from "react";

import { IPostInfo, IUserInfo } from '../../Users.interfaces';
import { getPosts } from '../../Users.service';

function Users({users}: any) {
	const [posts, setPosts] = useState([]);
	const [selectedUser, setSelectedUser] = useState(-1);

	useEffect(() => {
		if (selectedUser >= 0) {
			getPosts(selectedUser).then((resp) => {
				console.log(`loaded posts for: ${selectedUser}`, resp);
				setPosts(resp);
			})
		}
	}, [selectedUser]);

	return (
		<div id="users-and-posts">
			{
				users && users.length > 0 && 
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
							users.map((user: IUserInfo, index: number) => (
								<tr key={user.id} onClick={() => setSelectedUser(index+1)}>
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

			{
				posts && posts.length > 0 && 
				<div className="posts">
					<table>
						<thead>
							<tr>
								<th>Title</th>
								<th>Body</th>
							</tr>
						</thead>
						<tbody>
							{
								posts.map((post: IPostInfo) => (
									<tr key={post.id}>
										<td>{post.title}</td>
										<td>{post.body}</td>
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
