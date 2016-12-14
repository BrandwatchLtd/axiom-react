export function getCSSVar(variable) {
  if (typeof window === 'undefined') {
    return '';
  }

  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--${variable}`)
    .trim();
}
