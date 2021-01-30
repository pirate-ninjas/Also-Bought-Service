import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import './components/style.css';

const App = lazy(() => import('./components/App'));

ReactDOM.render(<App />, document.getElementById('app2'));
