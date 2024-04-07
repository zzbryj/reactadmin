import React from 'react'; // 导入 React 库
import ReactDOM from 'react-dom'; // 导入 ReactDOM 库
import App from './App'; // 导入 App 组件
import './index.css'; // 导入 CSS 文件
import * as serviceWorker from './serviceworker'; // 导入手机外壳 serviceWorker 文件

ReactDOM.render(<App />, document.getElementById('root'));// 渲染 App 组件到根元素
serviceWorker.unregister()// 注销 serviceWorker