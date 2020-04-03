import formatDate, { FORMAT_MAP } from "./formatDate";

export default formatDate(
  `${FORMAT_MAP.long} ${FORMAT_MAP.time} ${FORMAT_MAP.timezone}`
);
