
import React                from 'react';
import { useNavigate }      from 'react-router-dom';


// PAGE COMPONENT | WORK IN PROGRESS FOR ROUTES NOT DONE
export default function Workinprogress () {

let navigate = useNavigate();
let returnHome = (event) => {event.preventDefault(); navigate('/');};

return (
    <>
    <img src='/img/skweez-logo.png' alt='skweez' />
    <h2>Coders at Work | Please be patient while a new deploy will be made shortly.</h2>
    <p>You can return home by clicking <strong onClick={returnHome}>here</strong>.</p>
    </>);
};