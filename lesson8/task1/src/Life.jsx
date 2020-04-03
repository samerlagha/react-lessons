import React, { Component } from 'react';

class Life extends Component {
    constructor(props) {
        super(props);
        console.log(import React, { Component } from 'react';

        class Life extends Component {
            constructor(props) {
                super(props);
                console.log('constructor')
            }
        
            componentDidMount() {
                console.log('componentDidMount: API calls, subscriptions')
            }
        
            shouldComponentUpdate(nextProps, nextState) {
                console.log('shoudlComponentUpdate(nextProps, nextState): decide to render or not to render');
                return true;
            }
        
            componentDidUpdate(prevProps, prevState) {
                console.log('componentDidUpdate(prevProps, prevState): some updates based on new props')
            }
        
            componentWillUnmount() {
                console.log('componentWillUnmount(): cleanup before DOM related to component will be removed')
            }
        
            render() {
                console.log('return React element to build DOM' )
                return <div className="number">{this.props.number}</div>;
            }
        }
        
        export default Life;)
    }

    componentDidMount() {
        console.log('componentDidMount: API calls')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('decide to render or not to render');
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('some updates based on new props')
    }

    componentWillUnmount() {
        console.log('cleanup before DOM related to component will be removed')
    }

    render() {
        console.log('React element to build DOM')
        return <div className="number">{this.props.number}</div>;
    }
}

export default Life;