
import React, { useContext }                from 'react';
import { NavLink, useNavigate }             from 'react-router-dom';
import { AuthContext }                      from '../context/Auth.context.jsx';
import Menu                                 from './Menu.jsx';
import { Button, Col, message, Row, Space } from 'antd';


// COMPONENT | HEADER
export default function Header () {

let {isLoggedIn, user, logOutUser} = useContext(AuthContext);
let navigate = useNavigate();

let [messageApi, contextHolder] = message.useMessage();
let messageLogout = (value) => messageApi.open({type: 'warning', content: `Good bye ${value}!`});

let logOut = () => {logOutUser(); messageLogout(user._username); navigate('/');};

return (
    <>
    {contextHolder}
    <header>
    <Row>
        <Col span={18} offset={1}>
            <Menu />
        </Col>
        
        {(isLoggedIn) && (
        <Col span={3} offset={1}>
            <Space direction='horizontal'>
                <Button danger type='default' onClick={logOut}>Logout</Button>
            </Space>
        </Col>)}
    </Row>
    </header>
    </>);
};