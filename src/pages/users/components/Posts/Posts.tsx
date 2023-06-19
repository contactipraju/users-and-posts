import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import store         from '../../store/store';
import { IStore }    from '../../store/store';
import { IPostInfo } from '../../Users.interfaces';
import { getPosts }  from '../../Users.service';

import { updateSelectedUser } from '../../store/actions';

import './Posts.scss';

function Posts() {
	const [posts, setPosts] = useState([]);
	const selectedUser = useSelector((state: IStore) => state.selectedUser!);

	const reLoadPosts = useCallback(async (id:number) => {
		try {
			const response = await getPosts(id);
			setPosts(response);
		} catch (e) {
			console.error(e);
		}
	}, []);

	useEffect(() => {
		if (selectedUser && selectedUser.id >= 0) {
			reLoadPosts(selectedUser.id);
		} else {
			setPosts([]);
		}
	}, [selectedUser, reLoadPosts]);

	return (
		<div id='posts'>
		{selectedUser && selectedUser.name ? (
			<>
				<div>
					<span data-testid='displaying-posts'>
					Displaying posts for the user:
					</span>
					<span>{selectedUser.name}</span>
				</div>
				<div>
					<button aria-label='reload' onClick={() => reLoadPosts(selectedUser.id)}>
					Reload
					</button>
					<button
					aria-label='clear'
					onClick={() => store.dispatch(updateSelectedUser(null))}
					>
					Clear Selection
					</button>
				</div>
			</>
		) : (
			<span data-testid='select-user'>Select a user to fetch the posts</span>
		)}
		{posts && posts.length > 0 && (
			<div className='posts'>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Body</th>
						</tr>
					</thead>
					<tbody>
						{posts.map((post: IPostInfo) => (
							<tr key={post.id}>
							<td>{post.title}</td>
							<td>{post.body}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)}
		</div>
	);
}

export default Posts;
