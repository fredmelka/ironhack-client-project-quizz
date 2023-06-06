
import React, { useContext }                        from 'react';
import { NavLink, useNavigate }                     from 'react-router-dom';
import { AuthContext }                              from '../context/Auth.context.jsx';
import { Col, Divider, message, Row, Tag, Button }  from 'antd';


export default function Header () {

let {isLoggedIn, user} = useContext(AuthContext);
let navigate = useNavigate();

// let userId = localStorage.getItem('myFinCockpituserId');

let [messageApi, contextHolder] = message.useMessage();
let messageLogout = (value) => messageApi.open({type: 'warning', content: `Good bye ${value}!`});

let logOut = () => {
    messageLogout(localStorage.getItem('myFinCockpitusername'));
    localStorage.removeItem('myFinCockpituserId');
    localStorage.removeItem('myFinCockpitusername');
    navigate('/');};


return (
    <>
    {contextHolder}

    <header>
    {/* <h3>I am the futur Header</h3> */}
    <Row>
    <Col span={22} offset={1}>
{/* 
    {isLoggedIn && (
        <>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/securities'>Securities</NavLink>
        <NavLink to='/watchlist'>Watch List</NavLink>
        <NavLink to='/resources'>Resources</NavLink>
        </>
    )}

    {(isLoggedIn)
            ? <Button type='link' ghost onClick={logOut}>Log Out</Button>
            : <NavLink to='/login'><Button type= 'default' style={{backgroundColor: '#12934f'}} >Log In</Button></NavLink>}

    <NavLink to='/signup'><Button type='primary'> Sign Up</Button></NavLink> */}
    </Col>
    </Row>
    <Divider />
    </header>
    </>);
};