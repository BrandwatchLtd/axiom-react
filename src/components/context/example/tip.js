import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Context,
  ContextTip,
  Grid,
  GridCell,
  Paragraph,
 } from 'bw-axiom';

export default class ContextTipExample extends Component {
  render() {
    return (
      <Example name="Tip">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Context position="top">
                <ContextTip>
                  <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis at velit ut nisl eleifend volutpat.
              </Paragraph>
                </ContextTip>
              </Context>
            </GridCell>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Context maxHeight="20rem" position="bottom" width="20rem">
                <ContextTip>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, eum tota appareat reprehendunt an. No possit
                    tibique cum. Nam et putent menandri, usu ea molestie invidunt adolescens,
                    id cibo menandri neglegentur pri. Te sumo placerat dissentias ius, duo
                    tation scripta in, sea aliquid lucilius accommodare eu. Ad utamur
                    assentior intellegebat sea, unum oblique perpetua ex usu, quem eripuit ad
                    has. Elitr cotidieque reformidans ad duo, ex quo doming mediocrem, has
                    impedit minimum an. Ex hinc viris ludus vim, id pri consulatu repudiare
                    ullamcorper.
                  </Paragraph>
                  <Paragraph>
                    Cum ea utamur eleifend, ea per zril senserit. Ad tale malorum vocibus est,
                    iriure numquam fabulas in sit, ne ius essent scriptorem. Duis temporibus
                    mei ad. Cu duo mutat commodo platonem, id habemus pertinacia mei. Quem
                    solum interpretaris pro ut, no purto albucius appareat eam, dicant
                    malorum perfecto in vix.
                  </Paragraph>
                  <Paragraph>
                    Mea delenit insolens dissentiunt in, ut pri impetus labitur
                    necessitatibus, ex pro tollit definitionem. Nam aliquam volutpat ei, movet
                    nominavi rationibus an nam. His esse suscipiantur et. Vidit suscipit
                    scribentur vix no. Eu solum posidonium philosophia eam. Pri eu paulo
                    veniam corrumpit, ad vix ferri suscipiantur comprehensam. Quo error postea
                    omnesque et, sit saepe invenire indoctum at, eu eam mucius veritus minimum.
                  </Paragraph>
                  <Paragraph>
                    Ad ipsum vitae putant pri, nec homero partem phaedrum ei. Porro quaestio
                    signiferumque id his, in vis dolorem offendit. Qui at quaerendum
                    ullamcorper. Mea equidem percipit repudiare ea, ne sed veri iuvaret
                    voluptatum.
                  </Paragraph>
                  <Paragraph>
                    Adhuc habemus usu ex, oportere reformidans complectitur pro in. At
                    volutpat imperdiet dissentiunt vix, vis in unum admodum adversarium. Nec
                    mentitum insolens ne, eu est prima eruditi. Sed postea singulis pericula
                    ut, te solum doming erroribus pro. Cu blandit menandri vel, usu ei tantas
                    quaeque. Partem hendrerit duo te.
                  </Paragraph>
                </ContextTip>
              </Context>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
