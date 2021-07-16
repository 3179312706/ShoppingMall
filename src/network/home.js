/*
 * @Author: your name
 * @Date: 2021-07-07 16:13:57
 * @LastEditTime: 2021-07-07 16:15:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\network\home.js
 */
import {request} from "./request";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}