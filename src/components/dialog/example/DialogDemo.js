import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ButtonGroup,
  Button,
  Paragraph,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Heading,
} from 'bw-axiom';

export default class DialogDemo extends Component {
  static propTypes = {
    withFooter: PropTypes.bool,
    withTitle: PropTypes.bool,
    onRequestClose: PropTypes.func,
  };

  render() {
    const { onRequestClose, withFooter, withTitle } = this.props;


    return (
      <Dialog contentLabel="Dialog Demo" { ...this.props }>
        {
          withTitle && (
            <DialogHeader onRequestClose={ onRequestClose }>
              <Heading textSize="headtitle">Dialog Title</Heading>
            </DialogHeader>
          )
        }

        <DialogBody>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
            arcu tellus. In hac habitasse platea dictumst. Maecenas ac molestie
            arcu. Donec auctor eros quis ex congue, sit amet vehicula sem
            dapibus. Nam lobortis, nibh vel placerat sagittis, risus est
            faucibus massa, at sodales ligula lacus quis diam. Integer venenatis
            viverra euismod. Phasellus eleifend tempor augue, eget molestie
            diam efficitur at. Vivamus sagittis porta venenatis. Praesent
            elementum dolor in lectus maximus euismod. Praesent sed cursus
            sem, non molestie ex. Nulla facilisi. Pellentesque aliquam massa
            et ligula porta ornare et nec turpis. Curabitur vel lacus imperdiet,
            pulvinar risus in, scelerisque velit. Praesent nec lorem lobortis,
            tempor neque quis, ultricies ipsum. Aenean vitae magna justo. Donec
            aliquam, diam id interdum finibus, orci nunc pretium sem, vel pretium
            libero ante eu diam.
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            convallis, diam dapibus lacinia condimentum, arcu leo blandit arcu,
            vitae convallis diam risus ac ligula. Praesent rhoncus semper odio,
            in congue turpis maximus condimentum. Sed placerat, ipsum a
            vulputate tincidunt, augue massa iaculis nisl, a semper est mauris
            fringilla libero. Fusce a posuere lectus. Suspendisse potenti.
            Donec a consectetur est. Mauris aliquet leo sed enim dignissim,
            quis consectetur risus imperdiet.
          </Paragraph>

          <Paragraph>
            Etiam in mauris in magna suscipit pulvinar. Sed at tortor ipsum.
            Pellentesque justo nibh, aliquet ac congue sit amet, tempus ac
            nibh. In interdum lorem ex, ac pulvinar risus suscipit eu. Donec
            convallis sapien et tortor iaculis, quis blandit risus pulvinar.
            Donec sagittis posuere orci. Donec eleifend purus magna, sit amet
            imperdiet ante porta ut. Donec hendrerit facilisis turpis. Quisque
            tortor urna, varius id libero eu, gravida vestibulum arcu. Mauris
            sodales sapien at ligula feugiat facilisis. Duis tincidunt auctor
            magna et placerat. Phasellus quis sem libero. In a arcu vel odio
            euismod tempus. Maecenas porttitor ligula a malesuada vehicula.
          </Paragraph>
        </DialogBody>

        {
          withFooter && (
            <DialogFooter>
              <ButtonGroup>
                <Button onClick={ onRequestClose } style="secondary">Done</Button>
              </ButtonGroup>
            </DialogFooter>
          )
        }
      </Dialog>
    );
  }
}
