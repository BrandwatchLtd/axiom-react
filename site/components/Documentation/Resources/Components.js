import React, { Component } from 'react';
import { DocumentationViewer } from '@brandwatch/axiom-documentation-viewer';
import AlertBar from './Components/AlertBar';
import AlertDialog from './Components/AlertDialog';
import AlertIcon from './Components/AlertIcon';
import Avatar from './Components/Avatar';
import Badge from './Components/Badge';
import Base from './Components/Base';
import Button from './Components/Button';
import Card from './Components/Card';
import Cloak from './Components/Cloak';
import ColorPicker from './Components/ColorPicker';
import DataPicker from './Components/DataPicker';
import DatePicker from './Components/DatePicker';
import Dialog from './Components/Dialog';
import Dropdown from './Components/Dropdown';
import Editable from './Components/Editable';
import Form from './Components/Form';
import Grid from './Components/Grid';
import HorizontalRule from './Components/HorizontalRule';
import Icon from './Components/Icon';
import Image from './Components/Image';
import Label from './Components/Label';
import List from './Components/List';
import Logo from './Components/Logo';
import Menu from './Components/Menu';
import Notification from './Components/Notification';
import Pagination from './Components/Pagination';
import Pictogram from './Components/Pictogram';
import Position from './Components/Position';
import Progress from './Components/Progress';
import Reveal from './Components/Reveal';
import Select from './Components/Select';
import Table from './Components/Table';
import Tabset from './Components/Tabset';
import Toggle from './Components/Toggle';
import Toolbar from './Components/Toolbar';
import Tooltip from './Components/Tooltip';
import Typography from './Components/Typography';
import Validation from './Components/Validation';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationViewer
          config={ [{
            id: 'alert-bar',
            name: 'Alert Bar',
            Component: AlertBar,
          }, {
            id: 'alert-dialog',
            name: 'Alert Dialog',
            Component: AlertDialog,
          }, {
            id: 'alert-icon',
            name: 'Alert Icon',
            Component: AlertIcon,
          }, {
            id: 'avatar',
            name: 'Avatar',
            Component: Avatar,
          }, {
            id: 'badge',
            name: 'Badge',
            Component: Badge,
          }, {
            id: 'base',
            name: 'Base',
            Component: Base,
          }, {
            id: 'button',
            name: 'Button',
            Component: Button,
          }, {
            id: 'card',
            name: 'Card',
            Component: Card,
          }, {
            id: 'cloak',
            name: 'Cloak',
            Component: Cloak,
          }, {
            id: 'color-picker',
            name: 'ColorPicker',
            Component: ColorPicker,
          }, {
            id: 'data-picker',
            name: 'DataPicker',
            Component: DataPicker,
          }, {
            id: 'date-picker',
            name: 'DatePicker',
            Component: DatePicker,
          }, {
            id: 'dialog',
            name: 'Dialog',
            Component: Dialog,
          }, {
            id: 'dropdown',
            name: 'Dropdown',
            Component: Dropdown,
          }, {
            id: 'editable',
            name: 'Editable',
            Component: Editable,
          }, {
            id: 'form',
            name: 'Form',
            Component: Form,
          }, {
            id: 'grid',
            name: 'Grid',
            Component: Grid,
          }, {
            id: 'horizontal-rule',
            name: 'Horizontal Rule',
            Component: HorizontalRule,
          }, {
            id: 'icon',
            name: 'Icon',
            Component: Icon,
          }, {
            id: 'image',
            name: 'Image',
            Component: Image,
          }, {
            id: 'label',
            name: 'Label',
            Component: Label,
          }, {
            id: 'list',
            name: 'List',
            Component: List,
          }, {
            id: 'logo',
            name: 'Logo',
            Component: Logo,
          }, {
            id: 'menu',
            name: 'Menu',
            Component: Menu,
          }, {
            id: 'notification',
            name: 'Notification',
            Component: Notification,
          }, {
            id: 'pagination',
            name: 'Pagination',
            Component: Pagination,
          }, {
            id: 'pictogram',
            name: 'Pictogram',
            Component: Pictogram,
          }, {
            id: 'position',
            name: 'Position',
            Component: Position,
          }, {
            id: 'progress',
            name: 'Progress',
            Component: Progress,
          }, {
            id: 'reveal',
            name: 'Reveal',
            Component: Reveal,
          }, {
            id: 'select',
            name: 'Select',
            Component: Select,
          }, {
            id: 'table',
            name: 'Table',
            Component: Table,
          }, {
            id: 'tabset',
            name: 'Tabset',
            Component: Tabset,
          }, {
            id: 'toggle',
            name: 'Toggle',
            Component: Toggle,
          }, {
            id: 'toolbar',
            name: 'Toolbar',
            Component: Toolbar,
          }, {
            id: 'tooltip',
            name: 'Tooltip',
            Component: Tooltip,
          }, {
            id: 'typography',
            name: 'Typography',
            Component: Typography,
          }, {
            id: 'validation',
            name: 'Validation',
            Component: Validation,
          }] }
          path="/docs/packages/axiom-components" />
    );
  }
}
