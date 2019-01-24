import axios from 'axios';

export function getComments() {
	axios.get('https://www.easy-mock.com/mock/5c45d071fb5b9a1c0746721a/commons?page=1&size=10').then(res => {
		console.log(res);
	})
}