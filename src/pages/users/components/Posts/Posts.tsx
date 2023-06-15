import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { IStore }    from '../../store/store';
import { IPostInfo } from '../../Users.interfaces';
import { getPosts }  from '../../Users.service';

import './Posts.scss';

function Posts() {
	const [posts, setPosts] = useState([]);
	const selectedUser = useSelector((state: IStore) => state.selectedUser!);

	useEffect(() => {
		if (selectedUser && selectedUser.id >= 0) {
			getPosts(selectedUser.id).then((resp) => {
				console.log(`loaded posts for: ${selectedUser.id}`, resp);
				setPosts(resp);
			})
		}
	}, [selectedUser]);

	return (
		<div id="posts">
			<div>Displaying posts for the user: {selectedUser.name}</div>
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

export default Posts;
