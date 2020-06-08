# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [11.1.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@11.0.0...@brandwatch/axiom-components@11.1.0) (2020-06-08)


### Bug Fixes

* 🐛 Reduce font weight and small lozenge height ([197e156](https://github.com/BrandwatchLtd/axiom-react/commit/197e1566842b2e4b6c70a769aff342947a68323a))
* 🐛 Set status text to uppercase ([09029f6](https://github.com/BrandwatchLtd/axiom-react/commit/09029f636cb208fbee22a3a102ad2924d15ed4b6))
* 🐛 update snapshots ([8b6a92a](https://github.com/BrandwatchLtd/axiom-react/commit/8b6a92a7422fa8f2f0313f42e2c508b67a771c5e))
* **Checkbox:** 🐛 Improve checkbox check mark ([7763f25](https://github.com/BrandwatchLtd/axiom-react/commit/7763f254032a856b156e7342720043983d27a057))
* 🐛 Add all icon types to proptypes ([c36632f](https://github.com/BrandwatchLtd/axiom-react/commit/c36632fd287689b9f2d7cd9201ba5bebf27ee7d6))
* **Tooltip:** 🐛 correct default position ([71895b3](https://github.com/BrandwatchLtd/axiom-react/commit/71895b3b64a05612a62ccfeca95037f1fc79c7c4))


### Features

* **lozenge:** 🎸 Adds new Lozenge component ([76be5bc](https://github.com/BrandwatchLtd/axiom-react/commit/76be5bce105b5c3861f2d26096ac0cb0022a5128))
* **lozenge:** 🎸 Rename type to status ([e6be5c5](https://github.com/BrandwatchLtd/axiom-react/commit/e6be5c5bcd649359df79e0b4d5b4f7b858e220f9))
* **progressInfinite:** 🎸 Add classname to ProgressInfinite ([6128a3e](https://github.com/BrandwatchLtd/axiom-react/commit/6128a3e50309d178a22d00963a68cd5a895ad07b))


### Reverts

* Revert "docs: ✏️ update button example to include variant" ([7493e41](https://github.com/BrandwatchLtd/axiom-react/commit/7493e416cf0825f6ebe7e0ed71c297537c399727))





# [11.0.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@10.2.1...@brandwatch/axiom-components@11.0.0) (2020-05-05)


### Code Refactoring

* 💡 Rename Button attribute style => variant ([8886ae0](https://github.com/BrandwatchLtd/axiom-react/commit/8886ae0))


### BREAKING CHANGES

* 🧨
<Button style="primary"> becomes <Button variant="primary">
Please use `npx axiom-codemods rename-button-style-attribute <path>` to replace in your code.





## [10.2.1](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@10.2.0...@brandwatch/axiom-components@10.2.1) (2020-05-04)

**Note:** Version bump only for package @brandwatch/axiom-components





# [10.2.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@10.1.0...@brandwatch/axiom-components@10.2.0) (2020-04-27)


### Bug Fixes

* **Slider:** Fix vertical alignment for the thumb in small slider ([7c13a5f](https://github.com/BrandwatchLtd/axiom-react/commit/7c13a5f))


### Features

* **Icons:** Add extra social icons ([4cccbdc](https://github.com/BrandwatchLtd/axiom-react/commit/4cccbdc))





# [10.1.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@10.0.0...@brandwatch/axiom-components@10.1.0) (2020-04-06)


### Features

* **ColorPicker:** add withEmpty prop for clearing selection ([2f548d1](https://github.com/BrandwatchLtd/axiom-react/commit/2f548d1))





# [10.0.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@10.0.0-alpha.0...@brandwatch/axiom-components@10.0.0) (2020-04-02)

**Note:** Version bump only for package @brandwatch/axiom-components





# [9.0.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.8.4...@brandwatch/axiom-components@9.0.0) (2020-03-05)


### Bug Fixes

* missed adding new icon to icon prop ([1b62940](https://github.com/BrandwatchLtd/axiom-react/commit/1b62940))


### Code Refactoring

* 💡 Removes AlertDropdown from axiom-components ([62f7e52](https://github.com/BrandwatchLtd/axiom-react/commit/62f7e52))
* 💡 Removes CardGraphic from axiom-components ([6b197e1](https://github.com/BrandwatchLtd/axiom-react/commit/6b197e1))


### Features

* 🎸 Classnames ([bcb3504](https://github.com/BrandwatchLtd/axiom-react/commit/bcb3504))
* 🎸 Storybook ([8e75699](https://github.com/BrandwatchLtd/axiom-react/commit/8e75699))


### BREAKING CHANGES

* 🧨 CardGraphic is no longer supported
* 🧨 AlertDropdown is no longer supported





## [8.8.4](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.8.2...@brandwatch/axiom-components@8.8.4) (2020-02-15)

**Note:** Version bump only for package @brandwatch/axiom-components





## [8.8.2](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.8.1...@brandwatch/axiom-components@8.8.2) (2020-02-14)

**Note:** Version bump only for package @brandwatch/axiom-components





## [8.8.1](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.8.0...@brandwatch/axiom-components@8.8.1) (2020-02-07)


### Bug Fixes

* updates luxon to fix chrome 80 bug ([0ed3b94](https://github.com/BrandwatchLtd/axiom-react/commit/0ed3b94))





# [8.8.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.7.1...@brandwatch/axiom-components@8.8.0) (2020-01-30)


### Features

* **Icons:** Add new icons ([adb247d](https://github.com/BrandwatchLtd/axiom-react/commit/adb247d))





## [8.7.1](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.7.0...@brandwatch/axiom-components@8.7.1) (2020-01-17)


### Bug Fixes

* **CheckBox:** Set native checkbox input to position fixed. ([8f41045](https://github.com/BrandwatchLtd/axiom-react/commit/8f41045))





# [8.7.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.5.0...@brandwatch/axiom-components@8.7.0) (2020-01-14)


### Bug Fixes

* **Candytar:** baseline alignment for initials  ([fe2a08d](https://github.com/BrandwatchLtd/axiom-react/commit/fe2a08d))


### Features

* **Icon:** Add download icon ([f91b5fb](https://github.com/BrandwatchLtd/axiom-react/commit/f91b5fb))
* **Table:** Allow classname to be passed to Table Components ([bc836c5](https://github.com/BrandwatchLtd/axiom-react/commit/bc836c5))





# [8.6.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.5.0...@brandwatch/axiom-components@8.6.0) (2020-01-14)


### Bug Fixes

* **Candytar:** baseline alignment for initials  ([fe2a08d](https://github.com/BrandwatchLtd/axiom-react/commit/fe2a08d))


### Features

* **Icon:** Add download icon ([f91b5fb](https://github.com/BrandwatchLtd/axiom-react/commit/f91b5fb))
* **Table:** Allow classname to be passed to Table Components ([bc836c5](https://github.com/BrandwatchLtd/axiom-react/commit/bc836c5))





# [8.5.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.4.2...@brandwatch/axiom-components@8.5.0) (2019-12-03)


### Bug Fixes

* **Candytar:** Initals baseline aligment ([d282361](https://github.com/BrandwatchLtd/axiom-react/commit/d282361))


### Features

* **Table:** added ability to specify space prop ([1833b2d](https://github.com/BrandwatchLtd/axiom-react/commit/1833b2d))





## [8.4.2](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.4.1...@brandwatch/axiom-components@8.4.2) (2019-11-18)


### Bug Fixes

* **popper:** downgrade to fix browser crashing ([343f18d](https://github.com/BrandwatchLtd/axiom-react/commit/343f18d))





## [8.4.1](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.4.0...@brandwatch/axiom-components@8.4.1) (2019-11-14)


### Bug Fixes

* fix issue where popper would completely freeze the browser tab ([410a25b](https://github.com/BrandwatchLtd/axiom-react/commit/410a25b))





# [8.4.0](https://github.com/MariamBashir/axiom/compare/@brandwatch/axiom-components@8.3.0...@brandwatch/axiom-components@8.4.0) (2019-10-31)


### Features

* **Icon:** adding filter-line icon ([d89ed66](https://github.com/MariamBashir/axiom/commit/d89ed66))





# [8.3.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.2.0...@brandwatch/axiom-components@8.3.0) (2019-10-28)


### Features

* **Validation:** Add "showArrow" property to InlineValidation component ([f767029](https://github.com/BrandwatchLtd/axiom-react/commit/f767029))





# [8.2.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@8.1.0...@brandwatch/axiom-components@8.2.0) (2019-10-23)


### Features

* **Separator:** allow className prop ([dc20406](https://github.com/BrandwatchLtd/axiom-react/commit/dc20406))





# [8.1.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@8.0.0...@brandwatch/axiom-components@8.1.0) (2019-10-17)


### Features

* **TextInput:** Adding a "labelSpace" property ([2fcf7e1](https://github.com/tomru/axiom-react/commit/2fcf7e1))





# [8.0.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@7.1.0...@brandwatch/axiom-components@8.0.0) (2019-10-14)


### Features

* **Dialog:** Adds new large and fullscreen options. ([d1ea837](https://github.com/tomru/axiom-react/commit/d1ea837))
* **Table:** Add option align text by centre in TableCell and TableHeaderLabel ([6c95811](https://github.com/tomru/axiom-react/commit/6c95811))


### BREAKING CHANGES

* **Dialog:** Usage of the fullscreen property on the Dialog component will now have no effect. You can recreate the prevouis fullscreen mode by passing `size=large` e.g.
```
<Dialog size="large" />
```
Size fullscreen will remove the padding prevouisly found in fullscreen mode.





# [7.1.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@7.0.0...@brandwatch/axiom-components@7.1.0) (2019-10-07)


### Features

* **Candytar:** accepting and showing a user’s initials  ([8742cc1](https://github.com/tomru/axiom-react/commit/8742cc1))





# [7.0.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@6.7.0...@brandwatch/axiom-components@7.0.0) (2019-09-26)


### Features

* **TextInput:** Removed condition preventing "clear" icon AND input icon ([7171a32](https://github.com/tomru/axiom-react/commit/7171a32))


### BREAKING CHANGES

* **TextInput:** This is going to cause some design "glitches" where a TextInput
is used with the "onClear" property AND a TextInputIcon as a child WITHOUT the
"align" property being set to "left".

The following code examples are affected:

TextInputIcon with no "align" property:
In this case previously the "TextInputIcon" wouldn't be visible but with this
change is going to be visible and aligned on the right.
```js
<TextInput onClear={ () => {} }>
  <TextInputIcon name="magnify-glass" />
</TextInput>
```

You can fix this by adding the "align" property to the TextInputIcon
```js
<TextInput onClear={ () => {} }>
  <TextInputIcon name="magnify-glass" align="left" />
</TextInput>
```

Another affected example would be this:
Same as in the previous example the "TextInputIcon" wouldn't be visible but with
this change it would be visible and aligned on the right.
```js
<TextInput onClear={ () => {} }>
  <TextInputIcon name="magnify-glass" align="right" />
</TextInput>
```

Same as before you can fix this by changing the "align" property on the
"TextInputIcon" to "left":
```js
<TextInput onClear={ () => {} }>
  <TextInputIcon name="magnify-glass" align="left" />
</TextInput>
```





# [6.7.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@6.6.0...@brandwatch/axiom-components@6.7.0) (2019-09-16)


### Features

* **handle:** Add size to slider handles. ([88875d2](https://github.com/tomru/axiom-react/commit/88875d2))
* **ProgressButton:** added flex to content wrapper ([65f89a8](https://github.com/tomru/axiom-react/commit/65f89a8))
* **Range:** Add resizeObserver polyfill ([28d4e3f](https://github.com/tomru/axiom-react/commit/28d4e3f))
* **Range:** Add resizeObserver to Range. ([5cb9ee6](https://github.com/tomru/axiom-react/commit/5cb9ee6))
* **Range:** Add responsiveness to the slider with Range. ([203a5ad](https://github.com/tomru/axiom-react/commit/203a5ad))





# [6.6.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@6.4.2...@brandwatch/axiom-components@6.6.0) (2019-09-06)


### Bug Fixes

* **animicon:** Changed Cross animation ([55602de](https://github.com/tomru/axiom-react/commit/55602de))
* removed unused class ([5736fd3](https://github.com/tomru/axiom-react/commit/5736fd3))
* **Chip:** remove dash before var ([19aa0c2](https://github.com/tomru/axiom-react/commit/19aa0c2))
* **Chip:** remove margin left for metric  ([d9ec74c](https://github.com/tomru/axiom-react/commit/d9ec74c))
* **DatePickerContext:** the date range label shows the correct start date ([53ddcaa](https://github.com/tomru/axiom-react/commit/53ddcaa))


### Features

* added Typescript information ([aff2c05](https://github.com/tomru/axiom-react/commit/aff2c05))
* **Dropdown/Select:** Changed selected color to grey ([51c4721](https://github.com/tomru/axiom-react/commit/51c4721))
* **EllipsisTooltip:** Adds color prop to TooltipContext in EllipsisTooltip ([92571ad](https://github.com/tomru/axiom-react/commit/92571ad))
* **Icon:** add drag handle icon ([86fc69a](https://github.com/tomru/axiom-react/commit/86fc69a))
* **Icon:** Adding settings icon ([93d4617](https://github.com/tomru/axiom-react/commit/93d4617))


### Reverts

* removed typescript comments ([facd4ea](https://github.com/tomru/axiom-react/commit/facd4ea))





# [6.5.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@6.4.2...@brandwatch/axiom-components@6.5.0) (2019-09-02)


### Bug Fixes

* **animicon:** Changed Cross animation ([55602de](https://github.com/BrandwatchLtd/axiom-react/commit/55602de))
* **Chip:** remove dash before var ([19aa0c2](https://github.com/BrandwatchLtd/axiom-react/commit/19aa0c2))
* **Chip:** remove margin left for metric  ([d9ec74c](https://github.com/BrandwatchLtd/axiom-react/commit/d9ec74c))
* removed unused class ([5736fd3](https://github.com/BrandwatchLtd/axiom-react/commit/5736fd3))
* **DatePickerContext:** the date range label shows the correct start date ([53ddcaa](https://github.com/BrandwatchLtd/axiom-react/commit/53ddcaa))


### Features

* **Dropdown/Select:** Changed selected color to grey ([51c4721](https://github.com/BrandwatchLtd/axiom-react/commit/51c4721))
* **EllipsisTooltip:** Adds color prop to TooltipContext in EllipsisTooltip ([92571ad](https://github.com/BrandwatchLtd/axiom-react/commit/92571ad))
* added Typescript information ([aff2c05](https://github.com/BrandwatchLtd/axiom-react/commit/aff2c05))
* **Icon:** Adding settings icon ([93d4617](https://github.com/BrandwatchLtd/axiom-react/commit/93d4617))


### Reverts

* removed typescript comments ([facd4ea](https://github.com/BrandwatchLtd/axiom-react/commit/facd4ea))





## [6.4.2](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@6.4.1...@brandwatch/axiom-components@6.4.2) (2019-07-30)

**Note:** Version bump only for package @brandwatch/axiom-components





## [6.4.1](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@6.4.0...@brandwatch/axiom-components@6.4.1) (2019-07-25)

**Note:** Version bump only for package @brandwatch/axiom-components





# [6.4.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@6.3.5...@brandwatch/axiom-components@6.4.0) (2019-07-25)


### Features

* **Button:** add className to Button ([a8cd133](https://github.com/BrandwatchLtd/axiom-react/commit/a8cd133))





## [6.3.5](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@6.3.4...@brandwatch/axiom-components@6.3.5) (2019-07-24)

**Note:** Version bump only for package @brandwatch/axiom-components





## [6.3.4](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@6.3.3...@brandwatch/axiom-components@6.3.4) (2019-07-15)


### Bug Fixes

* **DropdownContext:** ensure ref value is not null ([22b1d1a](https://github.com/tomru/axiom-react/commit/22b1d1a))





## [6.3.3](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@6.3.2...@brandwatch/axiom-components@6.3.3) (2019-07-15)


### Bug Fixes

* **TextInput:** respect space prop on TextInput with multiple children ([d6b1038](https://github.com/tomru/axiom-react/commit/d6b1038))





## [6.3.2](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@6.3.1...@brandwatch/axiom-components@6.3.2) (2019-07-11)


### Bug Fixes

* Allow functions as ref props ([617e7eb](https://github.com/tomru/axiom-react/commit/617e7eb))
* **Range:** range sliders crossing over on mouse up ([e0c669f](https://github.com/tomru/axiom-react/commit/e0c669f))
* tests ([511937a](https://github.com/tomru/axiom-react/commit/511937a))





## [6.3.1](https://github.com/Binarytales/axiom-react/compare/@brandwatch/axiom-components@6.3.0...@brandwatch/axiom-components@6.3.1) (2019-06-25)


### Bug Fixes

* **lint:** fix linting ([ecdc173](https://github.com/Binarytales/axiom-react/commit/ecdc173))
* **lint:** more lint fixing ([9768030](https://github.com/Binarytales/axiom-react/commit/9768030))





# [6.3.0](https://github.com/bwilson-bw/axiom/compare/@brandwatch/axiom-components@6.2.0...@brandwatch/axiom-components@6.3.0) (2019-06-13)


### Features

* **CardComponents:** Add className props ([459198b](https://github.com/bwilson-bw/axiom/commit/459198b))
* **CardList:** Add classname prop ([b1539db](https://github.com/bwilson-bw/axiom/commit/b1539db))





# [6.2.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@6.1.1...@brandwatch/axiom-components@6.2.0) (2019-06-12)


### Features

* **Icon:** Adding user icon ([71f123d](https://github.com/BrandwatchLtd/axiom-react/commit/71f123d))





## [6.1.1](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@6.1.0...@brandwatch/axiom-components@6.1.1) (2019-06-07)


### Bug Fixes

* **InputWrapper:** Apply margin to hint when label is inline ([628250c](https://github.com/BrandwatchLtd/axiom-react/commit/628250c))
* **Position:** Fixes the margin depending on where the arrow is shown ([4913c45](https://github.com/BrandwatchLtd/axiom-react/commit/4913c45))





# [6.1.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@6.0.0...@brandwatch/axiom-components@6.1.0) (2019-06-06)


### Features

* **DatePicker:** Exporting DatePickerSelection to use DatePicker without Dropdown ([e11cd7f](https://github.com/tomru/axiom-react/commit/e11cd7f))





# [6.0.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@5.24.0...@brandwatch/axiom-components@6.0.0) (2019-06-05)


### Bug Fixes

* **DatePicker:** fix and rename initalDate to calendarOpenDate ([a3f807e](https://github.com/BrandwatchLtd/axiom-react/commit/a3f807e))


### Features

* **Dialog:** Add classname prop to Dialog components ([f7ba906](https://github.com/BrandwatchLtd/axiom-react/commit/f7ba906))


### BREAKING CHANGES

* **DatePicker:** to make it clearer what `initialDate` is for,
rename it to `calendarOpenDate`.





# [5.24.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@5.23.2...@brandwatch/axiom-components@5.24.0) (2019-06-03)


### Features

* **TextInput:** Adds ablity to display form labels inline ([c3b457e](https://github.com/BrandwatchLtd/axiom-react/commit/c3b457e))





## [5.23.2](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@5.23.1...@brandwatch/axiom-components@5.23.2) (2019-05-22)


### Bug Fixes

* **Range:** ensure values are in bounds ([ae7135d](https://github.com/tomru/axiom-react/commit/ae7135d))





## [5.23.1](https://github.com/Binarytales/axiom-react/compare/@brandwatch/axiom-components@5.23.0...@brandwatch/axiom-components@5.23.1) (2019-05-15)


### Bug Fixes

* **TextInputIcon:** Allow passing TooltipContext instead of TooltipContent as tooltip ([602a11d](https://github.com/Binarytales/axiom-react/commit/602a11d))





# [5.23.0](https://github.com/Binarytales/axiom-react/compare/@brandwatch/axiom-components@5.22.1...@brandwatch/axiom-components@5.23.0) (2019-05-14)


### Features

* **TextInputIcon:** Add tooltip for TextInputIcon ([8984867](https://github.com/Binarytales/axiom-react/commit/8984867))





## [5.22.1](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@5.22.0...@brandwatch/axiom-components@5.22.1) (2019-05-14)

**Note:** Version bump only for package @brandwatch/axiom-components





# [5.22.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@5.21.0...@brandwatch/axiom-components@5.22.0) (2019-05-10)


### Features

* **Context:** add className support to Context components ([aa6be10](https://github.com/BrandwatchLtd/axiom-react/commit/aa6be10))
* **Dialog:** Add Dialog prop "closeOnOverlayClick" keeps dialog open when clicking on mask ([afe0e71](https://github.com/BrandwatchLtd/axiom-react/commit/afe0e71))





# [5.21.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@5.20.0...@brandwatch/axiom-components@5.21.0) (2019-04-29)


### Bug Fixes

* **Slider/Range:** add margins so that the component width includes the handles on both ends ([8252a9c](https://github.com/tomru/axiom-react/commit/8252a9c))


### Features

* **Chip:** Added Chip and ChipList components ([3dbf2b2](https://github.com/tomru/axiom-react/commit/3dbf2b2))
* **Chip:** removed colored chips + sped up transitions on chiplist based on design review ([91f0356](https://github.com/tomru/axiom-react/commit/91f0356))
* **Chip:** removed console errors + fixed metric color + removed floats ([73ee808](https://github.com/tomru/axiom-react/commit/73ee808))





# [5.20.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@5.19.0...@brandwatch/axiom-components@5.20.0) (2019-04-25)


### Bug Fixes

* **Handle:** support withTooltip option ([fbaf5e5](https://github.com/tomru/axiom-react/commit/fbaf5e5))
* **Range:** case where handles are on the same value and the wrong one is picked ([004ef95](https://github.com/tomru/axiom-react/commit/004ef95))
* **Range:** don't mutate array prop ([49d18fa](https://github.com/tomru/axiom-react/commit/49d18fa))
* **Range:** ensure bound values are rounded ([1879ba3](https://github.com/tomru/axiom-react/commit/1879ba3))
* **Slider/Range:** clean DOM ([159ed2b](https://github.com/tomru/axiom-react/commit/159ed2b))
* **Slider/Range:** support min option different from 0 ([c52cb82](https://github.com/tomru/axiom-react/commit/c52cb82))
* update snapshots ([5a791c3](https://github.com/tomru/axiom-react/commit/5a791c3))


### Features

* **Icons:** Adding Input icon ([c7f937f](https://github.com/tomru/axiom-react/commit/c7f937f))
* **ToolTip:** allow light and dark colours to be manually selected ([e74f7c1](https://github.com/tomru/axiom-react/commit/e74f7c1))





# [5.19.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@5.18.4...@brandwatch/axiom-components@5.19.0) (2019-04-15)


### Bug Fixes

* throw error when focusedHandleIndex is unknown ([541fd6d](https://github.com/tomru/axiom-react/commit/541fd6d))


### Features

* **Checkbox/Radio:** change style of selected and active ([9c89250](https://github.com/tomru/axiom-react/commit/9c89250))
* **Range:** add balance marker option ([03a226f](https://github.com/tomru/axiom-react/commit/03a226f))
* **Range:** add new slider Range ([e46f0a6](https://github.com/tomru/axiom-react/commit/e46f0a6))
* **Range:** No crossover ([a32f0c3](https://github.com/tomru/axiom-react/commit/a32f0c3))





## [5.18.4](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@5.18.3...@brandwatch/axiom-components@5.18.4) (2019-03-29)

**Note:** Version bump only for package @brandwatch/axiom-components





## [5.18.3](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@5.18.2...@brandwatch/axiom-components@5.18.3) (2019-03-22)

**Note:** Version bump only for package @brandwatch/axiom-components





## [5.18.2](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@5.18.1...@brandwatch/axiom-components@5.18.2) (2019-03-22)

**Note:** Version bump only for package @brandwatch/axiom-components





## [5.18.1](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@5.18.0...@brandwatch/axiom-components@5.18.1) (2019-03-22)

**Note:** Version bump only for package @brandwatch/axiom-components





# [5.18.0](https://github.com/BrandwatchLtd/axiom-react/compare/@brandwatch/axiom-components@5.17.0...@brandwatch/axiom-components@5.18.0) (2019-03-22)


### Bug Fixes

* amends style of duration picker and passes rest props to child elements ([ff50724](https://github.com/BrandwatchLtd/axiom-react/commit/ff50724))


### Features

* **Icons:** Adding Growth icon ([76af837](https://github.com/BrandwatchLtd/axiom-react/commit/76af837))





# [5.17.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.16.0...@brandwatch/axiom-components@5.17.0) (2019-03-20)


### Bug Fixes

* adds assetsUrl prop to Flag component to resolve locally and netlify preview ([91d5791](https://github.com/tomru/axiom/commit/91d5791))


### Features

* **ContextMenuItem:** Added "paddingVertical" property ([dd6de13](https://github.com/tomru/axiom/commit/dd6de13))
* **Icon:** add iris icon ([069e64a](https://github.com/tomru/axiom/commit/069e64a))
* **Icon:** add support for custom width/height ([8eb684f](https://github.com/tomru/axiom/commit/8eb684f))





# [5.16.0](https://github.com/Binarytales/axiom-react/compare/@brandwatch/axiom-components@5.15.1...@brandwatch/axiom-components@5.16.0) (2019-03-19)


### Bug Fixes

* DurationPicker spreads current state when setting new state ([bf6ec85](https://github.com/Binarytales/axiom-react/commit/bf6ec85))
* updates DurationPicker snapshot ([fc1cd69](https://github.com/Binarytales/axiom-react/commit/fc1cd69))


### Features

* Adds DurationPicker component ([1caf9df](https://github.com/Binarytales/axiom-react/commit/1caf9df))
* adds onBlur handler to DurationPicker ([e4e9be6](https://github.com/Binarytales/axiom-react/commit/e4e9be6))





## [5.15.1](https://github.com/Binarytales/axiom-react/compare/@brandwatch/axiom-components@5.15.0...@brandwatch/axiom-components@5.15.1) (2019-03-06)

**Note:** Version bump only for package @brandwatch/axiom-components





# [5.15.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.13.0...@brandwatch/axiom-components@5.15.0) (2019-02-20)


### Bug Fixes

* **ContextMenuItem:** hide all overflow, not only overflow-x ([326c13e](https://github.com/tomru/axiom/commit/326c13e))
* **ContextMenuItem:** revert "mouse events do not fire in firefox" ([503970b](https://github.com/tomru/axiom/commit/503970b))


### Features

* Experimental animation components ([1e53f63](https://github.com/tomru/axiom/commit/1e53f63))
* **TextInputIcon:** Allow setting iconColor for TextInputIcon ([38fbd46](https://github.com/tomru/axiom/commit/38fbd46))





# [5.14.0](https://github.com/tomru/axiom-react/compare/@brandwatch/axiom-components@5.13.0...@brandwatch/axiom-components@5.14.0) (2019-02-11)


### Bug Fixes

* **ContextMenuItem:** hide all overflow, not only overflow-x ([326c13e](https://github.com/tomru/axiom-react/commit/326c13e))
* **ContextMenuItem:** revert "mouse events do not fire in firefox" ([503970b](https://github.com/tomru/axiom-react/commit/503970b))


### Features

* Experimental animation components ([1e53f63](https://github.com/tomru/axiom-react/commit/1e53f63))





# [5.13.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.12.0...@brandwatch/axiom-components@5.13.0) (2019-01-29)


### Bug Fixes

* **Tip:** add missing ampersand ([c31f088](https://github.com/tomru/axiom/commit/c31f088))


### Features

* **Icons:** Adding Log Icon ([ceb2646](https://github.com/tomru/axiom/commit/ceb2646))





# [5.12.0](https://github.com/Binarytales/axiom/compare/@brandwatch/axiom-components@5.11.1...@brandwatch/axiom-components@5.12.0) (2019-01-24)


### Bug Fixes

* **TableHeaderLabel:** Fixed empty header alignment ([e1011a5](https://github.com/Binarytales/axiom/commit/e1011a5))


### Features

* **TableHeaderLabel:** Allow variable column width ([7bd805b](https://github.com/Binarytales/axiom/commit/7bd805b))





## [5.11.1](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.11.0...@brandwatch/axiom-components@5.11.1) (2019-01-22)


### Bug Fixes

* **ContextMenuItem:** mouse events do not fire in firefox ([7590b94](https://github.com/tomru/axiom/commit/7590b94))





# [5.11.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.10.1...@brandwatch/axiom-components@5.11.0) (2019-01-17)


### Bug Fixes

* **ContextMenuItem:** hide x overflow ([9bbc58b](https://github.com/tomru/axiom/commit/9bbc58b))


### Features

* **EllipsisTooltip:** added EllipsisTooltip that shows a tooltip when the content is clipped ([c684c04](https://github.com/tomru/axiom/commit/c684c04))





## [5.10.1](https://github.com/lpoulter/axiom/compare/@brandwatch/axiom-components@5.10.0...@brandwatch/axiom-components@5.10.1) (2018-12-18)


### Bug Fixes

* **Validate:** Make validation on form element dynamic ([dce6382](https://github.com/lpoulter/axiom/commit/dce6382))
* **Validate:** Test lifecycle method calls registerValidator ([e901fbc](https://github.com/lpoulter/axiom/commit/e901fbc))





# [5.10.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.9.2...@brandwatch/axiom-components@5.10.0) (2018-12-18)


### Features

* **DropdownMenu:** allow paddingVertical to be configurable ([0b54727](https://github.com/tomru/axiom/commit/0b54727))





## [5.9.2](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.9.1...@brandwatch/axiom-components@5.9.2) (2018-12-13)


### Bug Fixes

* **ContextMenu:** set ax-context-menu to full height ([d95bb8e](https://github.com/tomru/axiom/commit/d95bb8e))





## [5.9.1](https://github.com/lpoulter/axiom/compare/@brandwatch/axiom-components@5.9.0...@brandwatch/axiom-components@5.9.1) (2018-12-04)

**Note:** Version bump only for package @brandwatch/axiom-components





# [5.9.0](https://github.com/Binarytales/axiom/compare/@brandwatch/axiom-components@5.8.0...@brandwatch/axiom-components@5.9.0) (2018-12-03)


### Features

* **Transition:** Adding overflow hidden in y-direction ([2ffe3f0](https://github.com/Binarytales/axiom/commit/2ffe3f0))





# [5.8.0](https://github.com/larister/axiom/compare/@brandwatch/axiom-components@5.6.0...@brandwatch/axiom-components@5.8.0) (2018-12-03)


### Bug Fixes

* **lint:** Fixed a couple of linting issues ([165b706](https://github.com/larister/axiom/commit/165b706))


### Features

* **IconButton:** Add iconColor and buttonStyle props to IconButton ([136d3cc](https://github.com/larister/axiom/commit/136d3cc))





# [5.7.0](https://github.com/larister/axiom/compare/@brandwatch/axiom-components@5.6.0...@brandwatch/axiom-components@5.7.0) (2018-12-03)


### Bug Fixes

* **lint:** Fixed a couple of linting issues ([165b706](https://github.com/larister/axiom/commit/165b706))


### Features

* **IconButton:** Add iconColor and buttonStyle props to IconButton ([136d3cc](https://github.com/larister/axiom/commit/136d3cc))





# [5.6.0](https://github.com/lpoulter/axiom/compare/@brandwatch/axiom-components@5.5.0...@brandwatch/axiom-components@5.6.0) (2018-11-16)


### Features

* **Base:** Added color ui-accent as textColor ([4ae7091](https://github.com/lpoulter/axiom/commit/4ae7091))





# [5.5.0](https://github.com/Binarytales/axiom/compare/@brandwatch/axiom-components@5.4.0...@brandwatch/axiom-components@5.5.0) (2018-11-12)


### Features

* **UsageHint:** Consume width on dropdown context. ([219b7f3](https://github.com/Binarytales/axiom/commit/219b7f3))





# [5.4.0](https://github.com/Binarytales/axiom/compare/@brandwatch/axiom-components@5.3.0...@brandwatch/axiom-components@5.4.0) (2018-11-08)


### Bug Fixes

* **TextInput:** Fix text input size in IE11 ([1c68146](https://github.com/Binarytales/axiom/commit/1c68146))


### Features

* **Ghost:** Adds ghost card ([5a20294](https://github.com/Binarytales/axiom/commit/5a20294))





      <a name="5.3.0"></a>
# [5.3.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.2.0...@brandwatch/axiom-components@5.3.0) (2018-10-25)


### Bug Fixes

* **Platform:** Only call onConsoleClose if it is provided ([0363caf](https://github.com/tomru/axiom/commit/0363caf))


### Features

* **Base:** Enable "sentiment-positive/negative/neutral" as textColor ([f2d5722](https://github.com/tomru/axiom/commit/f2d5722))




      <a name="5.2.0"></a>
# [5.2.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.1.0...@brandwatch/axiom-components@5.2.0) (2018-10-25)


### Features

* **Icons:** Add switch icon ([3ee0355](https://github.com/tomru/axiom/commit/3ee0355))




    <a name="5.1.0"></a>
# [5.1.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@5.0.0...@brandwatch/axiom-components@5.1.0) (2018-10-24)


### Features

* **TextInput:** Add "number" option to type prop. ([d25939f](https://github.com/tomru/axiom/commit/d25939f))




<a name="5.0.0"></a>
# [5.0.0](https://github.com/Binarytales/axiom/compare/@brandwatch/axiom-components@4.18.0...@brandwatch/axiom-components@5.0.0) (2018-10-19)


### Features

* **ContextMenuItem:** ensure onClick event doesn't trigger three times ([da05146](https://github.com/Binarytales/axiom/commit/da05146))
* **Icons:** Adding new icons ([4b71243](https://github.com/Binarytales/axiom/commit/4b71243))


### BREAKING CHANGES

* **ContextMenuItem:** ContextMenuItem's onClick event now stops Propagation.
You will need to ensure that any onClick's passed through to a DropdownMenuItem or ContextMenuItem still function as expected. If you accounted for the onClick event triggering three times, you may need to change that




<a name="4.18.0"></a>
# [4.18.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@4.17.0...@brandwatch/axiom-components@4.18.0) (2018-10-16)


### Features

* **Icon:** adding new icons ([c5af32f](https://github.com/tomru/axiom/commit/c5af32f))




<a name="4.17.0"></a>
# [4.17.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@4.16.0...@brandwatch/axiom-components@4.17.0) (2018-10-08)


### Features

* **Position:** Add className prop ([97019c9](https://github.com/tomru/axiom/commit/97019c9))




<a name="4.16.0"></a>
# [4.16.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@4.15.2...@brandwatch/axiom-components@4.16.0) (2018-10-02)


### Features

* **Position:** Add targetElement property that acts as a general target element ([803ded0](https://github.com/tomru/axiom/commit/803ded0))




<a name="4.15.2"></a>
## [4.15.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.15.1...@brandwatch/axiom-components@4.15.2) (2018-09-24)


### Bug Fixes

* **Table:** Vertical cell padding and medium value missing ([9513492](https://github.com/HHogg/axiom/commit/9513492))
* **TextInput:** Add ability to focus TextInput in axiom. ([8f93d3b](https://github.com/HHogg/axiom/commit/8f93d3b))




<a name="4.15.1"></a>
## [4.15.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.15.0...@brandwatch/axiom-components@4.15.1) (2018-09-18)




**Note:** Version bump only for package @brandwatch/axiom-components

<a name="4.15.0"></a>
# [4.15.0](https://github.com/lpoulter/axiom/compare/@brandwatch/axiom-components@4.11.0...@brandwatch/axiom-components@4.15.0) (2018-09-14)


### Bug Fixes

* **Badge:** Remove incorrect flex end alignment to allow text alignment ([c112cb7](https://github.com/lpoulter/axiom/commit/c112cb7))
* **card:** remove unused color prop ([3d3c9d7](https://github.com/lpoulter/axiom/commit/3d3c9d7))
* **DatePicker:** align buttons to the right ([82ebfae](https://github.com/lpoulter/axiom/commit/82ebfae))
* **Dialog:** Fixes an issue where multiple dialogs conflict. ([d4043a9](https://github.com/lpoulter/axiom/commit/d4043a9))
* **Dropdown:** Implement native style hover and focus ([950536e](https://github.com/lpoulter/axiom/commit/950536e))
* **Slider:** Fix onSlideEnd being unrecognised ([ae7537e](https://github.com/lpoulter/axiom/commit/ae7537e))
* **TextInput:** Fix input growing to available space ([380ca98](https://github.com/lpoulter/axiom/commit/380ca98))
* **TextInput:** move spacing from input wrapper to input container ([44c190c](https://github.com/lpoulter/axiom/commit/44c190c))


### Features

* **card:** add shade prop to card content ([61e9480](https://github.com/lpoulter/axiom/commit/61e9480))
* **DatePicker:** add quick selection ([73d7c1f](https://github.com/lpoulter/axiom/commit/73d7c1f))
* **Grid:** Add support for className property ([84ff757](https://github.com/lpoulter/axiom/commit/84ff757))
* **Grid:** Added direction property to control direction of grid ([9bfb1db](https://github.com/lpoulter/axiom/commit/9bfb1db))
* **GridCell:** Add support for className property ([9f938bc](https://github.com/lpoulter/axiom/commit/9f938bc))
* **Icon:** adds new lock icon ([8c021a1](https://github.com/lpoulter/axiom/commit/8c021a1))
* **Reveal:** Added option to remove the contents of Reveal when it is collapsed ([8084b94](https://github.com/lpoulter/axiom/commit/8084b94))
* **Toggle:** Adds layout prop to Toggle component ([91e80b7](https://github.com/lpoulter/axiom/commit/91e80b7))




<a name="4.14.4"></a>
## [4.14.4](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.14.3...@brandwatch/axiom-components@4.14.4) (2018-09-13)


### Bug Fixes

* **TextInput:** move spacing from input wrapper to input container ([44c190c](https://github.com/HHogg/axiom/commit/44c190c))




<a name="4.14.3"></a>
## [4.14.3](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.14.2...@brandwatch/axiom-components@4.14.3) (2018-09-11)


### Bug Fixes

* **Dialog:** Fixes an issue where multiple dialogs conflict. ([d4043a9](https://github.com/HHogg/axiom/commit/d4043a9))




<a name="4.14.2"></a>
## [4.14.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.14.1...@brandwatch/axiom-components@4.14.2) (2018-09-10)


### Bug Fixes

* **Dropdown:** Implement native style hover and focus ([950536e](https://github.com/HHogg/axiom/commit/950536e))




<a name="4.14.1"></a>
## [4.14.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.14.0...@brandwatch/axiom-components@4.14.1) (2018-09-06)


### Bug Fixes

* **Slider:** Fix onSlideEnd being unrecognised ([ae7537e](https://github.com/HHogg/axiom/commit/ae7537e))
* **TextInput:** Fix input growing to available space ([380ca98](https://github.com/HHogg/axiom/commit/380ca98))




<a name="4.14.0"></a>
# [4.14.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.13.0...@brandwatch/axiom-components@4.14.0) (2018-09-04)


### Bug Fixes

* **DatePicker:** align buttons to the right ([82ebfae](https://github.com/HHogg/axiom/commit/82ebfae))


### Features

* **DatePicker:** add quick selection ([73d7c1f](https://github.com/HHogg/axiom/commit/73d7c1f))
* **Toggle:** Adds layout prop to Toggle component ([91e80b7](https://github.com/HHogg/axiom/commit/91e80b7))




<a name="4.13.0"></a>
# [4.13.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.12.1...@brandwatch/axiom-components@4.13.0) (2018-08-30)


### Features

* **Reveal:** Added option to remove the contents of Reveal when it is collapsed ([8084b94](https://github.com/HHogg/axiom/commit/8084b94))




<a name="4.12.1"></a>
## [4.12.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.12.0...@brandwatch/axiom-components@4.12.1) (2018-08-29)


### Bug Fixes

* **Badge:** Remove incorrect flex end alignment to allow text alignment ([c112cb7](https://github.com/HHogg/axiom/commit/c112cb7))




<a name="4.12.0"></a>
# [4.12.0](https://github.com/tomru/axiom/compare/@brandwatch/axiom-components@4.11.0...@brandwatch/axiom-components@4.12.0) (2018-08-28)


### Bug Fixes

* **card:** remove unused color prop ([3d3c9d7](https://github.com/tomru/axiom/commit/3d3c9d7))


### Features

* **card:** add shade prop to card content ([61e9480](https://github.com/tomru/axiom/commit/61e9480))
* **Icon:** adds new lock icon ([8c021a1](https://github.com/tomru/axiom/commit/8c021a1))




<a name="4.11.0"></a>
# [4.11.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.10.0...@brandwatch/axiom-components@4.11.0) (2018-08-21)


### Features

* **TextArea:** add Progress indicator ([8383091](https://github.com/HHogg/axiom/commit/8383091))
* **TextInput:** add progress indicator ([bc3072c](https://github.com/HHogg/axiom/commit/bc3072c))




<a name="4.10.0"></a>
# [4.10.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.9.0...@brandwatch/axiom-components@4.10.0) (2018-08-16)


### Bug Fixes

* **ToolTip:** tooltip arrows made smaller ([815f896](https://github.com/HHogg/axiom/commit/815f896))


### Features

* **Icons:** Moved Icons and SVGs to Materials package ([131b066](https://github.com/HHogg/axiom/commit/131b066))
* **Tip:** can now choose small or medium for tip size ([220f880](https://github.com/HHogg/axiom/commit/220f880))
* **TooltipContent:** Add option to specify padding and text size ([89a2f14](https://github.com/HHogg/axiom/commit/89a2f14))




<a name="4.9.0"></a>
# [4.9.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.8.1...@brandwatch/axiom-components@4.9.0) (2018-08-09)


### Bug Fixes

* **Card:** Fixes issue with image grids in Safari ([cda36ea](https://github.com/HHogg/axiom/commit/cda36ea))
* **Context:** Readds back in the divider. Regression from [#622](https://github.com/HHogg/axiom/issues/622) ([f8ad6f1](https://github.com/HHogg/axiom/commit/f8ad6f1))
* **InputWrapper:** Using 'node' prop-type for label prop in InputWrapper. ([e1fba91](https://github.com/HHogg/axiom/commit/e1fba91))
* **Slider:** fix issue where slider called handleMouseUp exponentially. ([c8ccc49](https://github.com/HHogg/axiom/commit/c8ccc49))


### Features

* **Dialog:** Configurable 'padding' prop ([315afe8](https://github.com/HHogg/axiom/commit/315afe8))
* **Icons:** Add new icons ([75790b4](https://github.com/HHogg/axiom/commit/75790b4))
* **Slider:** add onSlideEnd implementers can work with handleMouseUp ([57def41](https://github.com/HHogg/axiom/commit/57def41))




<a name="4.8.1"></a>
## [4.8.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@4.8.0...@brandwatch/axiom-components@4.8.1) (2018-08-02)


### Bug Fixes

* **ColorPicker:** cascades size property to main ColorPickerOption ([9794964](https://github.com/HHogg/axiom/commit/9794964))
* **Reveal:** Add check for inner if component is removed before callback is fired. ([20c45f0](https://github.com/HHogg/axiom/commit/20c45f0))
* **Tip:** Properly position tip when position is top ([22dc7e3](https://github.com/HHogg/axiom/commit/22dc7e3))
* **Tip:** Removes default color from Tip ([4c01391](https://github.com/HHogg/axiom/commit/4c01391))




<a name="4.8.0"></a>
# [4.8.0](https://github.com/pmsorhaindo/axiom/compare/@brandwatch/axiom-components@4.7.0...@brandwatch/axiom-components@4.8.0) (2018-07-23)


### Features

* **ArrowHead:** Add Tip component to axiom. ([7b94ad8](https://github.com/pmsorhaindo/axiom/commit/7b94ad8))




<a name="4.7.0"></a>
# [4.7.0](https://github.com/pmsorhaindo/axiom/compare/@brandwatch/axiom-components@4.5.0...@brandwatch/axiom-components@4.7.0) (2018-07-19)


### Features

* **Icon:** adds new instagram icon ([385392b](https://github.com/pmsorhaindo/axiom/commit/385392b))




<a name="4.6.0"></a>
# [4.6.0](https://github.com/pmsorhaindo/axiom/compare/@brandwatch/axiom-components@4.5.0...@brandwatch/axiom-components@4.6.0) (2018-07-19)


### Features

* **Icon:** adds new instagram icon ([385392b](https://github.com/pmsorhaindo/axiom/commit/385392b))




<a name="4.5.0"></a>
# [4.5.0](https://github.com/pmsorhaindo/axiom/compare/@brandwatch/axiom-components@4.3.0...@brandwatch/axiom-components@4.5.0) (2018-07-18)


### Bug Fixes

* **Notification:** adds atId for close button on Notification popup ([e860d68](https://github.com/pmsorhaindo/axiom/commit/e860d68))


### Features

* **TabSet:** Add variable spacing ([a30d189](https://github.com/pmsorhaindo/axiom/commit/a30d189))




<a name="4.4.0"></a>
# [4.4.0](https://github.com/pmsorhaindo/axiom/compare/@brandwatch/axiom-components@4.3.0...@brandwatch/axiom-components@4.4.0) (2018-07-18)


### Bug Fixes

* **Notification:** adds atId for close button on Notification popup ([e860d68](https://github.com/pmsorhaindo/axiom/commit/e860d68))


### Features

* **TabSet:** Add variable spacing ([a30d189](https://github.com/pmsorhaindo/axiom/commit/a30d189))




<a name="4.3.0"></a>
# [4.3.0](https://github.com/BrandwatchLtd/axiom/compare/@brandwatch/axiom-components@4.2.1...@brandwatch/axiom-components@4.3.0) (2018-07-11)


### Features

* **Slider:** Added slider component ([7874a1c](https://github.com/BrandwatchLtd/axiom/commit/7874a1c))




<a name="4.2.1"></a>
## [4.2.1](https://github.com/BrandwatchLtd/axiom/compare/@brandwatch/axiom-components@4.2.0...@brandwatch/axiom-components@4.2.1) (2018-07-11)


### Bug Fixes

* **DropdownTarget:** Ensures callback property is always fired ([fc2a8f2](https://github.com/BrandwatchLtd/axiom/commit/fc2a8f2))




<a name="4.2.0"></a>
# [4.2.0](https://github.com/BrandwatchLtd/axiom/compare/@brandwatch/axiom-components@4.1.0...@brandwatch/axiom-components@4.2.0) (2018-07-06)


### Bug Fixes

* **ChartContent:** Add mask to chart dropdowns ([55db233](https://github.com/BrandwatchLtd/axiom/commit/55db233))
* **Position:** Add onMaskClick prop back to Position ([0ad5881](https://github.com/BrandwatchLtd/axiom/commit/0ad5881))


### Features

* **AlertDropdown:** Added withMask property ([f9e05c7](https://github.com/BrandwatchLtd/axiom/commit/f9e05c7))
* **Dropdown:** Added withMask property ([bcab6ed](https://github.com/BrandwatchLtd/axiom/commit/bcab6ed))




<a name="4.1.0"></a>
# [4.1.0](https://github.com/BrandwatchLtd/axiom/compare/@brandwatch/axiom-components@4.0.0...@brandwatch/axiom-components@4.1.0) (2018-07-05)


### Features

* **TextArea:** add ability to specify usage hints ([e26d8a8](https://github.com/BrandwatchLtd/axiom/commit/e26d8a8))
* **TextInput:** add ability to specify usage hints ([f26c95f](https://github.com/BrandwatchLtd/axiom/commit/f26c95f))
* **UsageHint:** added a usage hint component ([4ff974c](https://github.com/BrandwatchLtd/axiom/commit/4ff974c))




<a name="4.0.0"></a>
# [4.0.0](https://github.com/BrandwatchLtd/axiom/compare/@brandwatch/axiom-components@3.1.1...@brandwatch/axiom-components@4.0.0) (2018-07-05)


### Features

* **Dropdown:** Set show arrow to true in Dropdown and Position component ([27b06b7](https://github.com/BrandwatchLtd/axiom/commit/27b06b7))


### BREAKING CHANGES

* **Dropdown:** arrows will now be hidden be default




<a name="3.1.1"></a>
## [3.1.1](https://github.com/BrandwatchLtd/axiom/compare/@brandwatch/axiom-components@3.1.0...@brandwatch/axiom-components@3.1.1) (2018-07-05)




**Note:** Version bump only for package @brandwatch/axiom-components

<a name="3.1.0"></a>
# [3.1.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@3.0.0...@brandwatch/axiom-components@3.1.0) (2018-07-03)


### Features

* **Modal:** Close Modal by pressing Esc ([7162446](https://github.com/HHogg/axiom/commit/7162446))




<a name="3.0.0"></a>
# [3.0.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.12.0...@brandwatch/axiom-components@3.0.0) (2018-07-03)


### Features

* **Dialog:** Added width as a prop to Dialog ([dbc60a8](https://github.com/HHogg/axiom/commit/dbc60a8))


### BREAKING CHANGES

* **Dialog:** Dialog components size property has been removed. See docs for use with new width property. To retain the same widths as before set the widths like below
size="small" -> width="20rem"
size="medium" -> width="37.5rem"
size="large" -> width="50rem"




<a name="2.12.0"></a>
# [2.12.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.11.0...@brandwatch/axiom-components@2.12.0) (2018-07-03)


### Features

* **StatusBadge:** Added new StatusBadge component ([a04bcbc](https://github.com/HHogg/axiom/commit/a04bcbc))




<a name="2.11.0"></a>
# [2.11.0](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-components@2.10.0...@brandwatch/axiom-components@2.11.0) (2018-07-02)


### Bug Fixes

* **Position:** Boundary element to be viewport ([1ff9680](https://github.com/thatguynamedandy/axiom/commit/1ff9680))


### Features

* **Icons:** Added social Icons ([4b7a7c6](https://github.com/thatguynamedandy/axiom/commit/4b7a7c6))




<a name="2.10.0"></a>
# [2.10.0](https://github.com/lpoulter/axiom/compare/@brandwatch/axiom-components@2.9.0...@brandwatch/axiom-components@2.10.0) (2018-06-29)


### Bug Fixes

* **Dropdown:** Restore pointer events ([35fbcee](https://github.com/lpoulter/axiom/commit/35fbcee))
* **Tooltip:** Delay prop warning ([9d68502](https://github.com/lpoulter/axiom/commit/9d68502))


### Features

* **Colors:** Added new product colors to components ([fb3f7ec](https://github.com/lpoulter/axiom/commit/fb3f7ec))




<a name="2.9.0"></a>
# [2.9.0](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-components@2.8.0...@brandwatch/axiom-components@2.9.0) (2018-06-22)


### Features

* **Dropdown:** Add option to change cursor on text input ([05a5828](https://github.com/thatguynamedandy/axiom/commit/05a5828))
* **Dropdown:** Remove dropdown mask ([2667cdd](https://github.com/thatguynamedandy/axiom/commit/2667cdd))
* **Tooltip:** Adds boolean delay option ([117fbf5](https://github.com/thatguynamedandy/axiom/commit/117fbf5))




<a name="2.8.0"></a>
# [2.8.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.7.3...@brandwatch/axiom-components@2.8.0) (2018-06-14)


### Bug Fixes

* **List:** Reverts changes made in [#575](https://github.com/HHogg/axiom/issues/575), [#579](https://github.com/HHogg/axiom/issues/579) and [#583](https://github.com/HHogg/axiom/issues/583). ([cebfddd](https://github.com/HHogg/axiom/commit/cebfddd))


### Features

* **Pictogram:** Added new bar-percent-chart pictogram ([ad5bf6f](https://github.com/HHogg/axiom/commit/ad5bf6f))




<a name="2.7.3"></a>
## [2.7.3](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-components@2.7.2...@brandwatch/axiom-components@2.7.3) (2018-06-12)


### Bug Fixes

* **List:** Reverts tidy up the height of the vertical rule ([d223a13](https://github.com/thatguynamedandy/axiom/commit/d223a13))
* **ListItem:** Uses alternative approach to fix list separators ([ba0ac54](https://github.com/thatguynamedandy/axiom/commit/ba0ac54))




<a name="2.7.2"></a>
## [2.7.2](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-components@2.7.1...@brandwatch/axiom-components@2.7.2) (2018-06-11)


### Bug Fixes

* **List:** Tidies up the height of the vertical rule ([262d494](https://github.com/thatguynamedandy/axiom/commit/262d494))
* **Pictogram:** Corrected prop value type in twitter-verified ([292d044](https://github.com/thatguynamedandy/axiom/commit/292d044))




<a name="2.7.1"></a>
## [2.7.1](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-components@2.7.0...@brandwatch/axiom-components@2.7.1) (2018-06-05)


### Bug Fixes

* **List:** Fixes erroneous line-height by using flex ([c1037f6](https://github.com/thatguynamedandy/axiom/commit/c1037f6))




<a name="2.7.0"></a>
# [2.7.0](https://github.com/thatguynamedandy/axiom/compare/@brandwatch/axiom-components@2.6.2...@brandwatch/axiom-components@2.7.0) (2018-06-01)


### Features

* **Table:** Adds ability to override text color ([1bc94fc](https://github.com/thatguynamedandy/axiom/commit/1bc94fc))
* **TableCell:** Adds additional large verticalPadding option ([6fc36da](https://github.com/thatguynamedandy/axiom/commit/6fc36da))
* **Typography:** Adds standard body color for overrides ([0e15c13](https://github.com/thatguynamedandy/axiom/commit/0e15c13))




<a name="2.6.2"></a>
## [2.6.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.6.1...@brandwatch/axiom-components@2.6.2) (2018-05-25)


### Bug Fixes

* **TableCell:** removes typo causing proptype warnings ([9aa808e](https://github.com/HHogg/axiom/commit/9aa808e))




<a name="2.6.1"></a>
## [2.6.1](https://github.com/pmsorhaindo/axiom/compare/@brandwatch/axiom-components@2.6.0...@brandwatch/axiom-components@2.6.1) (2018-05-24)


### Bug Fixes

* **TableCell:** makes TableCell paddings adjustable correctly ([16c824a](https://github.com/pmsorhaindo/axiom/commit/16c824a))




<a name="2.6.0"></a>
# [2.6.0](https://github.com/pmsorhaindo/axiom/compare/@brandwatch/axiom-components@2.5.2...@brandwatch/axiom-components@2.6.0) (2018-05-24)


### Bug Fixes

* **Textarea:** Focus border color ([1fee1a2](https://github.com/pmsorhaindo/axiom/commit/1fee1a2))


### Features

* **TableCell:** adds adjustable padding to Table Cell ([5d97246](https://github.com/pmsorhaindo/axiom/commit/5d97246))
* **TableRow:** adds clickable styling to Table Row ([c6b8f60](https://github.com/pmsorhaindo/axiom/commit/c6b8f60))




<a name="2.5.2"></a>
## [2.5.2](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.5.1...@brandwatch/axiom-components@2.5.2) (2018-05-17)


### Bug Fixes

* **TextInput:** Ensuring native input events are passed through correctly. ([25e370d](https://github.com/HHogg/axiom/commit/25e370d))




<a name="2.5.1"></a>
## [2.5.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.5.0...@brandwatch/axiom-components@2.5.1) (2018-05-15)


### Bug Fixes

* **Button:** Active state being applied when clicking on svg element ([0f45b94](https://github.com/HHogg/axiom/commit/0f45b94))
* **Tab:** Only add as a title if the title is a string ([b1d24be](https://github.com/HHogg/axiom/commit/b1d24be))




<a name="2.5.0"></a>
# [2.5.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.4.1...@brandwatch/axiom-components@2.5.0) (2018-05-10)


### Features

* **Card:** Adds small and medium border radius options ([69b737e](https://github.com/HHogg/axiom/commit/69b737e))




<a name="2.4.1"></a>
## [2.4.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.4.0...@brandwatch/axiom-components@2.4.1) (2018-05-03)


### Bug Fixes

* **Checkbox:** ensure Checkbox is always a controlled component ([0cb4b95](https://github.com/HHogg/axiom/commit/0cb4b95))
* **Dropdown:** Omit onRequestCloseDropdown from reaching DropdownContext ([2f047fa](https://github.com/HHogg/axiom/commit/2f047fa))




<a name="2.4.0"></a>
# [2.4.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.3.0...@brandwatch/axiom-components@2.4.0) (2018-05-02)


### Bug Fixes

* **Dropdown:** do not render separator after sub menus ([0aac496](https://github.com/HHogg/axiom/commit/0aac496)), closes [#539](https://github.com/HHogg/axiom/issues/539)


### Features

* **Image:** Add 'ratios' prop to allow image grid height to be configurable. ([58d2be8](https://github.com/HHogg/axiom/commit/58d2be8))
* **TableRow:** adds hasBorder property to table row to render TableRows ([ed2155e](https://github.com/HHogg/axiom/commit/ed2155e))




<a name="2.3.0"></a>
# [2.3.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.2.0...@brandwatch/axiom-components@2.3.0) (2018-04-30)


### Bug Fixes

* **ContextMenuItem:** Pass down indeterminate property to checkbox ([f936420](https://github.com/HHogg/axiom/commit/f936420))


### Features

* **Card:** Added CardImages component to support multiple images ([dcaca3c](https://github.com/HHogg/axiom/commit/dcaca3c))
* **CheckBox:** Added indeterminate property ([bae92cd](https://github.com/HHogg/axiom/commit/bae92cd))
* **InlineValidation:** Added InlineValidation component ([a3ee488](https://github.com/HHogg/axiom/commit/a3ee488))




<a name="2.2.0"></a>
# [2.2.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.1.0...@brandwatch/axiom-components@2.2.0) (2018-04-24)


### Bug Fixes

* **Context:** Scroll when using the menu or content components as scroll containers ([6f84cf5](https://github.com/HHogg/axiom/commit/6f84cf5))


### Features

* **Dropdown:** add support for single level submenus ([5b468ae](https://github.com/HHogg/axiom/commit/5b468ae))
* **DropdownSource:** Pass closeDropdown as prop to DropdownSource component ([f5982de](https://github.com/HHogg/axiom/commit/f5982de))
* **Icon:** Added new 'at', 'exlcude' and 'line-graph' icons and updated 'home' icon ([5330b3c](https://github.com/HHogg/axiom/commit/5330b3c))




<a name="2.1.0"></a>
# [2.1.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@2.0.0...@brandwatch/axiom-components@2.1.0) (2018-04-20)


### Bug Fixes

* **Context:** Separator placement on scrollable areas ([3aa7121](https://github.com/HHogg/axiom/commit/3aa7121))


### Features

* **ContextContent:** Added extra padding props to control horizontal and vertical padding ([b60c023](https://github.com/HHogg/axiom/commit/b60c023))
* **ContextMenuItem:** Add icon prop to specify menu item icon ([1a0b13f](https://github.com/HHogg/axiom/commit/1a0b13f))
* **Dropdown:** Added DropdownHeader and DropdownFooter components ([de3ae7a](https://github.com/HHogg/axiom/commit/de3ae7a))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.5.0...@brandwatch/axiom-components@2.0.0) (2018-04-18)


### Bug Fixes

* **Transition:** Slide into correct direction on initial change ([2ea8b93](https://github.com/HHogg/axiom/commit/2ea8b93))


### Features

* **Components:** Added Separator component and removed HorizontalRule. See breaking changes. ([a67c25e](https://github.com/HHogg/axiom/commit/a67c25e))


### BREAKING CHANGES

* **Components:** The HorizontalRule component got replaced by the Separator component which is
identical to the HorizontalRule component with the addition of a direction property which can
either be horizontal (default) or vertical




<a name="1.5.0"></a>
# [1.5.0](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.4.1...@brandwatch/axiom-components@1.5.0) (2018-04-16)


### Bug Fixes

* **Select:** Pass onRequest callbacks to Dropdown ([5fafbfd](https://github.com/HHogg/axiom/commit/5fafbfd))


### Features

* **AlertDropdown:** Adds a new AlertDropdown component ([c0fbe08](https://github.com/HHogg/axiom/commit/c0fbe08))
* **Context:** Adds support for "color" property ([66f6bc1](https://github.com/HHogg/axiom/commit/66f6bc1))
* **LineChart:** Added onPointClick action to the LineChart ([c80c1d1](https://github.com/HHogg/axiom/commit/c80c1d1))
* **Transition:** Add new Transition component ([e5c21dc](https://github.com/HHogg/axiom/commit/e5c21dc))




<a name="1.4.1"></a>
## [1.4.1](https://github.com/HHogg/axiom/compare/@brandwatch/axiom-components@1.4.0...@brandwatch/axiom-components@1.4.1) (2018-04-10)


### Bug Fixes

* **Badge:** pass through onClick property ([0122b5d](https://github.com/HHogg/axiom/commit/0122b5d))
* **Candytar:** Only the user defined product colour set are supported colours ([5883a82](https://github.com/HHogg/axiom/commit/5883a82))
* **Dropdown:** Allow whole menu item to be selectable for multiselect options ([469585d](https://github.com/HHogg/axiom/commit/469585d))
* **Dropdown:** Switch from index and children approach to DOM focusing. ([f51feda](https://github.com/HHogg/axiom/commit/f51feda))




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
