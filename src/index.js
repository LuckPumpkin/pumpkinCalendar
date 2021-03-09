/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-09 14:15:04
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-09 19:21:45
 */
import dva from 'dva'
import { createBrowserHistory } from 'history'

const app = dva({
  history: createBrowserHistory(),
})




app.router(require(`./route.js`).default)


app.start('#root')