/*
 * @Author: your name
 * @Date: 2021-09-06 12:14:32
 * @LastEditTime: 2021-11-17 12:56:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HYMall-master\src\network\axios.js
 */
import originAxios from 'axios'
import qs from 'qs'

export default function axios(option) {
	return new Promise((resolve, reject) => {
		// 1.创建axios的实例
		const instance = originAxios.create({
			baseURL: 'http://152.136.185.210:7878/api/hy66',
			timeout: 5000
		});

		// 配置请求和响应拦截
		instance.interceptors.request.use(config => {
			config.data = qs.stringify(config.data)
			// console.log(config);

			// 4.等等
			return config
		}, err => {
			return err
		})

		instance.interceptors.response.use(response => {
			return response.data
		}, err => {
			console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
				}
			}
			return err
		})

		// 2.传入对象进行网络请求
		instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
