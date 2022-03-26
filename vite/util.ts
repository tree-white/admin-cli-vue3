import _ from 'lodash'

export function parseEnv(env: Record<string, any>): ViteEnv {
	const envs: any = _.cloneDeep(env)

	Object.entries(env).forEach(([key, value]) => {
		if (['true', 'false'].includes(value)) {
			envs[key] = value == 'true' ? true : false
		}

		if (/^\d+$/.test(value)) {
			envs[key] = parseInt(value)
		}
	})

	return envs
}
