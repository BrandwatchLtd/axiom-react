const resolveImport = require('./resolve-import');

module.exports = ({ types }) => {
  let axioms;
  let specified;
  let selectedAxioms;

  const importAxiom = ({ pkg, name }, file) => {
    if (!selectedAxioms[name]) {
      selectedAxioms[name] = file.addImport(resolveImport(pkg, name), 'default');
    }

    return types.clone(selectedAxioms[name]);
  };

  const isSpecialTypes = (node) =>
    types.isMemberExpression(node) ||
    types.isProperty(node);

  const hasBindingOfType = (scope, name, type) => scope.hasBinding(name) &&
    scope.getBinding(name).path.type === type;

  const matchesAxiom = (path, name) => axioms[name] && (
      hasBindingOfType(path.scope, name, 'ImportDefaultSpecified') ||
      hasBindingOfType(path.scope, name, 'ImportNamespaceSpecifier')
    );

  const matchesAxiomExport = (path, name) => specified[name] &&
    hasBindingOfType(path.scope, name, 'ImportSpecifier');

  return {
    visitor: {
      Program: {
        enter() {
          axioms = Object.create(null);
          specified = Object.create(null);
          selectedAxioms = Object.create(null);
        },
      },

      ImportDeclaration(path) {
        if (resolveImport.packages[path.node.source.value]) {
          path.node.specifiers.forEach((spec) => {
            if (types.isImportSpecifier(spec)) {
              specified[spec.local.name] = {
                pkg: path.node.source.value,
                name: spec.imported.name,
              };
            } else {
              axioms[spec.local.name] = true;
            }
          });

          path.remove();
        }
      },

      CallExpression(path) {
        if (!types.isIdentifier(path.node.callee)) return;

        if (matchesAxiomExport(path, path.node.callee.name)) {
          path.node.callee = importAxiom(specified[path.node.callee.name], path.hub.file);
        }

        if (path.node.arguments) {
          path.node.arguments = path.node.arguments.map((argument) =>
            matchesAxiomExport(path, path.node.callee.name)
              ? importAxiom(specified[path.node.callee.name], path.hub.file)
              : argument
          );
        }
      },

      MemberExpression(path) {
        if (matchesAxiomExport(path, path.node.object.name)) {
          const { type, name } = importAxiom(specified[path.node.object.name], path.hub.file);
          path.replaceWith(types.memberExpression({ type, name }, types.identifier(path.node.property.name)));
        }
      },

      Property(path) {
        if (types.isIdentifier(path.node.key) &&
              path.node.computed &&
              matchesAxiomExport(path, path.node.key.name)) {
          path.node.key = importAxiom(specified[path.node.key.name], path.hub.file);
        }

        if (types.isIdentifier(path.node.value) &&
              matchesAxiomExport(path, path.node.value.name)) {
          path.node.value = importAxiom(specified[path.node.value.name], path.hub.file);
        }
      },

      Identifier(path) {
        if (matchesAxiomExport(path, path.node.name) && !isSpecialTypes(types, path.parent)) {
          const { type, name } = importAxiom(specified[path.node.name], path.hub.file);
          path.replaceWith({ type, name });
        } else if (matchesAxiom(path, path.node.name)) {
          path.replaceWith(types.nullLiteral());
        }
      },
    },
  };
};
