import axios from 'axios';

export async function getUsers() {
	const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
	return resp.data;
}

export async function getPosts(userId: number) {
	const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
	return resp.data;
}
