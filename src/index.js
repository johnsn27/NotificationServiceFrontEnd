import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
<<<<<<< Updated upstream
import Main from './Main/Main';

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>, document.getElementById('root')
);
=======
import Login from './Login/Login';
import Registration from './Registration/RegistrationButton';

ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<Registration />, document.getElementById('root'));
>>>>>>> Stashed changes

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
