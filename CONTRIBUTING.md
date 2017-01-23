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
