
import React, { useState }                      from 'react';
import { useNavigate }                          from 'react-router-dom';
import { Input, message, Space, Typography }    from 'antd';
import { LockOutlined, MailOutlined }           from '@ant-design/icons';
// import { logUser }                              from '../utils/server.calls';


// PAGE COMPONENT | LOG IN 
export default function Login () {

let { Text } = Typography;

let [_email, set_email]                 = useState(null);
let [_password, set_password]           = useState(null);
let [showLogStatus, setShowLogStatus]   = useState(false);
let [errorMessage, setErrorMessage]     = useState(undefined);

let [messageApi, contextHolder] = message.useMessage();
let messageWelcome = (string) => messageApi.success(`Welcome back ${string}!`, 3, goToLoginPage);

let updateMail = (event) => {setErrorMessage(undefined); set_email(event.target.value)};
let updatePassword = (event) => {setErrorMessage(undefined); set_password(event.target.value)};

async function logUser (username) {
try {
    let userObject = await getUser(username);
    console.log(await userObject._id);
    if (userObject) {   localStorage.setItem('myFinCockpituserId', userObject._id);
                        localStorage.setItem('myFinCockpitusername', userObject.owner);
                        setShowLogStatus(true);}
                    else {console.log('Could not login, please check.')};

    console.log('storage', localStorage.getItem('myFinCockpituserId'), localStorage.getItem('myFinCockpitusername'));

    set_email(''); set_password;
    messageWelcome(userObject.owner);

    return userObject;}
catch (error) {console.log(error)};
};

return (
    <>
    {contextHolder}
    <h3>Please enter your credentials to log in:</h3>
    <Space direction='vertical'>
    <Input
            addonBefore={<MailOutlined />}
            allowClear
            type='mail'
            value={_email}
            placeholder='Email'
            onChange={updateMail}/>
    <Input
            addonBefore={<LockOutlined />}
            allowClear
            type='password'
            value={_password}
            placeholder='Password'
            onChange={updatePassword}/>
        
        {showLogStatus && <Text type='success'>You have successfully logged in! Welcome back {localStorage.getItem('myFinCockpitusername')}!</Text>}
    </Space>
    </>);
};