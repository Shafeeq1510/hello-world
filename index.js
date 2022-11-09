import React from 'react';
import ReactDOM from 'react-dom/client';

import Apps from './Apps';
import { BrowserRouter as Router} from 'react-router-dom';
import { StateProvider } from './StateProvider';
import reducer, {initialState} from "./reducer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <StateProvider initialState={initialState} reducer={reducer}>
   <Apps/>

   </StateProvider>
  
 </React.StrictMode>
);


// af43507ce75ed9fdb4c77a3e09890cb0
