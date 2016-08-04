# Writing Documentation 

The documentation is rendered from, but not limited to, Markdown. It is pretty much exactly the same as GFM, except for a couple of minor enhancements. 


# Importing resources

One aspect that is different is the ability to import Javascript resources. This is to access React elements and Sass variables but can be used to import anything as if it was a Javascript file. 

Importing resources is exactly the same as importing in Javascript: 

```markdown
\`\`\`imports
import Something, { anotherThing } from 'somewhere';
\`\`\`
```

*Note: The markdown files are executed in the same context of the babel and webpack configuration.*


# Interpolation 

Everything, apart from `jsx` code snippets, are template literals and are interpolated with the the route parameters (`routeParams`), query parameters (`queryParams`) and anything imported (as mentioned above). Please see [react-router documentation](https://github.com/reactjs/react-router) on available data in the parameter.

For example accessing Javascript resources within the markdown can be written like `#### I'm a heading for ${queryParams.something}`. 

*Note: Pages that require access to `queryParams` and `routeParams` **should not be searchable or accessible via the navigation menu**. Use the `hidden: true` flag on the route being exported.*


# Rendering examples and snippets (jsx snippets)

Code snippets with the language set as `jsx` will be executed and the resulting value will be rendered with a JSX and HTML snippet below. The standard rules follow of react elements, either return a single component or an array. See below for example.

There are some special properties you can give to elements to configure their example and snippet rendering results.

* **renderSkip**: Example will not be rendered and snippet will be created.
* **snippetSkip**: Example will be rendered but snippet will not be created for that element or any of the children. 
* **snippetReplace**: Example will be rendered but snippet will not be created for that element or child elements and will be replaced with placeholder content.
* **snippetIgnore**: Example will be rendered but snippet will not be created for that element but will continue to check child element.


# Example 

```markdown
\`\`\`jsx
<Component renderSkip>
  Won't be rendered
</Component>

<Component snippetSkip>
  No snippet created
</Component>

<Component>
  <Component snippetReplace>
    I'll be replace with placeholder content in the snippet>
  </Component>
</Component>

<Component snippetIgnore>
  I'll be rendered but my snippet won't be
</Component>
\`\`\`
```


# Advanced examples that require state

There are times where examples are more complicated that require interactions and states. This is achievable by simply including an element with the property snippetSkip. 


# Example

```markdown
\`\`\`jsx
<ComplicatedComponentExample snippetSkip />
\`\`\`
```
