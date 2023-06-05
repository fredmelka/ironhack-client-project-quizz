
import React                            from 'react';
import { Route }                        from 'react-router-dom';
import { RouterProvider }               from 'react-router-dom';
import { createBrowserRouter }          from 'react-router-dom';
import { createRoutesFromElements }     from 'react-router-dom';
import { ConfigProvider, theme }        from 'antd';

import ErrorPage                        from '../pages/Error.jsx';
import Login                            from '../pages/Login.jsx';
import Oopsies                          from '../pages/Oopsies.jsx';
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
    <Route path='/signup' element={ <Signup />} />

    <Route path='*' element={ <Oopsies /> } />
  </Route>));

return (
  <>
  <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token: {colorPrimary: '#ffec3d', fontSize: 20}}}>
    <RouterProvider router={ router }/>
  </ConfigProvider>
  </>);
};


/* ***************************
import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/