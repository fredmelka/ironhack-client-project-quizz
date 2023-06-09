
import React, { useState, useEffect }                           from 'react';
import { useNavigate }                                          from 'react-router-dom';
import AnswerTable                                              from './Answer.table.jsx';
import { Empty, Popover, Skeleton, Space, Table, Typography }   from 'antd';
import { EditOutlined, DeleteOutlined, BulbOutlined }           from '@ant-design/icons';


// COMPONENT | TABLE OF QUESTIONS OF A USER
export default function QuestionTable({questionsList, removeOneQuestion}) {

let  { Text } = Typography;
let navigate = useNavigate();
let [data, setData] = useState(null);

const colorLevel = (level) => {switch (level) {case 'Easy': return 'success'; case 'Intermediate': return 'warning' ; case 'Hard': return 'danger';}};
const colorTag = (tag) => tag.length > 5 ? '#87d068' : '#2db7f5';

// RENDERING OF THE QUESTION TABLE
const Columns = [
    
        {title: 'Level', dataIndex: '_level', key:'_level',
                    render: (_, record) => (<Text type={colorLevel(record._level)}>{record._level}</Text>)},

        {title: 'Question', dataIndex: '_label', key: '_label',
                    render: (_, record) => (<Text type='secondary'>{record._label}</Text>)},

        {title: 'Tags', dataIndex: '_tags', key: '_tags',
                    render: (_, {_tags}) => (_tags.map((tag) => <Text code style={{color: colorTag(tag)}}>{tag}</Text>))},

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
            ? <Table style={{width: '80vw'}} dataSource={data} columns={Columns} />
            : <Empty />}
    </Skeleton>  
    </>);
};