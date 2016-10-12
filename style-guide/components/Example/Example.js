import React, { Children, Component, PropTypes } from 'react';
import Card from 'bw-axiom/components/card/Card';
import CardTitle from 'bw-axiom/components/card/CardTitle';
import CardContent from 'bw-axiom/components/card/CardContent';
import Heading from 'bw-axiom/components/typography/Heading';
import { filterRender } from 'style-guide/utils/example-filter';
import Snippet from './Snippet';

export default class Example extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    name: PropTypes.string.isRequired,
  };

  render() {
    const {
      name,
      children,
    } = this.props;

    return (
      <Card>
        <CardTitle>
          <Heading level={ 4 }>{ name }</Heading>
        </CardTitle>

        <CardContent>
          { Children.toArray(children).reduce((children, child) => {
            if (child.type === Snippet) {
              children.push(filterRender(child.props.children));
            }

            children.push(child);

            return children;
          }, []) }
        </CardContent>
      </Card>
    );
  }
}
