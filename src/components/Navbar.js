import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg1';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Navbar extends React.Component {
  render() {
    return (
      // <div>
          <div className="Navbar-layout">
               <ul className="Navbar">
                   <Link to="/home">
                   <li>Home</li>
                   </Link>
                   <Link to="/about">
                   <li>About</li>
                   </Link>
                   <Link to="/signin">
                   <li>Signin</li>
                   </Link>
               </ul>
           </div>
    //   <Layout>
        
    //   <Header className="header">
    //     {/* <div className="logo" /> */}
    //     <Link to = '/'>
    //                 <img src = {logo} alt = "store"
    //                 className = "navbar-brand" />
    //             </Link>
        
    //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          
    //       <Menu.Item key="1">Movies List</Menu.Item>
    //       <Menu.Item key="2">Movie Details</Menu.Item>
    //       <Menu.Item key="3">Celebs</Menu.Item>
    //       <Menu.Item key="3">MDetails</Menu.Item>
    //       <Menu.Item key="3">Watchlist</Menu.Item>
    //       <Menu.Item key="3">Movie</Menu.Item>

    //     </Menu>
    //   </Header>
    //   <Content style={{ padding: '0 50px' }}>
    //     <Breadcrumb style={{ margin: '16px 0' }}>
    //       <Breadcrumb.Item>Home</Breadcrumb.Item>
    //       <Breadcrumb.Item>Movie List</Breadcrumb.Item>
    //       <Breadcrumb.Item>Movies</Breadcrumb.Item>
    //     </Breadcrumb>
    //     <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
    //       <Sider className="site-layout-background" width={200}>
    //         <Menu
    //           mode="inline"
    //           defaultSelectedKeys={['1']}
    //           defaultOpenKeys={['sub1']}
    //           style={{ height: '100%' }}
    //         >
    //           <SubMenu key="sub1" icon={<UserOutlined />} title="Tollywood">
    //             <Menu.Item key="1">option1</Menu.Item>
    //             <Menu.Item key="2">option2</Menu.Item>
    //             <Menu.Item key="3">option3</Menu.Item>
    //             <Menu.Item key="4">option4</Menu.Item>
    //           </SubMenu>
    //           <SubMenu key="sub2" icon={<LaptopOutlined />} title="Bollywood">
    //             <Menu.Item key="5">option5</Menu.Item>
    //             <Menu.Item key="6">option6</Menu.Item>
    //             <Menu.Item key="7">option7</Menu.Item>
    //             <Menu.Item key="8">option8</Menu.Item>
    //           </SubMenu>
    //           <SubMenu key="sub3" icon={<NotificationOutlined />} title="Hollywood">
    //             <Menu.Item key="9">option9</Menu.Item>
    //             <Menu.Item key="10">option10</Menu.Item>
    //             <Menu.Item key="11">option11</Menu.Item>
    //             <Menu.Item key="12">option12</Menu.Item>
    //           </SubMenu>
    //         </Menu>
    //       </Sider>
    //       <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
    //     </Layout>
    //   </Content>
    // </Layout>

    //   </div>
    );
  }
}

export default Navbar;


//ReactDOM.render(<SiderDemo />, mountNode);
            // <div className="Navbar-layout">
            //     <ul className="Navbar">
            //         <Link to="/home">
            //         <li>Home</li>
            //         </Link>
            //         <Link to="/about">
            //         <li>About</li>
            //         </Link>
            //         <Link to="/signin">
            //         <li>Signin</li>
            //         </Link>
            //     </ul>
            // </div>