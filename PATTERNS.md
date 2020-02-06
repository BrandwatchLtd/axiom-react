# React Patterns

## Using virtual lists/grids for large data sets

When rendering any form of lists in React with lots of elements, performance
becomes soon an issue. Usually such a list/grid is inside a scrollable
container.

This problem is not React specific, but it'll bite you earlier in React in my
experience.

The common solution outside of the React ecosystem is to keep the list of
things in memory and just render a subset of the full list of items, i.e. the
currently visible items and not the rest of the list/grid. Whenever the scroll
position of the container changes, the items to render need to be updated. This
ensures there is just a constant number of DOM elements at any given time and
reduces the complexity to draw a list of n elements from `O(n)` to `O(1)`.

Customers with a lot of categories/tags faced this issue in the revamped charts
component. In the customize bar on this component, the categories (for example)
are wrapped in a `DropdownMenuItem`. `DropdownMenu` creates the scrollable
container.

After having a look at
[react-virtualized](https://github.com/bvaughn/react-virtualized) and
implementing the first working version with it, it was raised to me that the
author has created [react-window](https://github.com/bvaughn/react-window) as
an improved version, stripping away a lot of unrelated features and having a
much smaller build size. It was straight forward to move from the predecessor
to the new library.

In that implementation we've been using
[FixedSizeList](https://github.com/bvaughn/react-window/blob/master/src/FixedSizeList.js)
and
[VariableSizeList](https://github.com/bvaughn/react-window/blob/master/src/VariableSizeList.js).
There are corresponding classes for Grids available as well.

### Fixed Size List

`FixSizeList` is for lists where each element has a fixed size (height or width
depending on the direction or the list). The full size of the container is
defined by providing `itemSize` and `itemCount`. You can specify a _renderer_
as a function as children. The renderer function is passed `index` and `style`
parameter, where `index` is the index of the item within the complete list and
`style` absolutely positions the element in the list in the correct position.

```javascript
import React from 'react';
import { FixedSizeList } from 'react-window';

const SomeList = props => {
 const { data } = props;

 const Row = ({ index, style }) => (
   <div style={style}>{data[index].name}</div>
 );

 return (
   <FixedSizeList
     height={400}
     itemCount={data.length}
     itemSize={25}
     width={250}
   >
     {Row}
   </FixedSizeList>
 );
};
```

[sandbox](https://codesandbox.io/s/xl70pr005p)

## Variable Size List

If the size of an item is not fixed, the `VariableSizeList` must be provided
with a function to determine the item size on the fly whenever an item in the
list should be shown (e.g. `index => data[index].size * 5`).

As long as an element has not been shown, the size of the complete list needs
to be estimated. The prop `estimatedItemSize` is used to control the rough size
that is reserved for one item in the list. As the size is just estimated, the
size of the scrollable container may change over time, and with that the
scrollbar might jump a bit when that happens. This is though hardly noticeable
for long lists, but to minimize this issue try to make sure the `estimatedSize`
is as accurate as possible.

Note: `react-window` does cache the calculated size of an element.

```javascript
import React from 'react';
import { VariableSizeList } from 'react-window';

const SIZE_MULTIPLICATOR = 32;
const SomeList = props => {
 const { data } = props;

 const getItemSize = index => (data[index].size || 1) * SIZE_MULTIPLICATOR;

 const Row = ({ index, style }) => (
   <div style={style}>{data[index].name}</div>
 );

 return (
   <VariableSizeList
     height={150}
     itemCount={data.length}
     itemSize={getItemSize}
     estimatedItemSize={SIZE_MULTPLICATOR*2}
     width={300}
   >
     {Row}
   </VariableSizeList>
 );
};
```

[sandbox](https://codesandbox.io/s/z2oow6yvyx)

## AutoSizer

Both of the above approaches require you to set a fixed width and height for
the scrolling container. `react-virtualized` had a Higher Order Component named
`AutoSizer` which would automatically take all space available inside the
parent.

This component has been extracted into
[react-virtualized-auto-sizer](https://www.npmjs.com/package/react-virtualized-auto-sizer)
allowing us to use it with react-window.

```javascript
      <AutoSizer>
      {({height, width}) => (
        <FixedSizeList
          className="list"
          height={height}
          itemCount={200}
          itemSize={24}
          width={width}
        >
          {Row}
        </FixedSizeList>
      )}
      </AutoSizer>

```

[sandbox](https://codesandbox.io/s/nkz7w2mvpj)

## Further Links

1. [Lists with react-window](https://alligator.io/react/lists-with-react-window/)
2. [Rendering large lists with react-virtualized](https://blog.logrocket.com/rendering-large-lists-with-react-virtualized-82741907a6b3)
3. [Rendering lists using react-virtualized](https://css-tricks.com/rendering-lists-using-react-virtualized/)
