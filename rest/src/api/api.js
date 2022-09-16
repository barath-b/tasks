import axios from "axios";

const axiosInstance = axios.create({
	baseURL: 'https://react-http-fe6f6-default-rtdb.firebaseio.com/users/',
	timeout: 5000,
});

export const apiGet = async () => {
	const response = await axiosInstance.get('.json');
	return response.data;
}

export const apiSend = async (id, value) => {
	const response = await axiosInstance.put(`${id}.json`, value);
	// console.log(response)
	return response.data;
}

export const apiUpdate = async (id, value) => {
	const response = await axiosInstance.patch(`${id}.json`, value);
	// console.log(response)
	return response.data;
}

export const apiDelete = async (id) => {
	const response = await axiosInstance.delete(`${id}.json`);
	// console.log(response)
	return response.data;
}

const api = {
	apiGet,
	apiSend,
	apiUpdate,
	apiDelete
}

export default api;