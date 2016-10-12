module.exports = [{
  id: 'axiom',
  name: 'Axiom',
  children: [
    require('bw-axiom/axiom/getting-started'),
  ],
}, {
  id: 'design-patterns',
  name: 'Design Patterns',
  children: [
    require('bw-axiom/design-patterns/colors/example'),
    require('bw-axiom/design-patterns/date-and-time/example'),
    require('bw-axiom/design-patterns/numbers/example'),
  ],
}, {
  id: 'components',
  name: 'Components',
  children: [
    require('bw-axiom/components/avatar/example'),
    require('bw-axiom/components/billboard/example'),
    require('bw-axiom/components/button/example'),
    require('bw-axiom/components/dialog/example'),
    require('bw-axiom/components/form/example'),
    require('bw-axiom/components/grid/example'),
    require('bw-axiom/components/icon/example/index.icon'),
    require('bw-axiom/components/icon/example/index.icons'),
    require('bw-axiom/components/image/example'),
    require('bw-axiom/components/label/example'),
    require('bw-axiom/components/logo/example'),
    require('bw-axiom/components/select/example'),
    require('bw-axiom/components/table/example'),
    require('bw-axiom/components/tabset/example'),
    require('bw-axiom/components/typography/example'),
  ],
}];
