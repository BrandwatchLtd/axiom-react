import Remarkable from 'remarkable';
import toTokenTree from './token-tree';
import renderTree from './render-rules';

class Renderer {
  render(tokens) {
    return renderTree(toTokenTree(tokens));
  }
}

const markdown = new Remarkable();
const disableCore = ['abbr', 'abbr2', 'footnote_tail'];
const disableInline = ['footnote_inline', 'footnote_ref', 'htmltag', 'ins', 'sub', 'sup'];
const disableBlock = ['deflist', 'footnote', 'htmlblock'];

markdown.renderer = new Renderer();
markdown.core.ruler.disable(disableCore);
markdown.inline.ruler.disable(disableInline);
markdown.block.ruler.disable(disableBlock);

export default markdown;
