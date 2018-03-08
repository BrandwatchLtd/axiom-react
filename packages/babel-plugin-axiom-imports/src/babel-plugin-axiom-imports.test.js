import path from 'path';
import { transformFileSync } from 'babel-core';
import babelPluginAxiom from './babel-plugin-axiom-imports';

describe('babelPluginAxiom', () => {
  test('aliased imports', () => {
    expect(transformFileSync(path.resolve(__dirname, '../test/alias.js'), {
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
