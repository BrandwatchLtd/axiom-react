import { icons } from './icons.yml';

function iconSort(a, b) {
  return a.id.localeCompare(b.id);
}

export const iconList = [...icons].sort(iconSort);
export const iconCategories = [...icons].reduce((categories, icon) => {
  icon.categories.forEach((category) => {
    categories[category] = [
      ...(categories[category] || []),
      icon,
    ].sort(iconSort);
  });

  return categories;
}, {});


