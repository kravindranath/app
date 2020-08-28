import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function ClientApp(){
    console.log('test');
    return(
        <App />
    )
}

ReactDOM.render(<ClientApp />, document.getElementById('app'));
