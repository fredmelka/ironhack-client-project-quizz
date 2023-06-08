
import React                                    from 'react';
import { useState }                             from 'react';
import { message, Space, Typography }           from 'antd';
import { Button, Input, Radio, Select }         from 'antd';
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


return (
    <>
    {contextHolder}
    <form>
    <br />
    <Space direction='vertical' size='large'>

        <Space direction='horizontal' size='large'>

    <Radio.Group size='large' onChange={(event) => {set_language(event.target.value);}} defaultValue='Easy'>
        <Radio.Button value='Easy'>Easy</Radio.Button>
        <Radio.Button value='Intermediate'>Intermediate</Radio.Button>
        <Radio.Button value='Advanced'>Advanced</Radio.Button>
    </Radio.Group>

    <Select
        style={{width: '31vw'}}
        size='large'
        allowClear
        showSearch
        placeholder = 'Declare Language'
        options={[{label: 'French', value: 'French'}, {label: 'English', value: 'English'}, {label: 'Chinese', value: 'Chinese', disabled: true}]}
        onChange={(event) => {set_language(event.target.value);}}
    />

        </Space>

    <Input
        style={{width: '60vw'}}
        size='large'
        addonBefore={<BarsOutlined />}
        allowClear
        type='text'
        value={_tags}
        placeholder='Add Tags'
        onChange={(event) => {set_tags(event.target.value.split(' '));}}
    />   

    <Input
        style={{width: '60vw'}}
        size='large'
        addonBefore={<FontSizeOutlined />}
        allowClear
        type='text'
        value={_label}
        placeholder='Enter Question here'
        onChange={(event) => {set_label(event.target.value);}}
    />        
    
    </Space>
    </form>
    </>)
};