const React = require('react');
const { Component } = React;
class WordRelay extends React.Component {
    state ={
        text: 'Hello, webpack',
    };

    // eslint-disable-next-line react/require-render-return
    render(){
        return <h1>{this.state.text}</h1>;

    }
}

module.exports = WordRelay;