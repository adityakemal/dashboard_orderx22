import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { GiChart, GiTechnoHeart } from "react-icons/gi";
import { HiUserCircle, HiMenuAlt1 } from "react-icons/hi"; //https://react-icons.github.io/react-icons/icons?name=hi

import { Layout } from 'antd';
import routes from '../../../routes';
import { Link } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

export default function LayoutApp({ children }) {
    const [openToggle, setOpenToggle] = useState(false)
    return (
        <div>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="80"
                    width='270'
                    collapsed={openToggle}
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                        setOpenToggle(collapsed)
                    }}>
                    <ProSidebar collapsed={openToggle}>
                        <Menu iconShape="square">
                            {
                                routes.map((res, i) =>
                                    res.isSidebarLink &&
                                    <MenuItem key={i} icon={res?.icon}>
                                        {res.name}
                                        <Link exact={true} to={res.path} />
                                    </MenuItem>)
                            }

                            <SubMenu title="Components" icon={<GiTechnoHeart />}>
                                <MenuItem>Component 1</MenuItem>
                                <MenuItem>Component 2</MenuItem>
                            </SubMenu>
                        </Menu>
                    </ProSidebar>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: '0 24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <HiMenuAlt1 color='white' size={30} onClick={() => setOpenToggle(!openToggle)} />
                        <HiUserCircle color='white' size={30} />
                    </Header>
                    <Content>
                        {children}
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>

        </div>
    )
}


