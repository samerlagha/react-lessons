//find elem react
const rooElement = document.querySelector('div');

//create elem react
const greetingElem = React.createElement(

    'div',
    {className:'greeting'},
    'Hello, React!'
);

ReactDOM.render(greetingElem,rooElement);