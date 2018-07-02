# Contributing guide

## Code

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

## Deployments

### Branch deployments of the styleguide with Netlify

Complete the steps described in this section, and in about five minutes you'll have a deploy of your Axiom changes hosted on Netlify.

1. First we have to create a [free Netlify account](https://app.netlify.com/signup). Just signup through GitHub to keep it simple.
1. On the top of that page, select `New site from Git` to import Axiom.
1. Tick `Limit GitHub access to public repositories` at the very bottom of this page.
1. Select `GitHub` as the Git provider. This will open an OAuth dialog and ask for a few permissons on your public projects. There is a full page about [how Netlify interacts with your GitHub account](https://www.netlify.com/docs/github-permissions/).
1. Click the `Authorize Netifly` button
1. In the Search field, enter `Axiom` and select your fork from the result list.
1. All the required fields are automatically populate with the configuration we need to build Axiom. Click the `Deploy site` button to kick of the build. This will build and publish your master branch and a uniqe Netlify URL. This will take a while.

1. Meanwhile, on the `Overview` page, click the `Site settings` button.
1. Select `Build and Deploy` from the left side menu.
1. In the `Deploy settings` section, click the `Edit settings` button.
1. Netlify deploys just the master branch by default. Select `All` in the `Branch deploys` section and click `save`.
1. Pushing a new branch or changes on an existing branch, will cause Netilfy to automatically deploy this branch. This is a good time to push your PullRequest branch.
1. On the main menu on top of that page, click `Deploys` which will open an overview of all deploys.
1. Select your running `Branch Deploy` from that list. This will show you a log were you can follow the progress
1. Once a `Branch Deploy` is complete, you can either publish the changes which will basicly overwrite your initial master deploy or what ever branch was deployed before or just share the `Preview deploy` link.
1. When pushing changes to your branch, you have to repeat the last three steps every time, because Netilfy does not do auto publish those branches.

### Production deployments of the styleguide

A new version of styleguide at https://axiom.brandwatch.com is built and deployed for every merge to `master`.

### Publishing to npm

New versions of component libraries are published to npm for every merge to `master`.


