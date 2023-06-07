
import React                                from 'react';
import { Link }                             from 'react-router-dom';
import { useState, useEffect }              from 'react';
import { Button, message, Skeleton}         from 'antd';
import { Space, Table, Tag, Typography }    from 'antd';


// COMPONENT | TABLE OF QUESTIONS OF A USER
export default function QuestionTable({questionsList}) {

let  { Text } = Typography;

let [data, setData] = useState([]);

const colorLevel = (level) => {switch (level) {case 'Easy': return 'success'; case 'Intermediate': return 'warning' ; case 'Hard': return 'danger'}};
const colorTag = (tag) => tag.length > 5 ? '#87d068' : '#2db7f5';

useEffect(() => {setData(questionsList), []})

console.log('tutu', questionsList);

const Columns = [
        {title: 'Level', dataIndex: '_level', key:'_level',
                    render: (_, record) => (<Text type={colorLevel(record._level)}>{record._level}</Text>)},

        {title: 'Question', dataIndex: '_label', key: '_label',
                    render: (_, record) => (<Text type='secondary'>{record._label}</Text>)},

        {title: 'Tags', dataIndex: '_tags', key: '_tags',
                    render: (_, {_tags}) => (_tags.map((tag) => <Text code style={{color: colorTag(tag)}}>{tag}</Text>))},

        {title: 'Action', key: 'action',
                    render: (_, record) => (
                                            <Space size='small'>
                                                <Button onClick={() => {} }>Edit</Button>
                                                <Button type='danger' onClick={() => {} }>Delete</Button> 
                                            </Space>)}
];


return (
    <>
    <Skeleton active loading={data.length === 0} title={false} paragraph={{rows: 3, width: 800}}>
        <Table dataSource={data} columns={Columns} />
    </Skeleton>  
    </>);
};