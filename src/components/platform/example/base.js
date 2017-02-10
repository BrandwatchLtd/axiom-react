import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Platform, Dock, DockItem, Console, Canvas, Paragraph } from 'bw-axiom';

export default class PlatformExample extends Component {
  componentWillMount() {
    this.setActive(0, 0);
  }

  setActive(active) {
    this.setState({ active });
  }

  render() {
    const { active } = this.state;

    const consoleContent = [ false, true, true ];
    const containerStyle = {
      position: 'relative',
      height: 600,
      width: '100%',
      overflow: 'hidden',
    };

    return (
      <Example name="Platform">
        <div style={ containerStyle }>
          <Platform consoleWidth="26.25rem">
            <Dock>
              <DockItem
                  active={ active === 0 }
                  icon="home"
                  onClick={ () => this.setActive(0) }>

              </DockItem>

              <DockItem
                  active={ active === 1 }
                  icon="folder"
                  onClick={ () => this.setActive(1) }>

              </DockItem>

              <DockItem
                  active={ active === 2 }
                  icon="tag"
                  onClick={ () => this.setActive(2) }>

              </DockItem>
            </Dock>

            <Console isVisible={ consoleContent[active] }>
              <div style={ { padding: '1.5rem' } }>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur justo ipsum, mollis ut turpis blandit, molestie
                  blandit nibh. In ac erat at purus molestie ornare a eu augue.
                  Nullam varius lobortis volutpat. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Sed commodo tristique lorem ac finibus. Nunc vitae
                  arcu dictum, vestibulum quam non, posuere sapien. Quisque
                  aliquet, velit ut gravida imperdiet, sapien sem pharetra nisi,
                  quis laoreet nunc erat eu erat. Nunc laoreet mauris a gravida
                  rutrum. Aenean eget aliquet nisl. Aliquam mattis erat ante,
                  sit amet suscipit velit fringilla vel. Donec fermentum venenatis
                  lectus tincidunt finibus. In viverra eu sapien volutpat posuere.
                  Aliquam erat volutpat.
                </Paragraph>

                <Paragraph>
                  Pellentesque a elit ut neque auctor venenatis non sit amet sem.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse potenti. Vivamus dictum nunc non neque volutpat
                  pulvinar. Pellentesque ac dignissim purus. Etiam cursus sem sed
                  odio semper, ac porttitor mi fermentum. Vestibulum ultricies
                  ante erat, a tempus nisi fermentum at. Nullam aliquet nibh id
                  mauris pellentesque varius ut a eros. Mauris odio massa, suscipit
                  sit amet placerat eu, porta eget est. Mauris et nisi mollis,
                  apibus lectus quis, eleifend risus. Nunc facilisis purus nunc,
                  sit amet sagittis lectus facilisis eget. Phasellus non neque eu
                  nisl pellentesque scelerisque eget semper mi. Pellentesque
                  lacinia massa turpis, sit amet molestie augue finibus vel.
                </Paragraph>

                <Paragraph>
                  Mauris vel nisi ut felis maximus congue. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Pellentesque vulputate lectus vitae est laoreet cursus a ut
                  augue. Nam id lobortis est. Proin gravida dapibus ex id eleifend.
                  Donec a aliquam nulla. Sed nec pharetra urna.
                </Paragraph>

                <Paragraph>
                  Suspendisse posuere massa in ipsum semper faucibus. Phasellus et
                  leo blandit, elementum quam quis, ultricies diam. Quisque condimentum
                  nisi eu lectus condimentum, vitae rhoncus ante elementum. Ut
                  viverra aliquam erat, non sollicitudin elit. Suspendisse nec orci
                  at ex accumsan mollis. Cras augue leo, commodo eget rutrum et,
                  ultricies a lectus. Quisque nec sem tortor. Vivamus ut mollis mauris.
                  Proin eleifend ullamcorper dictum. Pellentesque egestas hendrerit mi
                  quis ullamcorper. Cras accumsan scelerisque ex vel imperdiet. Donec
                  accumsan nisi turpis, eu consequat nisi ullamcorper a. Aenean nunc
                  lectus, maximus ac nisi sed, tempor semper arcu. Cras nec tellus
                  gravida, condimentum nisl sed, rutrum ante.
                </Paragraph>
              </div>
            </Console>

            <Canvas isShifted={ consoleContent[active] }>
              <div style={ { padding: '1.5rem' } }>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur justo ipsum, mollis ut turpis blandit, molestie
                  blandit nibh. In ac erat at purus molestie ornare a eu augue.
                  Nullam varius lobortis volutpat. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Sed commodo tristique lorem ac finibus. Nunc vitae
                  arcu dictum, vestibulum quam non, posuere sapien. Quisque
                  aliquet, velit ut gravida imperdiet, sapien sem pharetra nisi,
                  quis laoreet nunc erat eu erat. Nunc laoreet mauris a gravida
                  rutrum. Aenean eget aliquet nisl. Aliquam mattis erat ante,
                  sit amet suscipit velit fringilla vel. Donec fermentum venenatis
                  lectus tincidunt finibus. In viverra eu sapien volutpat posuere.
                  Aliquam erat volutpat.
                </Paragraph>

                <Paragraph>
                  Pellentesque a elit ut neque auctor venenatis non sit amet sem.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse potenti. Vivamus dictum nunc non neque volutpat
                  pulvinar. Pellentesque ac dignissim purus. Etiam cursus sem sed
                  odio semper, ac porttitor mi fermentum. Vestibulum ultricies
                  ante erat, a tempus nisi fermentum at. Nullam aliquet nibh id
                  mauris pellentesque varius ut a eros. Mauris odio massa, suscipit
                  sit amet placerat eu, porta eget est. Mauris et nisi mollis,
                  apibus lectus quis, eleifend risus. Nunc facilisis purus nunc,
                  sit amet sagittis lectus facilisis eget. Phasellus non neque eu
                  nisl pellentesque scelerisque eget semper mi. Pellentesque
                  lacinia massa turpis, sit amet molestie augue finibus vel.
                </Paragraph>

                <Paragraph>
                  Mauris vel nisi ut felis maximus congue. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Pellentesque vulputate lectus vitae est laoreet cursus a ut
                  augue. Nam id lobortis est. Proin gravida dapibus ex id eleifend.
                  Donec a aliquam nulla. Sed nec pharetra urna.
                </Paragraph>

                <Paragraph>
                  Suspendisse posuere massa in ipsum semper faucibus. Phasellus et
                  leo blandit, elementum quam quis, ultricies diam. Quisque condimentum
                  nisi eu lectus condimentum, vitae rhoncus ante elementum. Ut
                  viverra aliquam erat, non sollicitudin elit. Suspendisse nec orci
                  at ex accumsan mollis. Cras augue leo, commodo eget rutrum et,
                  ultricies a lectus. Quisque nec sem tortor. Vivamus ut mollis mauris.
                  Proin eleifend ullamcorper dictum. Pellentesque egestas hendrerit mi
                  quis ullamcorper. Cras accumsan scelerisque ex vel imperdiet. Donec
                  accumsan nisi turpis, eu consequat nisi ullamcorper a. Aenean nunc
                  lectus, maximus ac nisi sed, tempor semper arcu. Cras nec tellus
                  gravida, condimentum nisl sed, rutrum ante.
                </Paragraph>
              </div>
            </Canvas>

          </Platform>
        </div>

        <Snippet renderSkip={ true }>
          <Platform consoleWidth="26.25rem">
            <Dock>
              <DockItem active={ true } icon="ellipsis" />
            </Dock>

            <Console isVisible={ true }>
              ...
            </Console>


            <Canvas isShifted={ true }>
              ...
            </Canvas>
          </Platform>
        </Snippet>

      </Example>
    );
  }
}
