/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-09 17:54:42
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-09 19:35:01
 */
import React from 'react'

import ReactDom from 'react-dom'
import {Router, Route, Switch } from "dva/router"

import App from './App.jsx'
import Products from './routes/Products.jsx'

const RouterConfig = (({history})=> (
  <Router history={history}>
    <Switch>
        <Route path='/' component={App} exact />
        <Route path='/product' component={Products} exact />
    </Switch>
  </Router>
))

export default RouterConfig;