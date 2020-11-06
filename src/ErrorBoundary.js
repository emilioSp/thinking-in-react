import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('error', error);
    console.log('errorInfo', errorInfo);
    this.setState({ error: error.message });
  }

  render() {
    if (this.state.error) {
      return <div>Error boundary: {this.state.error}</div>
    }

    return this.props.children;
  }
}