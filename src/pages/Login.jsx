
import React, { useContext, useState }          from 'react';
import { Link, useNavigate }                    from 'react-router-dom';
import { message, Space, Typography }           from 'antd';
import { Button, Input}                         from 'antd';
import { LockOutlined, MailOutlined }           from '@ant-design/icons';
import { AuthContext }                          from '../context/Auth.context.jsx';
import { connectUser }                          from '../utils/server.calls.js';


// PAGE COMPONENT | LOG IN 
export default function Login () {

let { Text } = Typography;

let {storeToken, authenticate} = useContext(AuthContext);

let navigate = useNavigate();
let returnWelcomePage = () => {navigate('/');};

let [_email, set_email]                 = useState(null);
let [_password, set_password]           = useState(null);
let [showLogStatus, setShowLogStatus]   = useState(false);
let [errorMessage, setErrorMessage]     = useState(undefined);

let [messageApi, contextHolder] = message.useMessage();
let messageWelcome = (string) => messageApi.success(`Welcome back ${string}!`, 3, returnWelcomePage);

let updateMail = (event) => {setErrorMessage(undefined); set_email(event.target.value)};
let updatePassword = (event) => {setErrorMessage(undefined); set_password(event.target.value)};

let resetFields = () => {set_email(''); set_password(''); setErrorMessage('')};

// SUB-FUNCTION | LOGIN ACTIONS
async function logUser () {

let userToLog = {_email, _password};
try {
    let response = await connectUser(userToLog);
    if (response.success) {
                storeToken(response.message);
                authenticate();
                setErrorMessage(undefined);
                setShowLogStatus(true);
                messageWelcome('')}
    else {setErrorMessage(response.message)};
}
catch (error) {console.log(error)};
set_email(''); set_password('');
};


return (
    <>
    {contextHolder}
    
    <h3>Please enter your credentials to log in:</h3>
    <form>
    <Space direction='vertical' size='large'>

    <Input
        style={{width: 'max(350px, 30vw)'}}
        addonBefore={<MailOutlined />}
        allowClear
        type='mail'
        value={_email}
        placeholder='Email'
        onChange={updateMail}/>

    <Input
        style={{width: 'max(350px, 30vw)'}}
        addonBefore={<LockOutlined />}
        allowClear
        type='password'
        value={_password}
        placeholder='Password'
        onChange={updatePassword}/>
    
    <Link >
    <Space direction='horizontal' size='large'>
        <Button type='primary' onClick={logUser}>Join Skweez!</Button>
        <Button type='default' onClick={resetFields}>Reset</Button>
    </Space>
    </Link>

    {errorMessage && <Text type='danger'>{errorMessage}</Text>}

    </Space>
    </form>
    </>);
};