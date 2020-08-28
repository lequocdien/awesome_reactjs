import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button, Menu, Row, Col } from 'antd';
import { AlignCenterOutlined } from '@ant-design/icons';
import './index.css';

class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    }
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
            <React.Fragment>
                <Row justify="center">
                    <Col md={20} xs={24}>
                        <nav className="menuBar">
                            <div className="lefMenuBar">
                                <a href="">LOGO</a>
                                <div className="leftMenu">
                                    <LeftMenu mode={{ mode: 'horizontal' }} />
                                </div>
                            </div>
                            <div className="rightMenuBar">
                                <div className="rightMenu">
                                    <RightMenu mode={{ mode: 'horizontal' }} />
                                </div>
                                <div className="barsMenu">
                                    <Button size="middle" type="default" icon={<AlignCenterOutlined />} onClick={this.showDrawer}></Button>
                                </div>
                            </div>
                            <Drawer
                                title="Logo"
                                placement="right"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >
                                <LeftMenu mode={{ mode: 'vertical' }} />
                                <RightMenu mode={{ mode: 'vertical' }} />
                            </Drawer>
                        </nav>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default Navbar;