
import React, { useState, useEffect }                               from 'react';
import { useNavigate }                                              from 'react-router-dom';
import AnswerTable                                                  from './Answer.table.jsx';
import { Empty, Popover, Skeleton, Space, Tag, Table, Typography }  from 'antd';
import { EditOutlined, DeleteOutlined, BulbOutlined }               from '@ant-design/icons';


// COMPONENT | TABLE OF QUESTIONS OF A USER
export default function QuestionTable({questionsList, removeOneQuestion}) {

let  { Text } = Typography;
let navigate = useNavigate();
let [data, setData] = useState(null);

const colorLevel = (level) => {switch (level) {case 'Easy': return 'success'; case 'Intermediate': return 'warning' ; case 'Hard': return 'danger';}};

const colorSet = ['magenta', 'geekblue', 'cyan', 'volcano', 'navy', '#3b5999', '#cd201f', 'gold', '#108ee9', '#f50'];
const memo = {};

const colorTag = (string) => {
    if (string in memo) {return memo.string;}
    else {memo.string = colorSet[Math.floor(Math.random() * colorSet.length)]; return memo.string;};
};

// RENDERING OF THE QUESTION TABLE
const Columns = [
    
        {title: 'Level', key:'_level',
                    render: (_, record) => (<Text type={colorLevel(record._level)}>{record._level}</Text>)},

        {title: 'Question', dataIndex: '_label', key: '_label',
                    render: (_, record) => (<Text type='secondary'>{record._label}</Text>)},

        {title: 'Tags', key: '_tags',
                    render: (_, {_tags}) => (_tags.map((tag) => <Tag color={colorTag(tag)}>{tag}</Tag>))},

        {title: 'Action', key: 'action',
                    render: (_, record) => (
                                            <Space size='middle'>
                                                <Popover content={<AnswerTable answerList={record._answers}/>} placement='left' title='Answers'>
                                                    <BulbOutlined style={{color: 'green'}} />
                                                </Popover>

                                                <EditOutlined style={{color: 'gold'}}  onClick={() => navigate(`/questions/${record._id}`)} />

                                                <DeleteOutlined style={{color: 'red'}} onClick={() => removeOneQuestion(record._id)} />
                                            </Space>)}
];

useEffect(() => {setData(questionsList), []})

return (
    <>
    <Skeleton active loading={data == null} title={false} paragraph={{rows: 5, width: 1000}}>
        {data !== null && data.length > 0  
            ? <Table size='small' style={{width: '90vw'}} dataSource={data} columns={Columns} />
            : <Empty />}
    </Skeleton>  
    </>);
};