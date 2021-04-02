import axios from 'axios';

const imagesApi = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
	return axios
		.get(
			`https://pixabay.com/api/?q=${searchQuery}&key=19892329-0452805ee0827a1229c764d7c&image_type=photo&orientation=horizontal&per_page=${pageSize}&page=${currentPage}`
		)
		.then((response) => response.data.hits);
};
export { imagesApi };
