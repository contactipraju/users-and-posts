import { useSelector } from 'react-redux';

import { IStore }    from '../../store/store';
import { IUserInfo } from '../../Users.interfaces';

import './NameSearch.scss';

const NameSearch = ({ setFilteredUsers }: any) => {
	const users = useSelector((state: IStore) => state.users!);

	const submitHandler = (event: any) => event.preventDefault();

	const searchChange = (event: any) => {
		if (!event.target.value) {
			return setFilteredUsers(users);
		}

		const results = users.filter((user: IUserInfo) => user.name.toLowerCase().includes(event.target.value.toLowerCase()));
		setFilteredUsers(results);
	}

	return (
		<form className="search" onSubmit={submitHandler}>
			<input aria-label="search" type="text" id="search" className="search__input" onChange={searchChange} placeholder="Search User" />
		</form>
	)
}

export default NameSearch;