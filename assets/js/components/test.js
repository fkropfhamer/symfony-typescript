import React from 'react';
import ReactDOM from 'react-dom';

export default class Test extends React.Component {
    render() {
        return (<h1>React</h1>);
    }
}

const root = document.getElementById('test');

if (root) {
    ReactDOM.render(<Test />, root);
}
