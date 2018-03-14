import path from 'path';
import { transformFileSync } from 'babel-core';
import babelPluginAxiom from './babel-plugin-axiom-imports';

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

  test('default imports', () => {
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
});
