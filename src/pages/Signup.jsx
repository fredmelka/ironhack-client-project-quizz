
import React, { useState }                                  from 'react';
import { useNavigate }                                      from 'react-router-dom';
import { Button, Input, message, Space, Tag, Typography }   from 'antd';
import { UserOutlined, LockOutlined, MailOutlined }         from '@ant-design/icons';
import { createUser }                                       from '../utils/server.calls.js';


// PAGE COMPONENT | SIGN UP 
export default function Signup () {

let { Text } = Typography;

let [_username, set_username]       = useState(null);
let [_email, set_email]             = useState(null);
let [_password, set_password]       = useState(null);
let [userId, setUserId]             = useState(null);
let [errorMessage, setErrorMessage] = useState(undefined);

let [messageApi, contextHolder] = message.useMessage();
let messageWelcome = (string) => messageApi.success(`Welcome ${string}!`, 3, goToLoginPage);

let navigate = useNavigate();
let goToLoginPage = () => {navigate('/login');};

let updateName = (event) => {setErrorMessage(undefined); set_username(event.target.value)};
let updateMail = (event) => {setErrorMessage(undefined); set_email(event.target.value)};
let updatePassword = (event) => {setErrorMessage(undefined); set_password(event.target.value)};


async function signUp () {

let userToCreate = {_username, _email, _password};
try {
    let response = await createUser(userToCreate);
    if (response.success) {
                setUserId(response.id);
                setErrorMessage(undefined);
                messageWelcome(response.user.username)}
    else {setErrorMessage(response.message); setUserId(null);};
}
catch (error) {console.log(error)};
set_username(null); set_email(null); set_password(null);
};


return (
    <>
    {contextHolder}
    <h3>Please register to sign up:</h3>
    <Space direction='vertical' size='large'>

        <Input
            style={{width: '30vw'}}
            addonBefore={<UserOutlined />}
            allowClear
            type='text'
            minLength={8}
            maxLength={20}
            value={_username}
            placeholder='Username'
            onChange={updateName}/>

        <Input
            style={{width: '30vw'}}
            addonBefore={<MailOutlined />}
            allowClear
            type='mail'
            value={_email}
            placeholder='Email'
            onChange={updateMail}/>
            
        <Input
            style={{width: '30vw'}}
            addonBefore={<LockOutlined />}
            allowClear
            type='password'
            value={_password}
            placeholder='Password'
            onChange={updatePassword}/>

        <Button type='primary' onClick={signUp}>Join Skweez!</Button>
    
    {userId && <Text type='success'>You have successfully created your account!</Text>}
    {errorMessage && <Text type='danger'>{errorMessage}</Text>}
    </Space>
    </>);
};