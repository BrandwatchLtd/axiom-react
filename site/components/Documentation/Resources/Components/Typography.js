import React, { Component } from "react";
import {
  Heading,
  Italic,
  Link,
  Paragraph,
  Small,
  Strike,
  Strong,
  TextIcon,
  Underline,
} from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Heading textSize="display2">
            <TextIcon name="star" /> <Strong>Lorem ipsum</Strong> dolor sit amet
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut dolor risus. Pellentesque luctus, elit vitae molestie molestie,
            felis massa varius tortor, ac pellentesque odio sapien ac enim.
          </Paragraph>

          <Heading textSize="display1">
            <TextIcon name="star" /> <Strong>Lorem ipsum</Strong> dolor sit amet
          </Heading>
          <Paragraph>
            Phasellus gravida ante eu lectus rutrum, faucibus{" "}
            <Link>laoreet nunc sagittis.</Link> Pellentesque ac cursus lorem,
            non ullamcorper mi. Donec luctus tellus vitae mattis blandit.{" "}
            <Link>Sed molestie augue non velit</Link> ornare facilisis.
            Curabitur consectetur dolor ac nisi varius accumsan.
          </Paragraph>

          <Heading textSize="headline">
            <TextIcon name="star" /> <Strong>Lorem ipsum</Strong> dolor sit amet
          </Heading>
          <Paragraph>
            Sed pharetra sollicitudin magna id laoreet. Nam dui ligula,
            vulputate eu posuere ut, vulputate interdum justo. Aliquam erat
            volutpat. Phasellus vestibulum porta urna, vel commodo dolor lacinia
            et.
          </Paragraph>

          <Heading textSize="headtitle">
            <TextIcon name="star" /> <Strong>Lorem ipsum</Strong> dolor sit amet
          </Heading>
          <Paragraph>
            Maecenas fermentum magna ut lectus elementum ultrices.{" "}
            <Strike>
              Quisque pellentesque mauris eu ligula hendrerit, eu cursus mauris
              tristique. Cras dictum posuere libero nec pulvinar.
            </Strike>{" "}
            Nulla vitae lobortis nisl. Etiam ac ante at tortor volutpat auctor
            sed sed leo.{" "}
            <Underline>
              Aliquam mauris ex, cursus a est et, maximus scelerisque sem.
            </Underline>
          </Paragraph>

          <Heading textSize="large">
            <TextIcon name="star" /> <Strong>Lorem ipsum</Strong> dolor sit amet
          </Heading>
          <Paragraph>
            <Italic>
              Nulla facilisi. Aliquam non risus sed orci condimentum cursus. Nam
              sed dolor non tortor feugiat dapibus. Pellentesque lobortis purus
              eu mollis malesuada. Mauris et nisi in orci vehicula interdum in
              ac quam. Integer consectetur sapien enim, eget dapibus erat dictum
              id. Donec eget cursus tortor. In tincidunt quam at nulla porttitor
              placerat. Praesent sodales, velit non placerat elementum, mauris
              leo consectetur dui, eget faucibus lacus diam eu metus.
            </Italic>
          </Paragraph>

          <Paragraph textColor="subtle">
            <Small>
              Morbi id dolor eu risus tristique tempor non sit amet eros. Donec
              ornare tortor justo, sit amet congue elit sagittis eget. Nam
              sagittis et tortor a congue. Fusce nec lectus sit amet lacus
              laoreet malesuada eget id nibh. Integer accumsan porttitor
              scelerisque.
            </Small>
          </Paragraph>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/Heading"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/Italic"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/Link"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/Paragraph"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/Small"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/Strike"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/Strong"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/Text"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/TextIcon"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Typography/Underline"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
