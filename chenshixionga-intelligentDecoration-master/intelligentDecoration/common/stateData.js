import store from '../store'

// 任务的状态
const taskState = {
	draft: '草稿',
	wait_prove: '待审核',
	prove_prove: '材料待验收',
	prove_done: '施工',
	done: '完成',
	reject: '关闭',
	cancel: '取消'
}
// 项目状态
const projectState = {
	draft: '草稿',
	wait_prove: '待审核',
	scheme_formulation: '方案设计',
	project_offer: '项目报价',
	down_payment: '收取定金',
	contract: '合同签订',
	preparation: '施工准备',
	construction: '工程施工',
	project_check: '项目验收',
	cost_settle: '费用结算',
	done: '完成'
}

// 验收状态
const checkState = {
	draft: '待验收',
	pcheck: '通过',
	rcheck: '不通过'

}

// 验收类型
const checkType = {
	'0': '常规验收',
	'1': '整装验收',
	'2': '竣工验收'
}

// 结算状态
const accountType = {
	'draft': '草稿',
	'wait_prove': '待审核',
	'proved': '审核通过',
	'reject': '审核不通过',
}

// 商机状态
const commercialState = [{
		label: '商机',
		value: 1
	},
	{
		label: '潜在客户',
		value: 2
	},
	{
		label: '任务分配',
		value: 3
	},
	{
		label: '意向签约',
		value: 4
	},
	{
		label: '方案设计',
		value: 5
	}
]

// 装修情况
const decorateCondition = [{
		label: '精装',
		value: 'fitment01'
	},
	{
		label: '毛胚',
		value: 'fitment02'
	}
]


// 设计师数据
let designers = []
const getDesigners = function() {
	if (designers.length > 0) return
	uni.request({
		url: store.state.baseUrl + '/lwj/design_info',
		method: 'POST',
		header: {
			token: store.state.token
		},
		data: {},
		success: res => {
			if (res.data.code === 1) {
				res.data.data.list.map(item => {
					item.value = item.id
					item.label = item.designer
					delete item.id
					delete item.designer
					return item
				})
				designers = res.data.data.list
			}
		},
		fail: () => {},
		complete: () => {}
	});
}

// 业务员数据
let salesman = []
const getSalesman = function() {
	if (salesman.length > 0) return
	uni.request({
		url: store.state.baseUrl + '/lwj/saleman_info',
		method: 'POST',
		header: {
			token: store.state.token
		},
		data: {},
		success: res => {
			if (res.data.code === 1) {
				res.data.data.list.map(item => {
					item.value = item.id
					item.label = item.saleman
					delete item.id
					delete item.saleman
					return item
				})
				salesman = res.data.data.list
			}
		},
		fail: () => {},
		complete: () => {}
	});
}

// 楼盘数据
let buildings = []
const getBuildings = function(search_key) {
	if (buildings.length > 0) return
	uni.request({
		url: store.state.baseUrl + '/lwj/building_info',
		method: 'POST',
		header: {
			token: store.state.token
		},
		data: {search_key: search_key},
		success: res => {
			if (res.data.code === 1) {
				res.data.data.list.map(item => {
					item.value = item.id
					item.label = item.name
					delete item.id
					delete item.name
					return item
				})
				buildings = res.data.data.list
				return res.data.data.list
			}
		},
		fail: () => {},
		complete: () => {}
	});
}

getDesigners() // 获取设计师数据
getSalesman() // 获取业务员数据
getBuildings() // 获取楼盘数据
export {
	taskState,
	projectState,
	checkState,
	checkType,
	accountType,
	decorateCondition,
	commercialState,
	designers,
	salesman,
	buildings
}
