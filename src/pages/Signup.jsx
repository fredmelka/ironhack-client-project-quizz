
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Space, Tag, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

// import { createUser }                       from '../app/Crud.js'


export default function Signup () {

let { Search } = Input;
let { Text } = Typography;
let [username, setUsername] = useState();
let [userMail, setUserMail] = useState();
let [userPassword, setPassword] = useState();

let [userId, setUserId] = useState(null);
let navigate = useNavigate();

let updateName = (event) => {setUsername(event.target.value)};
let updateMail = (event) => {setUserMail(event.target.value)};
let updatePassword = (event) => {setPassword(event.target.value)};

let goToLoginPage = (event) => {event.preventDefault(); navigate('/login');};

async function signUp (x) {
try {
    let user = await createUser(x);
    console.log(await user);
    setUserId(user)
    return user}
catch (error) {console.log(error)};
};

return (
    <>
    <h2>I am the Signup Page!</h2>
    <h3>Please register to sign up:</h3>
    <Space direction='vertical'>
        <Input
            addonBefore={<UserOutlined />}
            allowClear
            type='text'
            value={username}
            placeholder='Username 8-20 characters'
            onChange={updateName}/>
        <Input
            addonBefore={<MailOutlined />}
            allowClear
            type='mail'
            value={userMail}
            placeholder='Valid email'
            onChange={updateMail}/>
        <Input
            addonBefore={<LockOutlined />}
            allowClear
            type='password'
            value={userPassword}
            placeholder='Password'
            onChange={updatePassword}/>
            
        <Button type='primary' onClick={signUp}>Join</Button>

{/* onSearch={() => {signUp(username)}} */}


    {userId &&  <>
                <Text type='success'>You have successfully created your account! We are so happy that you join!</Text>
                <Text type='success'> Click here to login <Tag onClick={goToLoginPage}>here</Tag>.</Text>
                </>}
    </Space>
    </>);
};