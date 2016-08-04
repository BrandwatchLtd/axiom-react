export default function buildRenderElement(element) {
  if (Array.isArray(element)) {
    return element.map((e) => buildRenderElement(e)).filter((e) => e);
  }

  if (element.props.renderSkip) {
    return null;
  }

  return element;
}
