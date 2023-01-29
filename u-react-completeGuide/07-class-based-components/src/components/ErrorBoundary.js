import { Component } from 'react';

//This is a common react component and we can do whatever we want.
class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    // will be triggered when there's an error
    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        return (
            this.state.hasError 
                ? <h1>Something went wrong</h1>
                : this.props.children
        )
    }
}

export default ErrorBoundary;