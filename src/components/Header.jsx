
import React, { useContext }                from 'react';
import { NavLink, useNavigate }             from 'react-router-dom';
import { AuthContext }                      from '../context/Auth.context.jsx';
import { Button, Col, Divider, message }    from 'antd';
import { Row, Space, Tag }                  from 'antd';


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
    {(isLoggedIn) && (
        <Divider orientation='right'>
                <Space direction='horizontal'>
                        <Button danger type='default' onClick={logOut}>Logout</Button>
                        <span>{user._username}</span>
                </Space>
                </Divider>)}
    </header>
    </>);
};