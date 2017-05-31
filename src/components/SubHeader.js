'use strict';

import React from 'react';

export default class SubHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.columnClass = this.props.featured ? 'col-sm featured' : 'col-sm-1';

    const divStyle = {
      backgroundImage: `url(static/img/${this.props.image})`,
      color: 'white',
      height: '100%',
    };

    return (
      <div className={ "sub_header " + this.columnClass } style={ divStyle } onClick={ this.props.featured ? null : () => this.props.handleSubHeaderClick(this.props.name) }>
        <header className="sub_header_headline">
          { this.props.headline }
        </header>
        <section className="sub_header_body">
          <p>
            { this.props.body }
          </p>
          <ul>
          {
            this.props.links.map( (linkName) => {
              return (
                <li key={ linkName } onClick={ () => this.props.handleSubHeaderClick(linkName) }>
                  { linkName }
                </li>
              );
            })
          }
          </ul>
        </section>
      </div>
    );
  }
}
