import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './index.css';
import './Css/Styles.css';
import './App.css';
import Preview from './Studio/Preview';
import Settings from './Studio/Settings';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Preview/>, document.getElementById('preview'));
ReactDOM.render(<Settings/>, document.getElementById('settings'));
registerServiceWorker();
