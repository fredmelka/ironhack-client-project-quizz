
import React, { useState, useEffect }       from 'react';
import { Button, Input, InputNumber }       from 'antd';
import { List, Typography }                 from 'antd';

import { BulbOutlined } from '@ant-design/icons';


// COMPONENT | ANSWER LIST
export default function AnswerList ({answerList}) {

let { Text } = Typography;

// let [_answers, set_answers] = useState([]);

// let [_answer_text, set_answer_text] = useState(null);
// let [_answer_value, set_answer_value] = useState(0);

let color = (value) => value > 0 ? 'success' : 'default';   

return (
    <>
    <List
        size='small'
        bordered
        itemLayout='horizontal'
        dataSource={answerList}
        renderItem =  {(item, index) => (
            <List.Item>
                <Text type={color(item._value)}>{`${item._text} (${item._value})`}</Text>
            </List.Item>)}
        style={{textAlign: 'left'}}
    />
    </>)
};



{/* <List.Item key={index}>

        header={<Button>Add</Button>}

<Input 
        style={{width: '30vw'}}
        size='large'
        addonBefore={<BulbOutlined />}
        allowClear
        type='text'
        value={_tags}
        placeholder='Add Tags'
        onChange={(event) => {set_tags(event.target.value.split(' '));}}
        />


</List.Item> */}