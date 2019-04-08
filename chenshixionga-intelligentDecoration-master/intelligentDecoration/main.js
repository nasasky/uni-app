import Vue from 'vue'
import App from './App'

import store from './store'
import uniIcom from 'components/uni-icon.vue'
import uniLoadMore from 'components/uni-load-more.vue'
import uniSegmentedControl from 'components/uni-segmented-control.vue'
import cusUploadImage from 'components/cus-upload-image.vue'
import cusNoData from 'components/cus-no-data.vue'
import uniPopup from 'components/uni-popup.vue'
// https://github.com/zhetengbiji/mpvue-picker
import mpvuePicker from 'components/mpvuePicker.vue';
// https://github.com/zhetengbiji/mpvue-citypicker
import mpvueCityPicker from 'components/mpvue-citypicker/mpvueCityPicker.vue'
import cityData from 'common/city.data.js';

Vue.config.productionTip = false

Vue.prototype.$store = store

Vue.prototype.$eventBus = new Vue()

import './config/index.js'

Vue.component('uni-icon', uniIcom)
Vue.component('uni-load-more', uniLoadMore)
Vue.component('uni-segmented-control', uniSegmentedControl)
Vue.component('cus-upload-image', cusUploadImage)
Vue.component('uni-popup', uniPopup)
Vue.component('mpvue-picker', mpvuePicker)
Vue.component('mpvue-city-picker', mpvueCityPicker)
Vue.component('cus-no-data', cusNoData)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
