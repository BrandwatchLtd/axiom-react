# Contributing guide

## Code

### Storybook
Axiom comes with [Storybook](https://storybook.js.org/docs/basics/writing-stories/) which provides an environment to test new components and changes in. Storybook can also be used to document components. 

To get started run `yarn storybook`.
If you want to add a new story create a file with the `.stories.js` extension.

### Commits
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### Linting & Tests

Linting (CSS & JS) and tests will be run on every PR, and must pass to be merged. You can run locally to check with...

```
yarn lint
yarn test
```

### Pull requests

A PR into `master` requires two thumbs up, with at least one of these thumbs from a current member of the Axiom Working Group. This is to allow working group members to be continually exposed to ongoing changes to the codebase and its components.

### Breaking changes

Breaking changes that are commited should have `BREAKING CHANGE:` as the first line of the body of the commit, and should detail the steps needed to resolve the breaking change.

### Publishing to npm

The CI for publishing the packages is currently not working and will need to be handled manually. To do this, `npm login` with the Brandwatch credentials and run the following:

```sh
yarn publish:packages
```
