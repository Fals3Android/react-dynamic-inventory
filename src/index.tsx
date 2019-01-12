import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MobxReactDevtools from 'mobx-react-devtools';
import App from './app';

ReactDOM.render(
    <div>
    <App/>
    <MobxReactDevtools/>
    </div>,
    document.getElementById('root')
);