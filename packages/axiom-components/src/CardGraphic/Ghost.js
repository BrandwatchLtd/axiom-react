import React, { Component } from 'react';
import './Ghost.css';

export default class Ghost extends Component {

  render() {
    return (
      <svg className="ax-ghost" viewBox="0 0 132 186">
        <defs>
          <mask id="hole">
            <rect fill="white" height="100%" width="100%"/>
            <circle cx="36" cy="36" r="36" transform="translate(30, 48)"/>
          </mask>
        </defs>
        <circle className="ax-ghost__background" cx="36" cy="36" r="36" transform="translate(30, 48)"/>
        <g className="ax-ghost__character" transform="translate(42, 68)">
          <rect
              className="ax-ghost__body"
              height="69"
              rx="24"
              width="48"
              x="0"
              y="0">
          </rect>
          <g transform="translate(12, 15)">
            <circle className="ax-ghost__eye" cx="21" cy="5" r="5"></circle>
            <circle className="ax-ghost__eye" cx="5" cy="5" r="5"></circle>
          </g>
          <g transform="translate(12, 5)">
            <circle className="ax-ghost__eyelid" cx="5" cy="5" r="5"></circle>
            <circle className="ax-ghost__eyelid" cx="21" cy="5" r="5"></circle>
          </g>
        </g>
        <g mask="url(#hole)">
          <rect
              className="ax-ghost__card"
              height="100%"
              rx="3"
              width="100%"
              x="0"
              y="0">
          </rect>
          <g className="ax-ghost__text" transform="translate(12, 132)">
            <g>
              <rect height="6" width="30" y="0"></rect>
              <rect height="6" width="42" y="12"></rect>
              <rect height="6" width="24" y="24"></rect>
              <rect height="6" width="30" y="36"></rect>
            </g>
            <g transform="translate(78, 0)">
              <rect height="6" width="18" x="12" y="0"></rect>
              <rect height="6" width="30" x="0" y="12"></rect>
              <rect height="6" width="12" x="18" y="24"></rect>
              <rect height="6" width="18" x="12" y="36"></rect>
            </g>
          </g>
          <g transform="translate(30, 18)">
            <rect
                className="ax-ghost__card-title"
                height="6"
                width="72"
                x="0"
                y="0"></rect>
            <rect
                className="ax-ghost__card-subtitle"
                height="6"
                width="48"
                x="12"
                y="12"></rect>
          </g>
          <g fill="transparent" transform="translate(30, 48)">
            <circle cx="36" cy="36" r="36"></circle>
          </g>
        </g>
      </svg>
    );
  }
}
