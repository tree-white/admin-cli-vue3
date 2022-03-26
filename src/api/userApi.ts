import { http } from '@/plugins/axios'

interface User {
	name: string
	age: number
	avatar: string
}
function info() {
	return http.request<User>({
		url: `info`,
	})
}

interface Login {
	token: string
}
function login() {
	return http.request<Login>({
		url: `login`,
		method: 'POST',
	})
}

export default { info, login }
