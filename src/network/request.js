/*
 * @Author: your name
 * @Date: 2021-07-07 16:02:23
 * @LastEditTime: 2021-11-28 17:18:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\network\request.js
 */
import axios from 'axios'

export function request(config){
	const instance = axios.create({
		baseURL: 'http://152.136.185.210:7878/api/hy66',
		timeout: 5000
	})

	instance.interceptors.request.use(config => {
		return config
	},err => {

	})

	instance.interceptors.response.use(res => {
		return res.data
	},err => {
		console.log(err)
	})

	return instance(config)
}