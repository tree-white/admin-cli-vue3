import Axios from './axios'

const http = new Axios({
	baseURL: '/api',
	timeout: 10 * 1000,
	headers: {},
})

export { http }
