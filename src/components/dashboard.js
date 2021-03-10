import React from "react";
import { Breadcrumb, Button, Menu, Slider } from "antd";
import { Layout } from "antd";
import { Typography } from 'antd';
import Avatar from "antd/lib/avatar/avatar";
import SubMenu from "antd/lib/menu/SubMenu";
import { icons } from "antd/lib/image/PreviewGroup";
import { Icon } from "@material-ui/core";
import {
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import {
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const { Title } = Typography;


const { Header, Footer, Sider, Content } = Layout;
const Dashboard = () => {
    return(
        <Layout style={{ minHeight: '100vh', margin: 0 }}>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title align="left" style={{ color:'#ff6347',margin: 0}} level={3}>INFINITI</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Company Infos'>
                  <Menu.Item key='location1'>What We Do</Menu.Item>
                  <Menu.Item key='location2'>Contact Us</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
             
         
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Videography
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Upload Files
            </Menu.Item>
            </Menu>
            <Menu
              defaultSelectedKeys={['User']}
              mode="inline"
            >
 <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            </Menu>
            <Menu defaultSelectedKeys={['Team']}
              mode="inline">
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Project Managment</Menu.Item>
              <Menu.Item key="8">Marketing</Menu.Item>
            </SubMenu>   
            </Menu>
          </Sider>
          <Layout>
          <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <div style={{ background: '#fff', padding: 24, minHeight: 580 }}></div>
      </Breadcrumb>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design Created by KL</Footer>

          </Layout>
        </Layout>
      </Layout> 
    );
};

export default Dashboard