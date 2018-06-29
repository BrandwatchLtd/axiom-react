# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.4.0"></a>
# [2.4.0](https://github.com/lpoulter/axiom/compare/@brandwatch/axiom-charts@2.3.7...@brandwatch/axiom-charts@2.4.0) (2018-06-29)


### Features

* **Colors:** Added new product colors to components ([fb3f7ec](https://github.com/lpoulter/axiom/commit/fb3f7ec))




<a name="2.3.7"></a>
## [2.3.7](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-charts@2.3.6...@brandwatch/axiom-charts@2.3.7) (2018-06-22)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="2.3.6"></a>
## [2.3.6](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@2.3.5...@brandwatch/axiom-charts@2.3.6) (2018-06-14)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="2.3.5"></a>
## [2.3.5](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-charts@2.3.4...@brandwatch/axiom-charts@2.3.5) (2018-06-12)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="2.3.4"></a>
## [2.3.4](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-charts@2.3.3...@brandwatch/axiom-charts@2.3.4) (2018-06-11)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="2.3.3"></a>
## [2.3.3](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-charts@2.3.2...@brandwatch/axiom-charts@2.3.3) (2018-06-05)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="2.3.2"></a>
## [2.3.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@2.3.1...@brandwatch/axiom-charts@2.3.2) (2018-06-04)


### Bug Fixes

* **BarChart:** Corrected where row visibility handler is added so feature is off by default ([b662415](https://github.com/HHogg/axiom/commit/b662415))




<a name="2.3.1"></a>
## [2.3.1](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-charts@2.3.0...@brandwatch/axiom-charts@2.3.1) (2018-06-01)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="2.3.0"></a>
# [2.3.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@2.2.0...@brandwatch/axiom-charts@2.3.0) (2018-05-25)


### Features

* **BarChart:** Add DifferenceAreaTooltipContext prop ([4b0552d](https://github.com/HHogg/axiom/commit/4b0552d))




<a name="2.2.0"></a>
# [2.2.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@2.1.2...@brandwatch/axiom-charts@2.2.0) (2018-05-24)


### Features

* **BarChart:** Added onToggleRowVisibility action ([a0144bc](https://github.com/HHogg/axiom/commit/a0144bc))




<a name="2.1.2"></a>
## [2.1.2](https://github.com/pmsorhaindo/axiom/compare/@brandwatch/axiom-charts@2.1.1...@brandwatch/axiom-charts@2.1.2) (2018-05-24)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="2.1.1"></a>
## [2.1.1](https://github.com/pmsorhaindo/axiom/compare/@brandwatch/axiom-charts@2.1.0...@brandwatch/axiom-charts@2.1.1) (2018-05-24)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="2.1.0"></a>
# [2.1.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@2.0.1...@brandwatch/axiom-charts@2.1.0) (2018-05-22)


### Features

* **BarChart:** Add new prop isBenchmarkLineFadable ([76a51ed](https://github.com/HHogg/axiom/commit/76a51ed))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@2.0.0...@brandwatch/axiom-charts@2.0.1) (2018-05-17)


### Bug Fixes

* **BarChart:** vertically center label when size is specified ([67c82f9](https://github.com/HHogg/axiom/commit/67c82f9))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.9.0...@brandwatch/axiom-charts@2.0.0) (2018-05-16)


### Bug Fixes

* **BarChart:** Fix hover when BarChart has just single values ([7d69883](https://github.com/HHogg/axiom/commit/7d69883))


### Features

* **BarChart:** Added tooltips to BarChart bars and benchmark line ([56e8b51](https://github.com/HHogg/axiom/commit/56e8b51))
* **BarChart:** Changed xAxisLabel property to be a method that returns an array of labels ([f612a87](https://github.com/HHogg/axiom/commit/f612a87))
* **DotPlotChart:** Changed xAxisLabel property to be a method that returns an array of labels ([f8959be](https://github.com/HHogg/axiom/commit/f8959be))
* **LineChart:** Changed xAxisLabel property to be a method that returns an array of labels ([477fe90](https://github.com/HHogg/axiom/commit/477fe90))


### BREAKING CHANGES

* **LineChart:** The LineChart now only accepts a method for the xAxisLabel property instead of an array. The method receives a "lower" and an "upper" argument and expects an array to be returned.
* **DotPlotChart:** The DotPlotChart now only accepts a method for the xAxisLabel property instead of an array. The method receives a "lower" and an "upper" argument and expects an array to be returned.
* **BarChart:** The BarChart now only accepts a method for the xAxisLabel property instead of an array. The method receives a "lower" and an "upper" argument and expects an array to be returned.




<a name="1.9.0"></a>
# [1.9.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.8.0...@brandwatch/axiom-charts@1.9.0) (2018-05-15)


### Bug Fixes

* **BarChart:** Do not highlight all bars with same color if there is only one bar per row ([1a6ac5f](https://github.com/HHogg/axiom/commit/1a6ac5f))


### Features

* **BarChart:** Add new prop showDifferenceArea ([557b6f4](https://github.com/HHogg/axiom/commit/557b6f4))
* **BarChart:** Add new prop stretch ([ecbb8ba](https://github.com/HHogg/axiom/commit/ecbb8ba))




<a name="1.8.0"></a>
# [1.8.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.7.6...@brandwatch/axiom-charts@1.8.0) (2018-05-10)


### Features

* **Bar:** Add new prop fillMode ([a0b1c8b](https://github.com/HHogg/axiom/commit/a0b1c8b))




<a name="1.7.6"></a>
## [1.7.6](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.7.5...@brandwatch/axiom-charts@1.7.6) (2018-05-03)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.7.5"></a>
## [1.7.5](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.7.4...@brandwatch/axiom-charts@1.7.5) (2018-05-02)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.7.4"></a>
## [1.7.4](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.7.3...@brandwatch/axiom-charts@1.7.4) (2018-04-30)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.7.3"></a>
## [1.7.3](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.7.2...@brandwatch/axiom-charts@1.7.3) (2018-04-24)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.7.2"></a>
## [1.7.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.7.1...@brandwatch/axiom-charts@1.7.2) (2018-04-20)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.7.1"></a>
## [1.7.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.7.0...@brandwatch/axiom-charts@1.7.1) (2018-04-18)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.7.0"></a>
# [1.7.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.6.3...@brandwatch/axiom-charts@1.7.0) (2018-04-16)


### Features

* **LineChart:** Added onPointClick action to the LineChart ([c80c1d1](https://github.com/HHogg/axiom/commit/c80c1d1))




<a name="1.6.3"></a>
## [1.6.3](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.6.2...@brandwatch/axiom-charts@1.6.3) (2018-04-10)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.6.2"></a>
## [1.6.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.6.1...@brandwatch/axiom-charts@1.6.2) (2018-04-09)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.6.1"></a>
## [1.6.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.6.0...@brandwatch/axiom-charts@1.6.1) (2018-04-09)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.6.0"></a>
# [1.6.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.5.0...@brandwatch/axiom-charts@1.6.0) (2018-04-09)


### Bug Fixes

* **BarChart:** fix stale label when using duplicate labels ([18917ee](https://github.com/HHogg/axiom/commit/18917ee))


### Features

* **LineChart:** pass index of data to tooltip callback of the linechart ([4dc03aa](https://github.com/HHogg/axiom/commit/4dc03aa))




<a name="1.5.0"></a>
# [1.5.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.4.4...@brandwatch/axiom-charts@1.5.0) (2018-04-09)


### Features

* **charts:** add support for social colors ([d94ee92](https://github.com/HHogg/axiom/commit/d94ee92))




<a name="1.4.4"></a>
## [1.4.4](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.4.3...@brandwatch/axiom-charts@1.4.4) (2018-04-06)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.4.3"></a>
## [1.4.3](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.4.2...@brandwatch/axiom-charts@1.4.3) (2018-04-06)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.4.2"></a>
## [1.4.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.4.1...@brandwatch/axiom-charts@1.4.2) (2018-04-05)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.4.1"></a>
## [1.4.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.4.0...@brandwatch/axiom-charts@1.4.1) (2018-04-05)


### Bug Fixes

* **axisUtils:** when upper and lower are equal return no labels ([e5b56e4](https://github.com/HHogg/axiom/commit/e5b56e4))




<a name="1.4.0"></a>
# [1.4.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.3.3...@brandwatch/axiom-charts@1.4.0) (2018-03-29)


### Features

* **charts:** add support for sentiment colors ([83809ab](https://github.com/HHogg/axiom/commit/83809ab))




<a name="1.3.3"></a>
## [1.3.3](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.3.2...@brandwatch/axiom-charts@1.3.3) (2018-03-28)




**Note:** Version bump only for package @brandwatch/axiom-charts

<a name="1.3.2"></a>
## [1.3.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.3.1...@brandwatch/axiom-charts@1.3.2) (2018-03-27)


### Bug Fixes

* **BarChart:** hover only when BarChart displays multiple values ([f49a585](https://github.com/HHogg/axiom/commit/f49a585))




<a name="1.3.1"></a>
## [1.3.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-charts@1.3.0...@brandwatch/axiom-charts@1.3.1) (2018-03-27)




**Note:** Version bump only for package @brandwatch/axiom-charts

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
