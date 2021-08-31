import { Drawer, Button } from 'antd';
import React from 'react';

class DrawerPage extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          Open drawer
        </Button>
        <Drawer
          title="Multi-level drawer"
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        </Drawer>
      </>
    );
  }
}
export default DrawerPage