
import React, { useContext }                    from 'react';
import { Link }                                 from 'react-router-dom';
import { Breadcrumb }                           from 'antd';
import { AuthContext }                          from '../context/Auth.context.jsx';


import { HomeOutlined, UserOutlined, LineChartOutlined, SettingOutlined, FormOutlined, CodeOutlined,
        QuestionCircleOutlined, AimOutlined, AlertOutlined, TrophyOutlined, SnippetsOutlined } 
        
    from '@ant-design/icons';

const profilMenu = [
    {key: '1', label: (<Link to='/profile'><SettingOutlined /> my Profile</Link>)},
    {key: '2', label: (<Link to='/profile/stats'><TrophyOutlined /> my Stats</Link>)},
    {key: '3', label: (<Link to='/profile/quizz'><SnippetsOutlined /> my Quizz</Link>)},
    {key: '4', label: (<Link to='/profile/questions'><CodeOutlined /> my Questions</Link>)}
];

const quizzMenu = [
    {key: '1', label: (<Link to='/quizz/catalog'><><AimOutlined /> <span> Explore catalog</span></></Link>)},
    {key: '2', label: (<Link to='/quizz/new'>    <><FormOutlined /><span> Create a quizz</span></></Link>)}
];


export default function Menu () {

let { user, isLoggedIn } = useContext(AuthContext);


return (
    <>
    <Breadcrumb 
        items={[
            {title: <Link to='/'><><HomeOutlined /><span> Skweez</span></></Link>},
            {title: <><UserOutlined /><span>{isLoggedIn ? ` ${user._username}`: ' Guest'}</span></>, menu: {items: profilMenu}},
            {title: <><QuestionCircleOutlined /><span> Quizz!</span></>, menu: {items: quizzMenu}},
            {title: <Link to='/quickmatch'><><AlertOutlined /><span> Run Quick Test!!</span></></Link>}
    ]}/>
    </>)
};