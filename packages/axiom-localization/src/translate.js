export default (config) => (text, lng = '') => {
  const lngPrefix = lng.split(/[^A-Za-z]/)[0];
  return (config[text] && (config[text][lng] || config[text][lngPrefix])) || text;
};
