const getDateInFormat = () => {
	let date = new Date();
	// console.log(date)
	return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
}

const setLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorage = (key) => {
	return JSON.parse(localStorage.getItem(key));
}

const setSessionStorage = (key, value) => {
	sessionStorage.setItem(key, JSON.stringify(value));
}

const Helpers = {
	getDateInFormat,
	setLocalStorage,
	getLocalStorage,
	setSessionStorage
}

export default Helpers;
