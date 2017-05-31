'use strict';

import React from 'react';
import { Link } from 'react-router';
import MainHeader from './MainHeader';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header className="container-fluid">
          <div className="row-fluid">
            <MainHeader />
          </div>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer></footer>
      </div>
    );
  }
}
