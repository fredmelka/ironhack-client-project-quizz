
import React, { useContext }                        from 'react'
import { useState, useEffect }                      from 'react';
import { useParams }                                from 'react-router-dom';
import { AuthContext }                              from '../context/Auth.context.jsx';
import { getOneQuestion }                           from '../utils/server.calls.js';
import QuestionEditor                               from '../components/Question.edit.jsx';


// PAGE COMPONENT | QUESTION DETAILS
export default function QuestionDetails () {

let { _id: questionId } = useParams();

let [questionDetails, setQuestionDetails] = useState({});

async function editOneQuestion (questionId) {
    try {
        let response = await getOneQuestion(questionId);
        if (response.success) {setQuestionDetails(response.data);};
        console.log(response);
    }
    catch (error) {console.log(error);};
};

useEffect(() => {editOneQuestion(questionId)}, []);

return (
    <>
    <h2>I am here to edit and update my Question!</h2>
    {questionDetails._id && <QuestionEditor questionDetails={questionDetails} />}
    </>);
};
