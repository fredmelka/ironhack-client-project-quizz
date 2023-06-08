
import React, { useState }                              from 'react';
import { useNavigate }                                  from 'react-router-dom';
import { message, Modal, Radio, Space, Typography }     from 'antd';
import { Button, Input, InputNumber,  Select }          from 'antd';
import { createQuestion }                               from '../utils/server.calls.js';
import AnswerForm                                       from './Answer.form.jsx';

import {BarsOutlined, BulbOutlined, FontSizeOutlined,
        FieldBinaryOutlined, FormOutlined} 
                                                        from '@ant-design/icons'

// PAGE COMPONENT | LOG IN 
export default function Questionform () {

let { Text } = Typography;
let navigate = useNavigate();
let [messageApi, contextHolder] = message.useMessage();
let messageSuccess = (string) => messageApi.success(`New Question added id: ${string}`, 3, resetFields);
let messageError = (string) => messageApi.error(`Error ${string}`, 3, resetFields);

let [_level, set_level ]                    = useState('Easy');
let [_language, set_language]               = useState('French');
let [_tags, set_tags]                       = useState([]);
let [_label, set_label]                     = useState('');
let [_answers, set_answers]                 = useState([]);
let [_picture, set_picture]                 = useState('');

let [_text, set_text]                       = useState('');
let [_value, set_value]                     = useState(0);
let [showAnswerModal, setShowAnswerModal]   = useState(false);

let resetFields = () => {set_level('Easy'); set_language('French'); set_tags([]), set_label(''), set_answers([]), set_picture('');};

// SUB-FUNCTION | SERVICE CALL TO POST NEW QUESTION TO DATABASE
async function postQuestion () {
    
    let questionToCreate = {_tags, _level, _language, _label, _answers, _picture};

    // Rejection for minimum inconsistency data (FRONT controls)
    if (!_label || _answers.length == 0) {messageError('- No Sufficient Data to post!'); return;};

    try {
        let response = await createQuestion(questionToCreate);
        if (response.success) {messageSuccess(response.message)} else {messageError(response.message)};
        return response;
    }
    catch (error) {console.log(error);};
};

return (
    <>
    {contextHolder}
    <form>
    <br />
    <Space direction='vertical' size='large'>

        <Space direction='horizontal' size='large'>

    <Radio.Group size='large' onChange={(event) => {set_level(event.target.value);}} defaultValue='Easy'>
        <Radio.Button value='Easy'>Easy</Radio.Button>
        <Radio.Button value='Intermediate'>Intermediate</Radio.Button>
        <Radio.Button value='Hard'>Advanced</Radio.Button>
    </Radio.Group>

    <Radio.Group size='large' onChange={(event) => {set_language(event.target.value);}} defaultValue='French'>
        <Radio.Button value='French'>French</Radio.Button>
        <Radio.Button value='English'>English</Radio.Button>
        <Radio.Button disabled value='Chinese'>Chinese</Radio.Button>
    </Radio.Group>

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
    
    <Button type='default' onClick={() => {setShowAnswerModal(true)}} ><FormOutlined /> add Answer</Button>
    
        <Modal
            width={900}
            closable={false}
            title={'New Answer'}
            centered
            open={showAnswerModal}
            onOk={() => {set_answers([{_text, _value}, ..._answers]); set_text(''); set_value(0); setShowAnswerModal(false);}} 
            onCancel={() => {set_text(''); set_value(0); setShowAnswerModal(false)}}>
            
        <Space direction='horizontal' size='large'>
            <Input
                style={{width: '700px'}}
                size='large'
                addonBefore={<BulbOutlined />}
                allowclear
                type='text'
                value={_text}
                placeholder='Input answer'
                onChange={(event) => set_text(event.target.value)}
            />
            <InputNumber
                width={150}
                size='large'
                addonBefore={<FieldBinaryOutlined />}
                allowclear
                defaultValue={0}
                onChange={(value) => set_value(value)}    
            />
        </Space>
        </Modal>

    <AnswerForm answerList={_answers} />

    <Button type='primary' size='large' onClick={postQuestion}>Add Question!</Button>

    </Space>
    </form>
    </>)
};