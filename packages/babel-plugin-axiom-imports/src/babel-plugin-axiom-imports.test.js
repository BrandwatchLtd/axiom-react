import path from 'path';
import { transformFileSync } from 'babel-core';
import babelPluginAxiom from './babel-plugin-axiom-imports';
import babelPluginTransformSvgAxiom from '@brandwatch/babel-plugin-transform-svg-axiom';

describe('babelPluginAxiom', () => {
  test('aliased imports', () => {
    expect(transformFileSync(path.resolve(__dirname, '../test/alias.js'), {
      plugins: [babelPluginAxiom],
    }).code).toMatchSnapshot();
  });

  test('all imports', () => {
    expect(transformFileSync(path.resolve(__dirname, '../test/all.js'), {
      plugins: [babelPluginAxiom],
    }).code).toMatchSnapshot();
  });

  test('used as defaults', () => {
    expect(transformFileSync(path.resolve(__dirname, '../test/default.js'), {
      plugins: [babelPluginAxiom],
    }).code).toMatchSnapshot();
  });

  test('direct import', () => {
    expect(transformFileSync(path.resolve(__dirname, '../test/direct.js'), {
      plugins: [babelPluginAxiom],
    }).code).toMatchSnapshot();
  });

  test('destructured imports', () => {
    expect(transformFileSync(path.resolve(__dirname, '../test/destructure.js'), {
      plugins: [babelPluginAxiom],
    }).code).toMatchSnapshot();
  });

  test('scoped imports', () => {
    expect(transformFileSync(path.resolve(__dirname, '../test/scoped.js'), {
      plugins: [babelPluginAxiom],
    }).code).toMatchSnapshot();
  });

  test('property access', () => {
    expect(transformFileSync(path.resolve(__dirname, '../test/property.js'), {
      plugins: [babelPluginTransformSvgAxiom, babelPluginAxiom],
    }).code).toMatchSnapshot();
  });
});
