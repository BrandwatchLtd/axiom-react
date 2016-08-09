import { transitionTimeBase } from '../../design-patterns/animations/_vars';

module.exports = {
  dialogSizes: [
    { id: 'small', width: '400px', default: true },
    { id: 'medium', width: '600px' },
    { id: 'large', width: '800px' },
  ],
  dialogAnimationDuration: transitionTimeBase,
  zIndexDialog: 900,
}
