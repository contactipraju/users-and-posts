import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import store from './store/store';
import { loadUsers } from './store/actions';

import { getUsers }  from './Users.service';
import { IUserInfo } from './Users.interfaces';

import NameSearch from './components/NameSearch/NameSearch';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';

import './UsersPage.scss';

function UsersPage() {
    const dispatch = useDispatch();
    const [filteredUsers, setFilteredUsers] = useState<Array<IUserInfo>>([]);

    // Load all users once, store them in the global store, and provide them to all components under this page
    useEffect(() => {
        getUsers().then((resp) => {
			store.dispatch(loadUsers(resp));
			setFilteredUsers(resp);
            return resp;
        });
    }, [dispatch]);

    return (
        <div id="users-page">
			<NameSearch setFilteredUsers={setFilteredUsers} />
            <Users filteredUsers={filteredUsers} />
            <Posts />
        </div>
    );
}

export default UsersPage;
