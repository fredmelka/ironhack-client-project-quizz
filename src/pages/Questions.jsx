
import React, { useContext }                from 'react'
import { useState, useEffect }              from 'react';
import { AuthContext }                      from '../context/Auth.context.jsx';
import { getQuestionsFromUser }             from '../utils/server.calls.js';
import QuestionTable                        from '../components/QuestionTable.jsx';
import { Divider, Space }                   from 'antd';


// PAGE COMPONENT | WELCOME PAGE
export default function Questions () {

let { isLoggedIn, user } = useContext(AuthContext);

let [questionsList, setQuestionList] = useState([]);

// SUB-FUNCTION | SERVICE CALL TO GET QUESTIONS
async function getMyQuestions() {
    let owner = user._id;
    try {
        let myQestions = await getQuestionsFromUser(owner);
        setQuestionList(myQestions.data);
    }
    catch (error) {console.log(error);};
};

useEffect(() => {getMyQuestions()}, []);
console.log('toto', questionsList);


return (
    <>
    <h2>This is My Questions page!</h2>
    <Space direction='vertical'>
        <QuestionTable questionsList={questionsList} />
    </Space>

    </>);
};