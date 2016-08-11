import { isReactElements } from 'style-guide/utils/react-elements';
import markdown from 'style-guide/utils/remarkable-to-react';

export default function renderMarkdown() {
  let markdownStore = [];

  return (output, element, index, input) => {
    if (!isReactElements(element)) {
      markdownStore.push(element);
    }

    if (isReactElements(element) || index === input.length - 1) {
      output.push(markdown.render(markdownStore.join('\n')));
      markdownStore = [];
    }

    if (isReactElements(element)) {
      output.push(element);
    }

    return output;
  };
}
