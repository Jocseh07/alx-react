import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(
        `Component ${
          WrappedComponent.name ? `${WrappedComponent.name} ` : ''
        }is mounted`,
      );
    }

    componentWillUnmount() {
      console.log(
        `Component ${
          WrappedComponent.name ? `${WrappedComponent.name} ` : ''
        }is going to unmount`,
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${
    WrappedComponent.displayName || 'Component'
  })`;

  return WithLoggingComponent;
};

export default WithLogging;
