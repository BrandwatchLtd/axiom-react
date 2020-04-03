export default (variable, context) => {
  if (typeof window === "undefined") return;

  if (!context || context === document) {
    context = document.documentElement;
  }

  return window
    .getComputedStyle(context)
    .getPropertyValue(`--${variable}`)
    .trim();
};
