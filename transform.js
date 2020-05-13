export default function transform(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  renameComponentAttribute(j, root, file, "Button");
  renameComponentAttribute(j, root, file, "TextInputButton");

  return root.toSource();
}

function renameComponentAttribute(j, root, file, componentName) {
  const localName = componentName;

  const isSpreadAttribute = node => {
    if (node.type === "JSXSpreadAttribute") {
      console.warn(
        `Spread prop passed to Button in ${file.path}. Please check if spread contains a style attribute.`
      );

      return false;
    }

    return true;
  };

  return root
    .findJSXElements(localName)
    .forEach(np => {
      np.value.openingElement.attributes
        .filter(isSpreadAttribute)
        .filter(node => node.name.name === "style")
        .forEach(node => (node.name.name = "variant"));
    })
    .toSource();
}
