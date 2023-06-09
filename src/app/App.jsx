
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
import QuestionDetails                  from '../pages/Questions.details.jsx';
import QuestionsBank                    from '../pages/Questions.bank.jsx';
import Root                             from '../pages/Root.jsx';
import Signup                           from '../pages/Signup.jsx';
import Welcome                          from '../pages/Welcome.jsx';
import Workinprogress                   from '../pages/Work.in.progress.jsx';

import './App.css';


// APP | ROUTES AND NAVIGATION
export default function App() {

// Declare here variable 'router' under which all routes and paths are set for web navigation
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> } errorElement={ <ErrorPage /> }>

    <Route index='true' element={ <Welcome /> } />

    <Route path='/login' element={ <Login /> } />
    <Route path='/signup' element={ <Signup /> } />

    <Route path='/profile/questions' element={ <Private> <QuestionsBank /> </Private> } />

    <Route path='/questions/:_id' element={ <Private> <QuestionDetails /> </Private>} />

    {/* Routes yet to be done */}
    <Route path='/profile' element={ <Workinprogress /> } />
    <Route path='/profile/stats' element={ <Workinprogress /> } />
    <Route path='/profile/quizz' element={ <Workinprogress /> } />
    <Route path='/quizz/catalog' element={ <Workinprogress /> } />
    <Route path='/quizz/new' element={ <Workinprogress /> } />
    <Route path='/quickmatch' element={ <Workinprogress /> } />

    <Route path='*' element={ <Oopsies /> } />

  </Route>));

return (
  <>
  <ConfigProvider theme={{algorithm: theme.defaultAlgorithm, token: {colorPrimary: '#faad14', fontSize: 20}}}>
    <RouterProvider router={ router }/>
  </ConfigProvider>
  </>);
};