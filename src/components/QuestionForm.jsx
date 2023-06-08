
import React                                    from 'react';
import { useState }                             from 'react';
import { message, Space, Typography }           from 'antd';
import { Button, Input, Select }                from 'antd';
import { AuthContext }                          from '../context/Auth.context.jsx';
import {  }                                     from '../utils/server.calls.js';

import {BarsOutlined, FontSizeOutlined} from '@ant-design/icons'

// PAGE COMPONENT | LOG IN 
export default function Questionform () {

let { Text } = Typography;

let [messageApi, contextHolder] = message.useMessage();
let messageWelcome = (string) => messageApi.success(`Welcome back ${string}!`, 3, returnWelcomePage);

let [_level, set_level ] = useState('Easy');
let [_language, set_language] = useState('French');
let [_tags, set_tags] = useState([]);
let [_label, set_label] = useState('');


let update_level = (event) => {set_level(event.target.value);};
let update_language = (event) => {set_language(event.target.value);};
let update_tags = (event) => {set_tags(event.target.value.split(' '));};
let update_label = (event) => {set_label(event.target.value);};


return (
    <>
    {contextHolder}
    <form>
    <br />
    <Space direction='vertical' size='large'>

        <Space direction='horizontal' size='large'>

    <Select
        style={{width: '29vw'}}
        size='large'
        allowClear
        showSearch
        placeholder = 'Set Difficulty'
        options={[{label: 'Easy', value: 'Easy'}, {label: 'Intermediate', value: 'Intermediate'}, {label: 'Hard', value: 'Hard'}]}
        onChange={update_level}/>
    
    <Select
        style={{width: '29vw'}}
        size='large'
        allowClear
        showSearch
        placeholder = 'Declare Language'
        options={[{label: 'French', value: 'French'}, {label: 'English', value: 'English'}, {label: 'Chinese', value: 'Chinese', disabled: true}]}
        onChange={update_language}/>

        </Space>

    <Input
        style={{width: '60vw'}}
        size='large'
        addonBefore={<BarsOutlined />}
        allowClear
        type='text'
        value={_tags}
        placeholder='Add Tags'
        onChange={update_tags}/>   

    <Input
        style={{width: '60vw'}}
        size='large'
        addonBefore={<FontSizeOutlined />}
        allowClear
        type='text'
        value={_label}
        placeholder='Enter Question here'
        onChange={update_label}/>        
    
    
    </Space>
    </form>

    </>)
};