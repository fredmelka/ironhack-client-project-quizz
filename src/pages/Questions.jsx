
import React, { useContext }                        from 'react'
import { useState, useEffect }                      from 'react';
import { AuthContext }                              from '../context/Auth.context.jsx';
import { getQuestionsFromUser, deleteOneQuestion }  from '../utils/server.calls.js';
import QuestionTable                                from '../components/Question.table.jsx';
import QuestionForm                                 from '../components/Question.form.jsx';

import { Button, Divider, Space, Typography }       from 'antd';
import {AppstoreAddOutlined, UndoOutlined}          from '@ant-design/icons';


// PAGE COMPONENT | WELCOME PAGE
export default function Questions () {

let {  user } = useContext(AuthContext);
let {_id: owner} = user;

let [questionsList, setQuestionList] = useState([]);
let [toggleQuestionForm, setToggleQuestionForm] = useState(false);

// SUB-FUNCTION | SERVICE CALL TO RETRIEVE QUESTION LIST FROM DATABASE
async function getMyQuestions() {
    let myQuestions = [];
    try {myQuestions = await getQuestionsFromUser(owner);}
    catch (error) {console.log(error);};
    setQuestionList(myQuestions.data);
};

// SUB-FUNCTION | SERVICE CALL TO DELETE ONE QUESTION FROM DATABASE
async function removeOneQuestion (questionId) {
    try {
        let response = await deleteOneQuestion(questionId);
        if (response.success) {
                setQuestionList(questionsList.splice(questionsList.findIndex((question) => question._id === questionId)));
                getMyQuestions()};
    }
    catch (error) {console.log(error);};

};

// USE-EFFECT | MOUNTING AND UPDATING OF THE COMPONENT
useEffect(() => {getMyQuestions()}, [owner, toggleQuestionForm]);

return (
    <>
    <h2>Your proprietary Questions bank</h2>
    <Divider orientation='left'>
        <Space>
            {!toggleQuestionForm
                ?   <Button type='primary' onClick={() => {setToggleQuestionForm(!toggleQuestionForm)}}><AppstoreAddOutlined /> Add Question</Button>
                :   <Button type='default' onClick={() => {setToggleQuestionForm(!toggleQuestionForm)}}><UndoOutlined /> Return to list</Button>
            }
        </Space>
    </Divider>
            {!toggleQuestionForm
                ? ( <Space direction='vertical'>
                        <QuestionTable questionsList={questionsList} removeOneQuestion={removeOneQuestion} />
                    </Space>)
                : ( <Space direction='vertical'>
                        <QuestionForm />
                    </Space>)
            }
    </>);
};