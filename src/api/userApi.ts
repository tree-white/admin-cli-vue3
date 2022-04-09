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
function login(data: any) {
	return http.request<Login>({
		url: `login`,
		method: 'POST',
		data,
	})
}

export default { info, login }
