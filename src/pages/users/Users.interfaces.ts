// Interfaces for User
export interface IGeoInfo {
	lat: string;
	lng: string;
}

export interface IAddressInfo {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IGeoInfo;
}

export interface ICompanyInfo {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface IUserInfo {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddressInfo;
	phone: string;
	website: string;
	company: ICompanyInfo;
}

// Interfaces for Posts
export interface IPostInfo {
	userId: number;
	id: number;
	title: string;
	body: string;
}
