import _ from 'lodash'

const env: any = _.cloneDeep(import.meta.env)

Object.entries(env as Record<string, any>).forEach(([key, value]) => {
	switch (value) {
		case 'true':
		case 'false':
			env[key] = value == 'true' ? true : false
			break
		case 'null':
			env[key] = null
			break
		case 'undefined':
			env[key] = undefined
			break
		default:
			if (/^\d+$/.test(value)) env[key] = Number(value)
	}
})

export default env as ViteEnv
