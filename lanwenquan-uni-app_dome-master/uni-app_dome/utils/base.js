import Config  from './config.js';

export default class Base {
  constructor() {
		this.baseRestUrl = Config.restUrl;
		this.onPay = Config.onPay;
  }

  //http 请求类, 当noRefech为true时，不做未授权重试机制
  request(params, noRefetch) {
    var that = this,
      url = this.baseRestUrl + params.url;
    if (!params.type) {
      params.type = 'get';
    }
    /*不需要再次组装地址*/
    if (params.setUpUrl == false) {
      url = params.url;
    }
		uni.request({
        url: url,
        data: params.data,
        method: params.type,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
	
          // 判断以2（2xx)开头的状态码为正确
          // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
          var code = res.statusCode.toString();
          var startChar = code.charAt(0);

          if (startChar == '2') {
						 params.sCallback && params.sCallback(res.data);
          } else {
            if (code == '401' || code == '403') {
              if (!noRefetch) {
                // that._refetch(params);
              }
            }
            that._processError(res);
						 params.eCallback && params.eCallback(res.data);
          }
        },
        fail: function (err) {
          //uni.hideNavigationBarLoading();
          that._processError(err);
          // params.eCallback && params.eCallback(err);
        }
      });
  }

  _processError(err) {
    console.log(err);
  }

//   _refetch(param) {
//     var token = new Token();
//     
//     token.getToken((token) => {
//       this.request(param, true);
//     });
//   }

  /*获得元素上的绑定的值*/
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  };

};
 
