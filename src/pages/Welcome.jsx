
import React                            from 'react';
import { useContext }                   from 'react';
import { Link }                         from 'react-router-dom';
import { AuthContext }                  from '../context/Auth.context.jsx';
import { Divider, Tag }                 from 'antd';      

export default function Welcome () {

let {isLoggedIn} = useContext(AuthContext);

return (
    <>
    <main id='homepage'>
        {/* <img src='/assets/appicon.png' alt='finCockpit' /> */}
        <h1>Welcome to Skweez</h1>
        <h2>Ready for the Challenge!</h2>

        {!isLoggedIn && (
        <Divider>
        <Link to='/login'><Tag color='geekblue-inverse'>Sign In</Tag></Link>
        <Link to='/signup'><Tag color='#faad14'>Join</Tag></Link>
        </Divider>)}

    </main>
    </>);
};