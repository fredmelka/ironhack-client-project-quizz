
import React                    from 'react';
import { List, Typography }     from 'antd';
import { FileTextOutlined }     from '@ant-design/icons';


// COMPONENT | ANSWER LIST
export default function AnswerForm ({answerList}) {

let { Text } = Typography;
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
                <Text type={color(item._value)}><FileTextOutlined />{` ${item._text} (${item._value})`}</Text>
            </List.Item>)}
        style={{textAlign: 'left'}}
    />
    </>)
};