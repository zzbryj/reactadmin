import React from 'react';
import { NavLink } from 'react-router-dom'; // 引入NavLink组件

function HomePage() {
  return (
    <div>
      <h1>欢迎来到我的应用</h1>
      <nav>
        <ul>
          <li>
            {/* 将a标签替换为NavLink */}
            <NavLink to="/about" activeClassName="active">关于我们</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">登录</NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active">注册</NavLink>
          </li>
          <li>
            <NavLink to="/userInfo" activeClassName="active">用户信息</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;