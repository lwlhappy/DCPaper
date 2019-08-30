import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
//import iView from 'iview';
//import { Notification } from 'element-ui'; ///没用到   dbbs
import {
	baseUrl
} from '@/config';

//import store from '../store/systemindex';
// import {
// 	lodding,
// 	closeLodding
// } from './index'
import {
	Loading
} from 'element-ui';
//加载配置
const options = {
	fullscreenLoading: true,
	background: 'rgba(0, 0, 0, 0)',
	text: '正在拼命加载中...'
}

Vue.use(VueRouter)

export default {
	get: async (url = '', data = {}) => {
		let loadingInstance0 = Loading.service(options);
		let getthat = this;
		url = baseUrl + url + '?t=' + new Date().getTime();
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})
    console.log(data, dataStr)
		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '&' + dataStr;
		}
		let requestConfig = {
			credentials: 'include',
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'CampToken': sessionStorage.getItem('CampToken'),
			},
			mode: "cors",
			cache: "force-cache",
		}
		try {
			const response = await axios.get(url, requestConfig);
			const responseJson = await response.data;
			if (Number.parseInt(responseJson.flag) === 521) {
				return;
			}else if (Number.parseInt(responseJson.flag) === 1) {
				if (!responseJson.success) {
					// iView.Notice.info({
					// 	title: '授权提示',
					// 	desc: '<div style="text-align:left;"><span style="font-size:16px;font-weight:500;">' + responseJson.msg + '</span></div>',
					// 	duration: 0
					// });
					loadingInstance0.close();
					return;
				}
			}
			loadingInstance0.close();
			return responseJson;
		} catch (error) {
			//登陆失效
			if (typeof (error.response) === 'undefined') {
				loadingInstance0.close();
				new VueRouter({
					name: 'login'
				})
				return;
			}
			let resdata = error.response.data;
			if (resdata.flag === 1) {
				if (!resdata.success) {
					iView.Notice.info({
						title: '授权提示',
						desc: '<div style="text-align:left;><span style="font-size:16px;font-weight:500;">' + resdata.msg + '</span></div>',
						duration: 0
					});
					loadingInstance0.close();
					return;
				} else if (resdata.obj > 0) {
					iView.Notice.info({
						title: '授权提示',
						desc: '<div style="text-align:left;"><span style="font-size:16px;font-weight:500;">' + resdata.msg + '</span></div>',
						duration: 0
					});
				}
				loadingInstance0.close();
			} else {
				loadingInstance0.close();
				return {
					success: false,
					msg: '请求异常'
				}
			}
		}
	},
	post: async (url = '', data = {}) => {
		let loadingInstance1 = Loading.service(options);
		let postthat = this;
		url = baseUrl + url;
		try {
			let requestConfig = {
				credentials: 'include',
				method: 'POST',
				xhrFields: {
					withCredentials: true
				},
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'CampToken': sessionStorage.getItem('CampToken'),
					'withCredentials': true
				},
				mode: "cors",
				cache: "force-cache",
			}
			const response = await axios.post(url, data, requestConfig);
			const responseJson = await response.data;
			if (Number.parseInt(responseJson.flag) === 521) {
				iView.Message.error(responseJson.msg)
				loadingInstance0.close();
				//store.dispatch("pathLogin", true);
				return;
			}else if (Number.parseInt(responseJson.flag) === 1) {
				if (!responseJson.success) {
					iView.Notice.info({
						title: '授权提示',
						desc: '<div style="text-align:left;"><span style="font-size:16px;font-weight:500;">' + responseJson.msg + '</span></div>',
						duration: 0
					});
					loadingInstance0.close();
					return;
				} else if (responseJson.obj > 0) {
					iView.Notice.info({
						title: '授权提示',
						desc: '<div style="text-align:left;"><span style="font-size:16px;font-weight:500;">' + responseJson.msg + '</span></div>',
						duration: 0
					});
				}
			}
			// Vue.$nextTick(() => { 
			loadingInstance1.close();
			// });
			return responseJson;
		} catch (error) {
			//登陆失效
			if (typeof (error.response) === 'undefined') {
				loadingInstance1.close();
				new VueRouter({
					name: 'login'
				})
				return;
			}
			let resdata = error.response.data;
			if (resdata.flag === 1) {
				if (!resdata.success) {
					// iView.Notice.info({
					// 	title: '授权提示',
					// 	desc: '<div style="text-align:left;"><span style="font-size:16px;font-weight:500;">' + resdata.msg + '</span></div>',
					// 	duration: 0
					// });
					// loadingInstance1.close();
					return;
				}
				loadingInstance1.close();
			} else {
				loadingInstance1.close();
				return {
					success: false,
					msg: '请求异常'
				}
			}
		}
	}
};
