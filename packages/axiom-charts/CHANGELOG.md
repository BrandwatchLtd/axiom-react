# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.3.0"></a>
# [1.3.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.2.0...@brandwatch/axiom-charts@1.3.0) (2018-03-27)


### Bug Fixes

* **DotPlot:** Incorrectly faded Benchmarking and Difference lines ([2688fdc](https://github.com/HHogg/axiom/commit/2688fdc))
* **BarChart:** Do not break labels with (thin)spaces
* **axisUtils.getAxisUpper:** rounds to same order of magnitude instead of next

### Features

* **Bar:** Added new product colour options ([fbd8a8a](https://github.com/HHogg/axiom/commit/fbd8a8a))
* **DataPoint:** Added new product colour options ([d101fda](https://github.com/HHogg/axiom/commit/d101fda))
* **Line:** Added new product colour options ([60d8363](https://github.com/HHogg/axiom/commit/60d8363))
* **WordCloud:** Added new product colour options ([67228c6](https://github.com/HHogg/axiom/commit/67228c6))




<a name="1.2.0"></a>
# [1.2.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.1.2...@brandwatch/axiom-charts@1.2.0) (2018-03-21)


### Features

* adds axis utils ([9993855](https://github.com/HHogg/axiom/commit/9993855))




<a name="1.1.2"></a>
## [1.1.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.1.1...@brandwatch/axiom-charts@1.1.2) (2018-03-15)


### Bug Fixes

* **BarChart:** Added automation testing ids for targeting bars ([061b24d](https://github.com/HHogg/axiom/commit/061b24d))
* **DotPlotChart:** Added automation testing ids for targeting dots ([58b7514](https://github.com/HHogg/axiom/commit/58b7514))
* **Line:** Unevenly distributed ([ee39124](https://github.com/HHogg/axiom/commit/ee39124))




<a name="1.1.1"></a>
## [1.1.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.1.0...@brandwatch/axiom-charts@1.1.1) (2018-03-12)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.1.0"></a>
# [1.1.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.0.2...@brandwatch/axiom-charts@1.1.0) (2018-03-12)


### Features

* **LineChart:** Added new LineChart component ([3ad82b9](https://github.com/HHogg/axiom/commit/3ad82b9))




<a name="1.0.2"></a>
## [1.0.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.0.1...@brandwatch/axiom-charts@1.0.2) (2018-03-07)


### Bug Fixes

* **BarChart:** Retain focused state when Contextual component opens ([da20f49](https://github.com/HHogg/axiom/commit/da20f49))
* **DotPlotChart:** Retain focused state when Contextual component is opened ([3c36c93](https://github.com/HHogg/axiom/commit/3c36c93))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.0.0...@brandwatch/axiom-charts@1.0.1) (2018-03-07)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.0.0"></a>
# [1.0.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@0.2.0...@brandwatch/axiom-charts@1.0.0) (2018-03-07)


### Features

* **Bar:** Add barLabel property ([9d943db](https://github.com/HHogg/axiom/commit/9d943db))
* **BarChart:** BarChart API changed to allow absolute values ([8eb1f4a](https://github.com/HHogg/axiom/commit/8eb1f4a))
* **ChartTableRows:** Mark prop xAxisLabels as required ([5b7e795](https://github.com/HHogg/axiom/commit/5b7e795))
* **DotPlotChart:** Add dotPlotLabel property ([f6aeed5](https://github.com/HHogg/axiom/commit/f6aeed5))
* **DotPlotChart:** DotPlotChart API changed to allow absolute values ([3c569f1](https://github.com/HHogg/axiom/commit/3c569f1))


### BREAKING CHANGES

* **DotPlotChart:** * Added `upper` prop on DotPlotChart
* Added `lower` prop on DotPlotChart

To retain the previous behaviour of values between 0–100 you have to pass `lower=0` and `upper=100`
* **BarChart:** * Added `upper` prop on BarChart
* Added `lower` prop on BarChart

To retain the previous behaviour of values between 0–100 you have to pass `lower=0` and `upper=100`




<a name="0.2.0"></a>
## [0.2.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@0.01.0...@brandwatch/axiom-charts@0.2.0) (2018-03-06)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="0.1.0"></a>
# [0.1.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@0.0.3...@brandwatch/axiom-charts@0.1.0) (2018-03-06)


### Features

* **DataPoint:** Added style prop to DataPoint with values hollow and solid ([b3b8e00](https://github.com/HHogg/axiom/commit/b3b8e00))
* **Line:** Added low level Line and LinePoint components ([35b999c](https://github.com/HHogg/axiom/commit/35b999c))
* **SparkLine:** Added new SparkLine component ([5e63286](https://github.com/HHogg/axiom/commit/5e63286))




<a name="0.0.3"></a>
## [0.0.3](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@0.0.2...@brandwatch/axiom-charts@0.0.3) (2018-03-06)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="0.0.2"></a>
## 0.0.2 (2018-03-02)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="0.0.1"></a>
## 0.0.1 (2018-02-22)




**Note:** Version bump only for package @brandwatch/axiom-charts
