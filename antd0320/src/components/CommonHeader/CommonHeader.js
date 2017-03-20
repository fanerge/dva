import { Menu, Dropdown, Icon } from 'antd';

import styles from './CommonHeader.css';

const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/">修改个人信息</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a rel="noopener noreferrer" href="/">退出登录</a>
    </Menu.Item>
  </Menu>
);

const CommonHeader = function({ title, username }){
	return (
		<div className={styles.header}>
			<h1>{ title }</h1>
			<div>
				<div className={styles.username}><Icon type="user" /> { username } </div>
				<Dropdown overlay={menu}>
				   <a className="ant-dropdown-link" href="#">
				      个人中心 <Icon type="down" />
				   </a>
				</Dropdown>
			</div>
		</div>
	);
};

export default CommonHeader;