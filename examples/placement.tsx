/* eslint-disable no-console,react/no-multi-comp */
import { Icon, Menu, Select } from 'antd';
import * as React from 'react';
import * as ReactDom from 'react-dom';

import Drawer from '../src';

import 'antd/lib/button/style';
import 'antd/lib/menu/style';
import 'antd/lib/select/style';
import 'antd/lib/style';

import '../assets/index.less';
import './assets/index.less';

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
const { Option } = Select;

class Demo extends React.Component {
  public state = {
    placement: 'right',
    childShow: true,
    width: '20vw',
    height: null,
  };

  public onChange = (value: string) => {
    this.setState(
      {
        placement: value,
        width: value === 'right' || value === 'left' ? '20vw' : null,
        height: value === 'right' || value === 'left' ? null : '20vh',
        childShow: false, // 删除子级，删除切换时的过渡动画。。。
      },
      () => {
        this.setState({
          childShow: true,
        });
      },
    );
  };

  public render() {
    return (
      <div>
        {this.state.childShow && (
          <Drawer
            placement={this.state.placement}
            width={this.state.width}
            height={this.state.height}
          >
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <MenuItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>Navigation Three</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Drawer>
        )}
        <div
          style={{
            width: '100%',
            height: 667,
            background: '#fff000',
            color: '#fff',
            textAlign: 'center',
            lineHeight: '667px',
          }}
        >
          select
          <Select
            style={{ width: 120, marginLeft: 20 }}
            defaultValue={this.state.placement}
            onChange={this.onChange}
          >
            <Option value="left"> left</Option>
            <Option value="top">top</Option>
            <Option value="right"> right</Option>
            <Option value="bottom"> bottom</Option>
          </Select>
        </div>
      </div>
    );
  }
}

export default Demo;
