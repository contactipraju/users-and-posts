import './App.scss';

import UsersPage from './pages/users/UsersPage';

import { Provider } from 'react-redux';

import store from './pages/users/store/store';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
			<UsersPage />
			</Provider>
		</div>
	);
}

export default App;
