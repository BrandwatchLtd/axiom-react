# Contributing guide

#### Before PR
1. **Code Style.** `yarn lint`
1. **Tests.** `yarn test`
#### Commit subject/message convention

We use [semantic-release](https://github.com/semantic-release/semantic-release) to handle publishing. It determines the next package version number and the changelog by a strict commit convention.

**Format**
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

[See full convention details here](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md).

##### Style Guide Driven Development (SGDD)

This is an SGDD library, therefore any changes should be reflected in the style guide. It's pretty hard not to do this without blindly adding code without viewing it in the browser 🙃

##### Design Review

All Axiom work should go through design review, to make this easier it's worth deploying Pull Requests to a public location for easy sharing. The recommended approach for this is to use [Netlify](https://www.netlify.com) on your Axiom fork, carry out the following for a one time setup.
1. Login to netlify using your github credentials and approve access (there should be an advanced option to prevent access to private repos).
2. Make sure your forked master branch is up to date and choose the option to setup a 'new site from Git' (keep the default options).
3. Lastly change your netlify 'plan' for the new site to OpenSource (Pro). This will enable builds for branches and PRs.
