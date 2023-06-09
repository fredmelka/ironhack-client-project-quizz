
import React, { useState }                              from 'react';
import { useNavigate }                                  from 'react-router-dom';
import { message, Modal, Radio, Space, Typography }     from 'antd';
import { Button, Input, InputNumber }                   from 'antd';
import { updateOneQuestion }                            from '../utils/server.calls.js';
import AnswerForm                                       from './Answer.form.jsx';

import {BarsOutlined, BulbOutlined, FontSizeOutlined,
        FieldBinaryOutlined, FormOutlined} 
                                                        from '@ant-design/icons'


// COMPONENT | QUESTION EDITOR 
export default function QuestionEditor ({questionDetails}) {

let { Text } = Typography;
let navigate = useNavigate();
let [messageApi, contextHolder] = message.useMessage();
let messageSuccess = (string) => messageApi.success(`Question updated! id: ${string}`, 3, navigate('/profile/questions'));
let messageError = (string) => messageApi.error(`Error ${string}`, 3, resetFields);
	
let [_level, set_level ]                    = useState(questionDetails._level);
let [_language, set_language]               = useState(questionDetails._language);
let [tags, setTags]                         = useState(questionDetails._tags.join(' ')); // JOINED AS STRING FOR NOW  ==> Will be renamed and turned into Array '_Tags' of strings right before posting
let [_label, set_label]                     = useState(questionDetails._label);
let [_answers, set_answers]                 = useState(questionDetails._answers);
let [_picture, set_picture]                 = useState('');
	
let [_text, set_text]                       = useState('');
let [_value, set_value]                     = useState(0);
let [showAnswerModal, setShowAnswerModal]   = useState(false);

// SUB-FUNCTION | SERVICE CALL TO UPDATE QUESTION IN DATABASE
async function updateQuestion () {
		
	// Tags are trimmed and turned into an Array of strings
	let _tags = tags.trim().split(' ');

	// Object Question to update
	let {_id: questionId} = questionDetails;
	let dataToUpdate = {_tags, _level, _language, _label, _answers, _picture};

	// Rejection for minimum inconsistency data (FRONT CONTROL)
	if (!_label || _answers.length == 0) {messageError('- No more Sufficient Data to update!'); return;};

	try {
		let response = await updateOneQuestion(questionId, dataToUpdate);
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
	
	<Radio.Group size='large' onChange={(event) => {set_level(event.target.value);}} defaultValue={questionDetails._level}>
		<Radio.Button value='Easy'>Easy</Radio.Button>
		<Radio.Button value='Intermediate'>Intermediate</Radio.Button>
		<Radio.Button value='Hard'>Advanced</Radio.Button>
	</Radio.Group>
	
	<Radio.Group size='large' onChange={(event) => {set_language(event.target.value);}} defaultValue={questionDetails._language}>
		<Radio.Button value='French'>French</Radio.Button>
		<Radio.Button value='English'>English</Radio.Button>
		<Radio.Button disabled value='Chinese'>Chinese</Radio.Button>
	</Radio.Group>
	
		</Space>
	
	<Input
		style={{width: '60vw'}}
		size='large'
		addonBefore={<BarsOutlined />}
		allowClear={true}
		type='text'
		value={tags}
		placeholder='Add Tags'
		onChange={(event) => {setTags(event.target.value);}}
	/>   
	
	<Input
		style={{width: '60vw'}}
		size='large'
		addonBefore={<FontSizeOutlined />}
		allowClear={true}
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
				allowClear={true}
				type='text'
				value={_text}
				placeholder='Input answer'
				onChange={(event) => set_text(event.target.value)}
			/>
			<InputNumber
				size='large'
				addonBefore={<FieldBinaryOutlined />}
				allowClear={true}
				defaultValue={0}
				onChange={(value) => set_value(value)}    
			/>
		</Space>
		</Modal>
	
	<AnswerForm answerList={_answers} />
	<Space size='large'>
		<Button type='primary' size='large' onClick={updateQuestion}>Update the Question?</Button>
		<Button type='default' size='large' onClick={() => navigate('/profile/questions')}>Cancel</Button>
	</Space>
	
	</Space>
	</form>
	</>)
};