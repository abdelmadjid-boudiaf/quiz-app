import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RoutLayout from './pages/RoutLayout.jsx';
import Settings from './pages/Settings.jsx';
import Questions from './pages/Questions.jsx';
import FinalScreen from './pages/FinalScreen.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { store } from './app/store';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RoutLayout />,
    errorElement: <ErrorPage />,
    children: [
      
      {
        index: true,
        element: <Settings />
      },
      {
        path: '/questions',
        element: <Questions />

      },
      {
        path: '/score',
        element: <FinalScreen />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
