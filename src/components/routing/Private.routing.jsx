
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { Navigate } from 'react-router-dom';
import { Spin } from 'antd';


// FUNCTION | CONDITIONAL ROUTING
export default function Private ({children}) {

    let {isLoggedIn, isLoading} = useContext(AuthContext);

    if (isLoading) {return <Spin size='Large'></Spin>};

    if (!isLoggedIn) {return <Navigate to='/' />;} else {return children;};
};
