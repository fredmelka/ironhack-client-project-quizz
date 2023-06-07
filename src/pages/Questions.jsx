
import React, { useContext }                    from 'react'
import { useState, useEffect }                  from 'react';
import { AuthContext }                          from '../context/Auth.context.jsx';
import { getQuestionsFromUser }                 from '../utils/server.calls.js';
import QuestionTable                            from '../components/QuestionTable.jsx';
import { Button, Divider, Space, Typography }   from 'antd';

import {AppstoreAddOutlined}                    from '@ant-design/icons';


// PAGE COMPONENT | WELCOME PAGE
export default function Questions () {

let { Text } = Typography;

let { isLoggedIn, user } = useContext(AuthContext);
let {_id: owner} = user;

let [questionsList, setQuestionList] = useState([]);

// SUB-FUNCTION | SERVICE CALL TO GET QUESTIONS
async function getMyQuestions() {
    let myQuestions = [];
    try {myQuestions = await getQuestionsFromUser(owner);}
    catch (error) {console.log(error);};
    setQuestionList(myQuestions.data);
};

useEffect(() => {getMyQuestions()}, [owner]);


return (
    <>
    <h2>Your proprietary Questions bank</h2>
    <Divider orientation='left'>
        <Space>
            <Button type='primary' onClick={() => {}}>Add Question <AppstoreAddOutlined /></Button>
        </Space>
    </Divider>

    <Space direction='vertical'>
        <QuestionTable questionsList={questionsList} />
    </Space>
    </>);
};