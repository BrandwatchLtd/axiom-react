The `index.json` file in this dir contains ids which are helpers for ATs. This file should be required as needed in application code and also in ATs.

It should be used sparingly to make our ATs less brittle by providing static selectors to hook into which do not change in a refactor the same way elements or classes might.

Ids should arbitrarily be 12 char alphanumeric strings. This is just to maintain consistency across Brandwatch projects.

One way to generate an appropriate string would be

```
cat /dev/random | head -1 | shasum | cut -c 1-12
```

When set on an HTML element they should use the attribute name `data-ax-at`.
