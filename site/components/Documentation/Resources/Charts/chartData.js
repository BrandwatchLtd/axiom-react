export const dotPlotKey = [
  { color: 'giant-leap', label: 'Brand A' },
  { color: 'critical-mass', label: 'Brand B' },
  { color: 'blast-off', label: 'Brand C' },
];

export const dotPlotData = [{
  label: 'Family & Parenting',
  benchmark: 14,
  values: {
    'giant-leap': 17,
    'critical-mass': 15,
    'blast-off': 30,
  },
}, {
  label: 'Food & Drinks',
  benchmark: 7,
  values: {
    'giant-leap': 10,
    'critical-mass': 11,
    'blast-off': 22,
  },
}, {
  label: 'Music',
  benchmark: 13,
  values: {
    'giant-leap': 27,
    'critical-mass': 26,
    'blast-off': 15,
  },
}, {
  label: 'Animals & Pets',
  benchmark: 9,
  values: {
    'giant-leap': 5,
    'critical-mass': 5,
    'blast-off': 11,
  },
}, {
  label: 'Beauty/Health & Fitness',
  benchmark: 6,
  values: {
    'giant-leap': 5,
    'critical-mass': 5,
    'blast-off': 11,
  },
}, {
  label: 'Games',
  benchmark: 5,
  values: {
    'giant-leap': 10,
    'critical-mass': 8,
    'blast-off': 5,
  },
}, {
  label: 'Business',
  benchmark: 6,
  values: {
    'giant-leap': 12,
    'critical-mass': 15,
    'blast-off': 10,
  },
}, {
  label: 'Books',
  benchmark: 3,
  values: {
    'giant-leap': 8,
    'critical-mass': 8,
    'blast-off': 12,
  },
}, {
  label: 'Travel',
  benchmark: 3,
  values: {
    'giant-leap': 3,
    'critical-mass': 4,
    'blast-off': 6,
  },
}, {
  label: 'Fashion',
  benchmark: 6,
  values: {
    'giant-leap': 2,
    'critical-mass': 2,
    'blast-off': 5,
  },
}, {
  label: 'Shopping',
  benchmark: 3,
  values: {
    'giant-leap': 2,
    'critical-mass': 2,
    'blast-off': 4,
  },
}, {
  label: 'Technology',
  benchmark: 2,
  values: {
    'giant-leap': 7,
    'critical-mass': 8,
    'blast-off': 6,
  },
}, {
  label: 'Environment',
  benchmark: 5,
  values: {
    'giant-leap': 1,
    'critical-mass': 2,
    'blast-off': 3,
  },
}, {
  label: 'Politics',
  benchmark: 2,
  values: {
    'giant-leap': 2,
    'critical-mass': 3,
    'blast-off': 1,
  },
}, {
  label: 'Movies',
  benchmark: 3,
  values: {
    'giant-leap': 5,
    'critical-mass': 5,
    'blast-off': 6,
  },
}, {
  label: 'Sports',
  benchmark: 1,
  values: {
    'giant-leap': 21,
    'critical-mass': 20,
    'blast-off': 21,
  },
}, {
  label: 'Fine arts',
  benchmark: 2,
  values: {
    'giant-leap': 6,
    'critical-mass': 6,
    'blast-off': 7,
  },
}, {
  label: 'TV',
  benchmark: 5,
  values: {
    'giant-leap': 6,
    'critical-mass': 5,
    'blast-off': 6,
  },
}, {
  label: 'Automotive',
  benchmark: 1,
  values: {
    'giant-leap': 3,
    'critical-mass': 3,
    'blast-off': 4,
  },
}, {
  label: 'Science',
  benchmark: 2,
  values: {
    'giant-leap': 2,
    'critical-mass': 2,
    'blast-off': 2,
  },
}, {
  label: 'Photo & Video',
  benchmark: 2,
  values: {
    'giant-leap': 4,
    'critical-mass': 4,
    'blast-off': 4,
  },
}];

export const lineChartKey = [{
  color: 'new-horizon',
  label: 'Forum',
  style: 'solid',
}, {
  color: 'giant-leap',
  label: 'Blog',
  style: 'dashed',
}];

export const lineChartData = [{
  label: 'Forum',
  values: [14, 18, 15, 14, 13, 12, 21, 17, 23, 18, 17, 9, 16, 7, 2, 8, 12, 11, 15, 9, 6, 7, 8, 7, 14, 7, 7],
}, {
  label: 'Blog',
  values: [7, 7, 14, 7, 8, 7, 6, 9, 15, 11, 12, 8, 2, 7, 16, 9, 17, 18, 23, 17, 21, 12, 13, 14, 15, 18, 14],
}];

/* Data points for Dec 1st until Dec 27th. Create labels for every 2nd day */
export const lineChartXAxisLabels = Array(14).fill(null).map((_, index) => ({
  label: `Dec ${ 1 + index * 2 }`,
  value: index * 100 / 13,
}));

export const sparkLineBenchmark = 10;

export const sparkLineData = [{
  lineColor: 'overlay-light',
  pointColor: 'giant-leap',
  values: [7, 7, 14, 7, 8, 7, 6, 9, 15, 11, 12, 8, 2, 7, 16, 9, 17, 18, 23, 17, 21, 12, 13, 14, 15, 18, 14],
}];

export const sparkLineEmptyData = [{
  lineColor: 'overlay-light',
  pointColor: 'giant-leap',
  values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}];

export const sparkLineNoDifferenceData = [{
  lineColor: 'overlay-light',
  pointColor: 'giant-leap',
  values: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
}];

export const radarChartData = [{
  border: true,
  color: 'critical-mass',
  fill: true,
  label: 'Dolar Amor',
  points: true,
  values: [75, 50, 50, 70, 50, 85, 50, 75, 50, 20],
}, {
  border: true,
  color: 'social-twitter',
  fill: true,
  label: 'Lorem Ipsum',
  points: true,
  values: [55, 50, 55, 40, 50, 85, 60, 40, 60, 35],
}, {
  border: false,
  color: 'subtle',
  fill: true,
  label: 'Background',
  points: false,
  values: [20, 50, 75, 50, 85, 50, 70, 50, 50, 75],
}];

export const radarChartXAxisLabels = [
  'Forbidden Planet',
  'Tiny Clanger',
  'Critical Mass',
  'Fantasitc Voyage',
  'Paradise Lost',
  'Serene Sea',
  'Event Horizon',
  'Electric Dreams',
  'Outer Limits',
  'Giant Leap',
];

export const radarChartYAxisLabels = [{
  label: '100%',
  value: 100,
}, {
  label: '75%',
  value: 75,
}, {
  label: '50%',
  value: 50,
}, {
  label: '25%',
  value: 25,
}, {
  label: '',
  value: 0,
}];

export const wordCloudDataText = [
  'Manager Brandwatch',
  'Marketing Brandwatch',
  'Developer Brandwatch',
  'Social Media',
  'Director Brandwatch',
  'Customer Success',
  'Social Listening',
  'Account',
  'Opinions',
  'Social Data',
  'Bad Puns',
  'Life',
  'Team Brandwatch',
  'VP Engineering',
  'London',
  'Social Intelligence',
  'Systems',
  'CEO',
  'Part Time',
  'Proud',
  'UX Researcher Brandwatch',
  'Other Topics',
];

export const wordCloudDataEmoji = [
  '🚨',
  '👹',
  '🤡',
  '👽',
  '🔥',
  '😽',
  '😍',
  '👻',
  '🤠',
  '💻',
  '😈',
  '💋',
  '🍆',
  '🏅',
  '🎾',
  '🎱',
  '🥑',
  '🍔',
];

export const wordCloudData = [
  ...wordCloudDataText,
  ...wordCloudDataEmoji,
];
