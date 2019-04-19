import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './App';
import * as serviceWorker from './serviceWorker';

// My css for Components
// import './components/ModalWindow/ModalWindow.css';
// import './components//TaskButtonVision/TaskButtonVision.css';
// import './components/Task/Task.css';

ReactDOM.render(<TodoList/>, document.getElementById('root'));
// ReactDOM.render(<TodoList />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();