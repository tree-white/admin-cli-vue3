import _ from 'lodash'

class Helper {
	public env = {} as ImportMetaEnv

	constructor() {
		this.env = this.getEnvs()
	}

	private getEnvs(): ImportMetaEnv {
		const envs: any = _.cloneDeep(import.meta.env)

		Object.entries(envs as Record<string, any>).forEach(([key, value]) => {
			switch (value) {
				case 'true':
				case 'false':
					envs[key] = value == 'true' ? true : false
					break
				case 'null':
					envs[key] = null
					break
				case 'undefined':
					envs[key] = undefined
					break
				default:
					if (/^\d+$/.test(value)) envs[key] = Number(value)
			}
		})

		return envs
	}
}

const helper = new Helper()
const env = helper.env

export { env }
export default helper
