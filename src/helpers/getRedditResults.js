import axios from 'axios';

export default function getRedditResults(cryptoName) {
	const request = axios.get(`http://www.reddit.com/search.json?q=${cryptoName}&sort=top&t=week`);

	return request;
}