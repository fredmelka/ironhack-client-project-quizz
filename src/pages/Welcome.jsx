
import React                from 'react';
import { useContext }       from 'react';
import { Link }             from 'react-router-dom';
import { AuthContext }      from '../context/Auth.context.jsx';
import { Button, Space }    from 'antd';      


// PAGE COMPONENT | WELCOME PAGE
export default function Welcome () {

let {isLoggedIn} = useContext(AuthContext);

return (
    <>
    <main id='homepage'>
        {/* <img src='/assets/appicon.png' alt='finCockpit' /> */}
        <h1>Welcome to Skweez</h1>
        <h2>Ready for the Challenge!</h2>

        {!isLoggedIn && (

            <Space direction='horizontal'>
                <Link to='/login'><Button type='primary'>Login</Button></Link>
                <Link to='/signup'><Button type='default' style={{backgroundColor:'#12934f'}} >Create Account</Button></Link>
            </Space>)}
    </main>
    </>);
};