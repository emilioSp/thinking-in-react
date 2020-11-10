import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Modal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool
  }
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return this.props.visible ? ReactDOM.createPortal(this.props.children, this.el) : null;
  }
}