import React, { Component } from 'react';




import './styles/Loader.css';
// Loader in css in case of waiting for async functions, is not the case of this app
export default class Loader extends Component {
  render() {
    return (
      <div className="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
