import React, { FunctionComponent } from "react";
import { Menu, Button } from 'antd'

interface IAntdMenuProps {
  
}
 
const AntdMenu: FunctionComponent<IAntdMenuProps> = () => {
  return (
    <div>
      <Menu
        style={{
          width: 400
        }}
        mode="inline"
      >
        <Menu.Item>
          <Button type="primary">测试</Button>
        </Menu.Item>
        <Menu.Item>
          测试2
        </Menu.Item>
        <Menu.SubMenu key={'11'} title="子菜单" level={2}>
          <Menu.Item>
            测试1
          </Menu.Item>
          <Menu.Item>
            测试2
          </Menu.Item>
          <Menu.Item>
          <Menu mode="vertical">
            <Menu.Item>
              测试
            </Menu.Item>
              <Menu.SubMenu key={'11'} title="子菜单" level={2}>
                <Menu.Item>
                  测试1
                </Menu.Item>
                <Menu.Item>
                  测试2
                </Menu.Item>
            </Menu.SubMenu>
          </Menu>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
}
 
export default AntdMenu;
