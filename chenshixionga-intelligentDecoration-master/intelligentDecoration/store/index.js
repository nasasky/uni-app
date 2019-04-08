import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		baseUrl: "",
		token: "",
		uid: ""
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		setLoginState(state, obj) {
			state.hasLogin = obj.hasLogin;
			state.token = obj.token;
			state.uid = obj.uid
		},
		setBaseUrl(state, url) {
			state.baseUrl = url
		}
    }
})

export default store
