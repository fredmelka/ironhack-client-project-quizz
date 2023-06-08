
import React, { useContext }                    from 'react';
import { Link }                                 from 'react-router-dom';
import { Breadcrumb }                           from 'antd';
import { AuthContext }                          from '../context/Auth.context.jsx';

import { HomeOutlined, UserOutlined, LineChartOutlined, SettingOutlined, FormOutlined, CodeOutlined,
        QuestionCircleOutlined, AimOutlined, AlertOutlined, TrophyOutlined, SnippetsOutlined } 
        
    from '@ant-design/icons';

const profileMenu = [
    {key: '1', label: (<Link to='/profile/quizz'><SnippetsOutlined /> my Quizz</Link>)},
    {key: '2', label: (<Link to='/profile/questions'><CodeOutlined /> my Questions</Link>)},
    {key: '3', label: (<Link to='/profile/stats'><TrophyOutlined /> my Stats</Link>)},
    {key: '4', label: (<Link to='/profile'><SettingOutlined /> my Profile</Link>)}
];

const quizzMenu = [
    {key: '1', label: (<Link to='/quizz/catalog'><><AimOutlined /><span> Explore catalog</span></></Link>)},
    {key: '2', label: (<Link to='/quizz/new'>    <><FormOutlined /><span> Create a quizz</span></></Link>)}
];

// COMPONENT | MENU AND NAVIGATION BAR
export default function Menu () {
    
let { user, isLoggedIn } = useContext(AuthContext);

let userIconColor = isLoggedIn ? 'green' : 'red';

return (
    <>
    <Breadcrumb 
        items={[
            {title: <Link to='/'><><HomeOutlined /><span> Skweez</span></></Link>},
            {title: <><UserOutlined style={{color: userIconColor}} /><span>{isLoggedIn ? ` ${user._username}`: ' Guest'}</span></>, menu: {items: profileMenu}},
            {title: <><QuestionCircleOutlined /><span> Quizz!</span></>, menu: {items: quizzMenu}},
            {title: <Link to='/quickmatch'><><AlertOutlined /><span> Run Quick Test!!</span></></Link>}
    ]}/>
    </>)
};