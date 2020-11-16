import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const el = document.createElement('div');

export const Modal = props => {
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    }
  }, []);
  return props.visible ? ReactDOM.createPortal(props.children, el) : null;
}

Modal.propTypes = {
  visible: PropTypes.bool
};