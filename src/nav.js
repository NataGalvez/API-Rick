import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';



function Nav(){
    const { SubMenu } = Menu;
    let handleClick = e => {
      
      };
    return(
        <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className="navBar"
      >
        <SubMenu key="sub1" icon={<MenuOutlined />}  >
          <Menu.ItemGroup key="g1" >
          <Menu.Item key="1"><Link to="/Protagonistas">Protagonistas</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/Lugares">Lugares</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/Episodios">Episodios</Link></Menu.Item>
          </Menu.ItemGroup>
         
        </SubMenu>
       
      </Menu>
    )
}

export default Nav