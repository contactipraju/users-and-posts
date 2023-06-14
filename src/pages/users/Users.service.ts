import axios from 'axios';

export const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getUsers = async () => {
	const resp = await client.get('/users');
	return resp.data;
}

export const getPosts = async (userId: number) => {
	const resp = await client.get(`/posts?userId=${userId}`);
	return resp.data;
}
