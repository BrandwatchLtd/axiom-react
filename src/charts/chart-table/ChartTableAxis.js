import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Base,
  Icon,
  Link,
  Paragraph,
  Small,
  Strong,
} from 'bw-axiom';
import './ChartTableAxis.css';

export default class ChartTableAxis extends Component {
  static propTypes = {
    labels: PropTypes.array,
    title: PropTypes.string,
  };

  static defaultProps = {
    labels: [
      '0%',
      '10%',
      '20%',
      '30%',
      '40%',
      '50%',
      '60%',
      '70%',
      '80%',
      '90%',
      '100%',
    ],
  };

  static contextTypes = {
    isExpanded: PropTypes.bool.isRequired,
    collapsible: PropTypes.bool.isRequired,
    expandButtonSuffix: PropTypes.string.isRequired,
    labelColumnWidth: PropTypes.string.isRequired,
    rowsCount: PropTypes.number.isRequired,
    toggleExpand: PropTypes.func.isRequired,
  };

  render() {
    const {
      collapsible,
      expandButtonSuffix,
      isExpanded,
      labelColumnWidth,
      rowsCount,
      toggleExpand,
    } = this.context;
    const { labels, title, ...rest } = this.props;
    const flexBasis = `${100 / (labels.length - 1)}%`;

    return (
      <Base { ...rest }
          className="ax-chart-table__axis"
          space="tiny">
        <Base className="ax-chart-table__axis-row-container" space="tiny">
          <div
              className="ax-chart-table__axis-button-container"
              style={ { flexBasis: labelColumnWidth } }>
            {collapsible && (
              <Link onClick={ toggleExpand } style="subtle">
                {isExpanded ? (
                  <Strong>
                    <Icon name="box-collapse"/>
                    <span className="ax-chart-table__collapse-expand-text">
                      Collapse
                    </span>
                  </Strong>
                ) : (
                  <Strong>
                    <Icon name="box-expand"/>
                    <span className="ax-chart-table__collapse-expand-text">
                      {`See All ${rowsCount} ${expandButtonSuffix}`}
                    </span>
                  </Strong>
                )}
              </Link>
            )}
          </div>

          <div
              className="ax-chart-table__axis-labels">
            { labels.map((x) =>
              <div
                  className="ax-chart-table__axis-label"
                  key={ x }
                  style={ { flexBasis } }>
                <Small textColor="subtle">{ x }</Small>
              </div>
            ) }
          </div>
        </Base>

        { title && (
          <Paragraph textCenter={ true } textColor="subtle">
            <Small>{ title }</Small>
          </Paragraph>
        ) }
      </Base>
    );
  }
}
