
import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Typography } from 'antd';


// PAGE COMPONENT | ERROR PAGE
export default function ErrorPage() {

let { Text } = Typography;
let error = useRouteError();

let navigate = useNavigate();
let returnHome = (event) => {event.preventDefault(); navigate('/');};

return (
    <>
    <div id='errorPage'>
        <h2>Oops...!?</h2>
        <p>Looks like you have gone out of bounces and an error has occured.
        <br />
        A web developer should get this issue fixed shortly.
        <br />
        <strong onClick={returnHome}>Click HERE to return Home!</strong>
        </p>
        <Text code type='danger'>{error.statusText || error.message}</Text>
    </div>
    </>);
};