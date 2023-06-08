
import React                        from 'react';
import { useNavigate }              from 'react-router-dom';
import { Divider, Tag, Typography } from 'antd';


// COMPONENT | FOOTER
export default function Footer () {

let  { Text } = Typography;

let navigate = useNavigate();
let goBack = () => {navigate(-1)};
let goForward = () => {navigate(+1)};
let goHome = () => {navigate('/')}

return (
    <footer>
    <Divider>
        <Tag onClick={goBack}>Back</Tag>
        <Text onClick={goHome} code type='warning'>Web development ahead | Coders currently at work.</Text>
        <Tag onClick={goForward}>Forward</Tag>
    </Divider>
    </footer>);
};