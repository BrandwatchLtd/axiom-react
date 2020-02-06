### Typescript information

Typing for components is provided by a single [file](./packages/axiom-components/src/index.d.ts) within the [axiom-components](./packages/axiom-components) package that contains information for the whole module.

For various [resons](https://github.com/BrandwatchLtd/axiom-react/pull/786) there is currently no easy solution to generate those automatically from the existing codebase.

The initial version of the file was automatically created and mostly resulted of everything having the "any" type. The intent is to manually improve this as typescript projects use certain components and hopefully by contributors that change or add PropTypes. 
