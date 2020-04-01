import React, { Component } from 'react';
import { Heading } from '@brandwatch/axiom-components';
import PackagesTable from './Resources/PackagesTable/PackagesTable';
import PackageRow from './Resources/PackagesTable/PackageRow';
import ResourcesSection from './Resources/ResourcesSection';
import SitePage from '../Site/SitePage';

export default class Resources extends Component {
  render() {
    return (
      <SitePage>
        <Heading textSize="headline">Packages</Heading>

        <ResourcesSection
          description="The most common and core packages to help build Brandwatch applications. Made up of React components and design resources."
          title="Core packages"
        >
          <PackagesTable>
            <PackageRow
              description="Low level design resources that are used to make up Axiom components and composites (animations, colors, sizes etc...)."
              name="axiom-materials"
              to="/docs/packages/axiom-materials"
            />

            <PackageRow
              description="Core Axiom components package, includes the main components that make up a Brandwatch application."
              name="axiom-components"
              to="/docs/packages/axiom-components"
            />

            <PackageRow
              description="Composites are reusable React components but designed to be used within a single context of an a Brandwatch application."
              name="axiom-composites"
              to="/docs/packages/axiom-composites"
            />

            <PackageRow
              description="Charting components, including low level components that make up charts."
              name="axiom-charts"
              to="/docs/packages/axiom-charts"
            />
          </PackagesTable>
        </ResourcesSection>

        <ResourcesSection
          description="Additional packages used internally within Axiom, but are still useful within applications."
          title="Supplementary packages"
        >
          <PackagesTable>
            <PackageRow
              description="Automation testing attribute selector and IDs for elements of interest inside React component templates."
              name="axiom-automation-testing"
            />

            <PackageRow
              description="Formatting utils for providing consistent data formats. Like dates and numbers."
              name="axiom-localization"
            />

            <PackageRow
              description="Formatting utils for providing consistent data formats. Like dates and numbers."
              name="axiom-formatting"
            />

            <PackageRow
              description="Formatting utils for providing consistent data formats. Like dates and numbers."
              name="axiom-utils"
            />

            <PackageRow
              description="An Axiom specific babel plugin that transforms and removes unused Axiom exports."
              name="babel-plugin-axiom-imports"
            />

            <PackageRow
              description="An Axiom specific babel plugin that inlines, optimises and recolours SVGs for Brandwatch applications."
              name="babel-plugin-transform-svg-axiom"
            />
          </PackagesTable>
        </ResourcesSection>

        <ResourcesSection
          description="Packages that help improve development workflows."
          title="Development workflow packages"
        >
          <PackagesTable>
            <PackageRow
              description="Webpack loader for Hot Module Reloading React component API docs, generated from PropTypes."
              name="axiom-documentation-loader"
            />

            <PackageRow
              description="Axiom React component documentation viewer for Style Guide Driven Development. Provides component preview and PropTypes configuration table."
              name="axiom-documentation-viewer"
            />

            <PackageRow
              description="Eslint config for some Axiom Brandwatch applications."
              name="eslint-config-axiom"
            />

            <PackageRow
              description="Stylelint config for some Axiom Brandwatch applications."
              name="stylelint-config-axiom"
            />
          </PackagesTable>
        </ResourcesSection>
      </SitePage>
    );
  }
}
