
import React                            from 'react';
import { Route }                        from 'react-router-dom';
import { RouterProvider }               from 'react-router-dom';
import { createBrowserRouter }          from 'react-router-dom';
import { createRoutesFromElements }     from 'react-router-dom';
import { ConfigProvider, theme }        from 'antd';

import Private from '../components/routing/Private.routing.jsx';

import ErrorPage                        from '../pages/Error.jsx';
import Login                            from '../pages/Login.jsx';
import Oopsies                          from '../pages/Oopsies.jsx';
import Questions                        from '../pages/Questions.jsx';
import Root                             from '../pages/Root.jsx';
import Signup                           from '../pages/Signup.jsx';
import Welcome                          from '../pages/Welcome.jsx';

import './App.css';


export default function App() {

// Declare here variable 'router' under which all routes and paths are set for web navigation
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> } errorElement={ <ErrorPage /> }>

    <Route index='true' element={ <Welcome /> } />
    <Route path='/login' element={ <Login /> } />
    <Route path='/signup' element={ <Signup /> } />

    <Route path='/profile/questions' element={ <Private> <Questions /> </Private> } />

    <Route path='*' element={ <Oopsies /> } />
  </Route>));

return (
  <>
  <ConfigProvider theme={{algorithm: theme.defaultAlgorithm, token: {colorPrimary: '#faad14', fontSize: 20}}}>
    <RouterProvider router={ router }/>
  </ConfigProvider>
  </>);
};