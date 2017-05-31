'use strict';

import React from 'react';
import { Link } from 'react-router';
import SubHeader from './SubHeader';
import subHeaderData from '../data/subHeaderData';

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subHeaderNames: [
        'moon'
      ]
    };
    this.handleSubHeaderClick = this.handleSubHeaderClick.bind(this);
    this.subHeaderData = subHeaderData;
  }

  handleSubHeaderClick(clickedName) {
    console.log("Clicked: " + clickedName);
    this.setState( {
        subHeaderNames: this.state.subHeaderNames.includes(clickedName) ?
          this.state.subHeaderNames.slice(0, this.state.subHeaderNames.indexOf(clickedName) + 1) :
          this.state.subHeaderNames.concat(clickedName)
    });
  }

  render() {
    const containerStyle = {
      height: 300
    };

    const rowStyle = {
      height: '100%'
    };

    return (
      <div style={ containerStyle } className='navbar-header container-fluid'>
        <div className='row' style={ rowStyle }>
          {
            this.state.subHeaderNames.map( (subHeaderName, idx) => {
                return <SubHeader
                  key={subHeaderName}
                  {...this.subHeaderData[subHeaderName]}
                  featured={idx === this.state.subHeaderNames.length - 1}
                  handleSubHeaderClick={this.handleSubHeaderClick} />
            })
          }
        </div>
      </div>
    );
  }
}
