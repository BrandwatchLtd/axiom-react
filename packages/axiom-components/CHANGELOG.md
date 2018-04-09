# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="1.4.0"></a>
# [1.4.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.3.0...@brandwatch/axiom-components@1.4.0) (2018-04-09)


### Features

* **Console:** Added further shading possibilities ([76356c4](https://github.com/HHogg/axiom/commit/76356c4))




      <a name="1.3.0"></a>
# [1.3.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.2.3...@brandwatch/axiom-components@1.3.0) (2018-04-09)


### Bug Fixes

* **Badge:** Adds interactive styling when onClick is given ([b4b7982](https://github.com/HHogg/axiom/commit/b4b7982))


### Features

* **AlertCard:** Added new AlertCard component ([ad77587](https://github.com/HHogg/axiom/commit/ad77587))




  <a name="1.2.3"></a>
## [1.2.3](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.2.2...@brandwatch/axiom-components@1.2.3) (2018-04-06)


### Bug Fixes

* **Enzyme:** Moves enzyme-to-json to a top level dev dependency ([85dcfb5](https://github.com/HHogg/axiom/commit/85dcfb5))




<a name="1.2.2"></a>
## [1.2.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.2.1...@brandwatch/axiom-components@1.2.2) (2018-04-06)


### Bug Fixes

* **Card:** Apply the same hover state when a card has focus ([bc4f338](https://github.com/HHogg/axiom/commit/bc4f338))
* **Dropdown:** Open dropdown when DropdownTarget has focus ([3e7854b](https://github.com/HHogg/axiom/commit/3e7854b))
* **Link:** Apply hover states when Links are focused ([a60cd4c](https://github.com/HHogg/axiom/commit/a60cd4c))
* **Position:** Offset variable not on scope for preprocessing ([6ac7908](https://github.com/HHogg/axiom/commit/6ac7908))
* **Position:** Reduces offset when arrow is not used ([f61116c](https://github.com/HHogg/axiom/commit/f61116c))




<a name="1.2.1"></a>
## [1.2.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.2.0...@brandwatch/axiom-components@1.2.1) (2018-04-05)


### Bug Fixes

* **Editable:** Fixes issue where given prop is the same as it was before ([6e8f563](https://github.com/HHogg/axiom/commit/6e8f563))




<a name="1.2.0"></a>
# [1.2.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.1.0...@brandwatch/axiom-components@1.2.0) (2018-04-05)


### Features

* **DropdownMenuItem:** Adds keepOpen property ([9255902](https://github.com/HHogg/axiom/commit/9255902))




<a name="1.1.0"></a>
# [1.1.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.0.2...@brandwatch/axiom-components@1.1.0) (2018-03-29)


### Features

* **Base:** Add container property to Base component for relative positioning ([bfc3eee](https://github.com/HHogg/axiom/commit/bfc3eee))




<a name="1.0.2"></a>
## [1.0.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.0.1...@brandwatch/axiom-components@1.0.2) (2018-03-28)


### Bug Fixes

* **Tabset:** Call onClick for Tabs when using controlled Tabset component ([f34222c](https://github.com/HHogg/axiom/commit/f34222c))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.0.0...@brandwatch/axiom-components@1.0.1) (2018-03-27)


### Bug Fixes

* **Select:** Only add onClear 'X' when an onClear is given ([5c608c1](https://github.com/HHogg/axiom/commit/5c608c1))




<a name="1.0.0"></a>
# [1.0.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.3.0...@brandwatch/axiom-components@1.0.0) (2018-03-27)


### Bug Fixes

* **Colours:** Design changes to colours and shadows. ([42f73c2](https://github.com/HHogg/axiom/commit/42f73c2))
* **Modal:** Themed overlay colours for Modals (Dialogs and anything else using overlayed Portals) ([c81a989](https://github.com/HHogg/axiom/commit/c81a989))
* **UI Colours:** Updated UI colours for optional shaded backgrounds and translucent hover and active colours ([21841be](https://github.com/HHogg/axiom/commit/21841be))


### Features

* **Card:** Improved shadow, border and shade design pattern. ([806d5dc](https://github.com/HHogg/axiom/commit/806d5dc))
* **Platform:** Added ability for a shade choice ([59e39b8](https://github.com/HHogg/axiom/commit/59e39b8))


### BREAKING CHANGES

* **Colours:**   * CSS variable names changes:
--opacity-shadow is now --opacity-shadow--light
--color-theme-day-shadow is now --color-theme-day-shadow--light
--color-theme-night-shadow is now --color-theme-night-shadow--light
--color-theme-shadow is now --color-theme-shadow--light
--color-external-twitter-blue is now --color-social-twitter
* `color` prop has been removed from Card and replaced for `shade` prop.
* `elevation` prop has been removed from Card and replaced for a `shadow` flag.
* `twitter-blue` value for `textColor` is now just `twitter`.
* **Modal:** Modal component `withOverlay` flag has been removed. It is implied from the `overlayShddow` prop. `withOverlay={ false }` would need chaning to `overlayShadow={ null }`.
* **Card:** * `color` prop has been removed from Card and replaced for `shade` prop.
* `elevation` prop has been removed from Card and replaced for a `shadow` flag.




<a name="0.3.0"></a>
# [0.3.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.2.5...@brandwatch/axiom-components@0.3.0) (2018-03-27)


### Bug Fixes

* **TableRow:** Design fix for a dotted separator between table rows. ([7693d81](https://github.com/HHogg/axiom/commit/7693d81))


### Features

* **Badge:** Added new product colour options ([ea69b6c](https://github.com/HHogg/axiom/commit/ea69b6c))
* **ColorPicker:** Added new product colour options ([48902c1](https://github.com/HHogg/axiom/commit/48902c1))
* **Colors:** Added and updated UI, Product, Sentiment and Social colours. ([1049a10](https://github.com/HHogg/axiom/commit/1049a10))
* **Text:** Added new social and product colour options ([920e4f0](https://github.com/HHogg/axiom/commit/920e4f0))




<a name="0.2.5"></a>
## [0.2.5](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.2.4...@brandwatch/axiom-components@0.2.5) (2018-03-21)


### Bug Fixes

* **ChedioButtox:** adds disabled styling to Chedio labels ([6106e95](https://github.com/HHogg/axiom/commit/6106e95))




<a name="0.2.4"></a>
## [0.2.4](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.2.3...@brandwatch/axiom-components@0.2.4) (2018-03-15)


### Bug Fixes

* **ColorPicker:** Added automation test ids for targeting color picker trigger and options ([e71630c](https://github.com/HHogg/axiom/commit/e71630c))
* **DataPicker:** Added automation test ids for targeting dropdown trigger ([a9f0815](https://github.com/HHogg/axiom/commit/a9f0815))




<a name="0.2.3"></a>
## [0.2.3](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.2.2...@brandwatch/axiom-components@0.2.3) (2018-03-12)




**Note:** Version bump only for package @brandwatch/axiom-components

<a name="0.2.2"></a>
## [0.2.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.2.1...@brandwatch/axiom-components@0.2.2) (2018-03-12)


### Bug Fixes

* **Card:** Added CardImage dotted separator ([a81939c](https://github.com/HHogg/axiom/commit/a81939c))
* **TextGroup:** Added missing TextGroup export under new name of InputWrapper ([c692e98](https://github.com/HHogg/axiom/commit/c692e98))




<a name="0.2.1"></a>
## [0.2.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.2.0...@brandwatch/axiom-components@0.2.1) (2018-03-07)


### Bug Fixes

* **Dependecy:** Added missing [@brandwatch](https://github.com/brandwatch)/axiom-automation-testing dependency ([1e23ca6](https://github.com/HHogg/axiom/commit/1e23ca6))




<a name="0.2.0"></a>
## [0.2.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.1.0...@brandwatch/axiom-components@0.2.0) (2018-03-06)




**Note:** Version bump only for package @brandwatch/axiom-components

<a name="0.1.0"></a>
# [0.1.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.0.3...@brandwatch/axiom-components@0.1.0) (2018-03-06)


### Features

* **Line:** Added low level Line and LinePoint components ([35b999c](https://github.com/HHogg/axiom/commit/35b999c))




<a name="0.0.3"></a>
## [0.0.3](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@0.0.2...@brandwatch/axiom-components@0.0.3) (2018-03-06)




**Note:** Version bump only for package @brandwatch/axiom-components

<a name="0.0.2"></a>
## 0.0.2 (2018-03-02)




**Note:** Version bump only for package @brandwatch/axiom-components

<a name="0.0.1"></a>
## 0.0.1 (2018-02-22)




**Note:** Version bump only for package @brandwatch/axiom-components
