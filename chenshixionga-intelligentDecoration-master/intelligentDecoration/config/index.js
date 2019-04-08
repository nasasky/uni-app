	import store from '../store'
	import devEnv from './dev.env.js'
	import prodEnv from './prod.env.js'
	
	if (process.env.NODE_ENV === 'development') {
		store.commit('setBaseUrl', devEnv.BASE_URL)
		store.commit('setLoginState', devEnv.loginObj)
		console.log('开发环境')
	} else {
		store.commit('setBaseUrl', prodEnv.BASE_URL)
		console.log('生产环境')
	}
