const path = require('path');
const fs = require('fs');
const generateComponentDocs = require('./component-docs');

const src = path.resolve(__dirname, '../src');

const componentFileNameRegex = /^([A-Z][a-z]+)+\.js$/;

function getDirectories(dir) {
  return fs.readdirSync(dir).filter((name) =>
    fs.statSync(path.join(dir, name)).isDirectory() && /^[^_]/.test(name)
  );
}

function getFiles(dir, match) {
  return fs.readdirSync(dir).filter((name) =>
    fs.statSync(path.join(dir, name)).isFile() && match.test(name)
  );
}

function getComponents(dir) {
  return getFiles(dir, componentFileNameRegex)
    .reduce((components, name) => Object.assign({}, components, {
      [name.replace(/\.js$/, '')]: generateComponentDocs(path.join(dir, name)),
    }), {});
}

function hasExamples(dir) {
  return getDirectories(dir).some((name) => name === 'example');
}

function generateStructure() {
  return getDirectories(src).map((section) => ({
    id: section,
    isNavigable: true,
    path: `/${section}`,
    children: getDirectories(path.join(src, section)).map((module) => ({
      components: getComponents(path.join(src, section, module)),
      id: module,
      hasExamples: hasExamples(path.join(src, section, module)),
      path: `/${section}/${module}`,
    })),
  }));
}

function extract(extraction, extracted = [], structure = generateStructure()) {
  if (Array.isArray(structure)) {
    structure.forEach((structure) => extract(extraction, extracted, structure));
  } else {
    if (Array.isArray(structure.children) && structure.children.length > 0) {
      extract(extraction, extracted, structure.children);
    }

    extraction(structure, extracted);
  }

  return extracted;
}

function extractPaths() {
  return extract((structure, extracted) => {
    if (structure.hasExamples) {
      extracted.push(structure.path);
    }
  }, ['/']);
}

module.exports = generateStructure;
module.exports.extractPaths = extractPaths;
