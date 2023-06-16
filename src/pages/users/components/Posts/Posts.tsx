import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { IStore }    from '../../store/store';
import { IPostInfo } from '../../Users.interfaces';
import { getPosts }  from '../../Users.service';

import store from './../../store/store';
import { updateSelectedUser } from "../../store/actions";

import './Posts.scss';

function Posts() {
	const [posts, setPosts] = useState([]);
	const selectedUser = useSelector((state: IStore) => state.selectedUser!);

	useEffect(() => {
		if (selectedUser && selectedUser.id >= 0) {
            getPosts(selectedUser.id).then((resp) => {
                //console.log(`Loaded posts for: ${selectedUser.id}`, resp);
                setPosts(resp);
            })
		} else {
			setPosts([]);
		}
	}, [selectedUser]);

	// TODO: Fix code duplication.
	// It's not adviced to call outside functions from within useEffect.
	// May be check useMemo or useCallback?
	function reLoadPosts() {
		getPosts(selectedUser.id).then((resp) => {
			//console.log(`Reloaded posts for: ${selectedUser.id}`, resp);
			setPosts(resp);
		})
	}

	return (
		<div id="posts">
			{
				selectedUser && selectedUser.name ? 
				<>
					<div>
						<span data-testid="displaying-posts">Displaying posts for the user:</span>
						<span>{selectedUser.name}</span>
					</div>
					<div>
						<button aria-label="reload" onClick={ () => reLoadPosts()}>Reload</button>
						<button aria-label="clear" onClick={ () => store.dispatch(updateSelectedUser(null))}>Clear Selection</button>
					</div>
				</>
				: <span data-testid="select-user">Select a user to fetch the posts</span>
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

export default Posts;
