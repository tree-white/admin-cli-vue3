import _ from 'lodash'

export function parseEnv(env: Record<string, any>): ViteEnv {
	const envs: any = _.cloneDeep(env)

	Object.entries(env).forEach(([key, value]) => {
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
