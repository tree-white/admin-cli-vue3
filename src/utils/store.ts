import config from '../../package.json'

const { name: projectName } = config

const getProKey = (name: string): string => `${projectName}-${name}`

export interface IData {
	expire?: number
	token?: string
	[key: string]: any
}
export default {
	set(key: string, data: IData) {
		const proKey = getProKey(key)
		if (data.expire) {
			data.expire = +new Date() + data.expire * 1000
		}
		localStorage.setItem(proKey, JSON.stringify(data))
	},
	get(key: string) {
		const proKey = getProKey(key)
		const data = localStorage.getItem(proKey)
		if (!data) {
			return null
		}
		const dataObj = JSON.parse(data) as IData
		if (dataObj.expire && +new Date() > dataObj.expire) {
			this.remove(key)
			return null
		}
		return dataObj
	},
	remove(key: string) {
		const proKey = getProKey(key)
		localStorage.removeItem(proKey)
	},
}
