/* eslint-disable no-console,react/no-multi-comp */
import { Button } from 'antd';
import * as React from 'react';
import * as ReactDom from 'react-dom';

import Drawer from '../src';

import 'antd/lib/button/style';
import 'antd/lib/style';

import '../assets/index.less';
import './assets/index.less';

class Demo extends React.Component {
  public state = {
    open: false,
    openChild: false,
    openChildren: false,
  };

  public onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  public onChildClick = () => {
    this.setState({
      openChild: !this.state.openChild,
    });
  };

  public onChildrenClick = () => {
    this.setState({
      openChildren: !this.state.openChildren,
    });
  };

  public getLevelMove = (e: {
    target: HTMLElement;
    open: boolean;
  }): number | [number, number] => {
    const target = e.target as HTMLElement;
    if (target.className.indexOf('drawer1') >= 0) {
      return [200, 100];
    }
    return 100;
  };

  public render() {
    return (
      <div>
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
          <Button onClick={this.onClick}>onclick</Button>
        </div>
        <Drawer
          width="20vw"
          handler={false}
          open={this.state.open}
          onClose={this.onClick}
          className="drawer1"
          placement="right"
        >
          <div>
            <Button onClick={this.onChildClick}>on child clocl</Button>
            <Drawer
              handler={false}
              open={this.state.openChild}
              onClose={this.onChildClick}
              className="drawer2"
              level=".drawer1"
              placement="right"
              levelMove={100}
            >
              <div style={{ width: 200 }}>
                Button
                <Button onClick={this.onChildrenClick}>Child click</Button>
                <Drawer
                  handler={false}
                  open={this.state.openChildren}
                  onClose={this.onChildrenClick}
                  level={['.drawer1', '.drawer2']}
                  placement="right"
                  levelMove={this.getLevelMove}
                >
                  <div style={{ width: 200 }}>Button</div>
                </Drawer>
              </div>
            </Drawer>
          </div>
        </Drawer>
      </div>
    );
  }
}
export default Demo;
