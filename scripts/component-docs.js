/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const reactDocgen = require('react-docgen');
const componentFiles = {
  Avatar: '../src/components/avatar/Avatar.js',
  Base: '../src/components/base/Base.js',
  Button: '../src/components/button/Button.js',
  ButtonGroup: '../src/components/button/ButtonGroup.js',
  Dialog: '../src/components/dialog/Dialog.js',
  DialogBody: '../src/components/dialog/DialogBody.js',
  DialogFooter: '../src/components/dialog/DialogFooter.js',
  DialogHeader: '../src/components/dialog/DialogHeader.js',
  CheckBox: '../src/components/form/CheckBox.js',
  CheckBoxGroup: '../src/components/form/CheckBoxGroup.js',
  Form: '../src/components/form/Form.js',
  RadioButton: '../src/components/form/RadioButton.js',
  RadioButtonGroup: '../src/components/form/RadioButtonGroup.js',
  TextArea: '../src/components/form/TextArea.js',
  TextInput: '../src/components/form/TextInput.js',
  Grid: '../src/components/grid/Grid.js',
  GridCell: '../src/components/grid/GridCell.js',
  Icon: '../src/components/icon/Icon.js',
  Image: '../src/components/image/Image.js',
  Label: '../src/components/label/Label.js',
  LabelGroup: '../src/components/label/LabelGroup.js',
  LogoHorizontal: '../src/components/logo/LogoHorizontal.js',
  LogoVertical: '../src/components/logo/LogoVertical.js',
  Menu: '../src/components/menu/Menu.js',
  MenuItem: '../src/components/menu/MenuItem.js',
  Select: '../src/components/select/Select.js',
  Tabset: '../src/components/tabset/Tabset.js',
  Tab: '../src/components/tabset/Tab.js',
  Heading: '../src/components/typography/Heading.js',
  Italic: '../src/components/typography/Italic.js',
  Link: '../src/components/typography/Link.js',
  List: '../src/components/typography/List.js',
  ListItem: '../src/components/typography/ListItem.js',
  Paragraph: '../src/components/typography/Paragraph.js',
  Small: '../src/components/typography/Small.js',
  Strike: '../src/components/typography/Strike.js',
  Strong: '../src/components/typography/Strong.js',
  Underline: '../src/components/typography/Underline.js',
  Weak: '../src/components/typography/Weak.js',
};

function castValue(value) {
  if (Array.isArray(value)) {
    return value.map(normaliseValue);
  }

  const stringRx = /(^["'])(.*)(["']$)/;

  if (!isNaN(+value)) return +value;
  if (value === 'true' || value === 'false') return JSON.parse(value);
  if (stringRx.test(value)) return value.replace(stringRx, '$2');

  return value;
}

function normaliseValue(prop) {
  return !prop ? undefined : Object.assign({}, prop, {
    value: castValue(prop.value),
  });
}

function flattenValues({ name, value }, values = []) {
  if (Array.isArray(value)) {
    value.forEach((value) => flattenValues(value, values));
  } else if (value) {
    values.push(value);
  }

  return values;
}

function extractProps({ props = {} }) {
  return Object.keys(props).reduce((eProps, prop) => Object.assign({}, eProps, {
    [prop]: Object.assign(props[prop], {
      defaultValue: normaliseValue(props[prop].defaultValue),
      type: normaliseValue(props[prop].type),
      values: flattenValues(normaliseValue(props[prop].type)),
    }),
  }), {});
}

module.exports = function generate() {

  return Object.keys(componentFiles).reduce((components, component) => {
    components[component] = extractProps(reactDocgen.parse(
      fs.readFileSync(path.resolve(__dirname, componentFiles[component]))
    ));

    return components;
  }, {});
};
