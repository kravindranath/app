import React from 'react';
import ReactDOM from 'react-dom';

function Home(){
    return(
        <h2>Home: Hello World!</h2>
    );
}

ReactDOM.render(<Home />, document.getElementById('app'));
