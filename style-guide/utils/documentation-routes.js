const mapDocumenation = require('../map-documentation');

const normalisePath = (path) =>
  `/${path.replace(new RegExp(`^(/+(?:${process.env.BASENAME}/)?)`), '')}`;

const trailToPath = (...trail) => normalisePath(trail.join('/'));

const flatDocumentationMap =
  (map = mapDocumenation, trail = [], flat = []) => {
    Object.keys(map).forEach((key) => {
      flat.push({
        name: map[key].name,
        path: trailToPath(...trail, key),
        isParent: !!map[key].children,
      });

      if (map[key].children) {
        flatDocumentationMap(map[key].children, [...trail, key], flat);
      }
    });

    return flat;
  };

const getRoutes = () => flatDocumentationMap()
  .filter(({ isParent }) => !isParent);

module.exports.normalisePath = normalisePath;
module.exports.getRoutes = getRoutes;
