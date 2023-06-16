import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Posts from '../Posts/Posts';

const mockStore = configureStore([]);

describe('When NO user is selected', () => {
	let store;
	let component: renderer.ReactTestRenderer;

	beforeEach(() => {
		// TODO: fetch mock data
		store = mockStore({
			users: [],
			selectedUser: null
		});

		component = renderer.create(
			<Provider store={store}>
				<Posts />
			</Provider>
		);
	});

	afterEach(() => {
		component.unmount();
	});

	it('should NOT render the "Reload" button', () => {
	});

	it('should NOT render the "Clear Selection" button', () => {
	});

	it('should NOT display any posts', () => {
	});

	it('should ask user to select a user first', () => {
	});
});

describe('When a user IS selected', () => {
	let store;
	let component: renderer.ReactTestRenderer;

	beforeEach(() => {
		// TODO: fetch mock data
		store = mockStore({
			users: [],
			selectedUser: {id: 2, name: 'Ervin Howell'}
		});

		component = renderer.create(
			<Provider store={store}>
				<Posts />
			</Provider>
		);
	});

	afterEach(() => {
		component.unmount();
	});

	it('should render "Reload" button', () => {
	});

	it('should render "Clear Selection" button', () => {
	});

	it('should re-fetch posts When user clicks on "Reload" button', () => {
	});

	it('should clear the selection when user clicks on "Clear Selection" button', () => {
	});

	it('should render posts for selected user', () => {
	});

	it('should re-render posts when a NEW user is selected', () => {
	});
});
