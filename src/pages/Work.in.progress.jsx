
import React                from 'react';
import { useNavigate }      from 'react-router-dom';
import { Typography }       from 'antd';


// PAGE COMPONENT | WORK IN PROGRESS FOR ROUTES NOT DONE
export default function Workinprogress () {

let { Text } = Typography;
let navigate = useNavigate();
let returnHome = (event) => {event.preventDefault(); navigate('/');};

return (
    <>
    <img src='/img/skweez-logo.png' alt='skweez' />
    <h2>| Coders at Work |</h2>
    <h3>Please be patient while a new deploy will be made shortly.</h3>
    <Text code>You can return home by clicking <strong onClick={returnHome}>here</strong>.</Text>
    </>);
};