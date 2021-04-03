import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '19892329-0452805ee0827a1229c764d7c';
const imagesApi = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
	return axios
		.get(`/?q=${searchQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}&page=${currentPage}`)
		.then((response) => response.data.hits);
};
export { imagesApi };
