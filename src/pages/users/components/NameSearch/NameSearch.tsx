import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { IStore }    from '../../store/store';

import './NameSearch.scss';

const NameSearch = ({ setFilteredUsers }: any) => {
    const [inputValue, setInputValue] = useState('');
    const [selectFilter, setSelectFilter] = useState<string | undefined>(undefined);
    const [selectOptions, setSelectOptions] = useState<Array<string>>([]);

	const users = useSelector((state: IStore) => state.users!);

    useEffect(() => {
		if (users && users.length) {
			const options = Object.keys(users[0]).filter(
				(key: string) => key !== 'id' && key !== 'phone' && key !== 'address' && key !== 'company'
			);
			setSelectOptions(options);
			setSelectFilter(options[0]);
		}
	}, [users]);

    useEffect(() => {
        if (selectFilter) {
            setFilteredUsers(users.filter((user: any) => user[selectFilter].toLowerCase().includes(inputValue.toLowerCase())));
        }
    }, [selectFilter, users, inputValue, setFilteredUsers]);

	const submitHandler = (event: any) => event.preventDefault();

	return (
		<form className="search" onSubmit={submitHandler}>
			<input
				aria-label="search"
				type="text"
				id="search"
				value={inputValue}
				className="search__input"
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Search User"
			/>
            <select onChange={(e) => setSelectFilter(e.target.value)}>
                {selectOptions.map((val: any, i: any) => (
                    <option key={`option_${i}`} defaultValue={val} value={val}>
                        {val}
                    </option>
                ))}
            </select>
		</form>
	)
}

export default NameSearch;