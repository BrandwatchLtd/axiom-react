```imports
import { Paragraph, Strong } from 'bw-axiom/react';
import { shortDate, shortDateWithTime } from 'bw-axiom/common/formatting-dates';
import { mediumDate, mediumDateWithTime } from 'bw-axiom/common/formatting-dates';
import { longDate, longDateWithTime, longDateWithTimezone } from 'bw-axiom/common/formatting-dates';
```

# Short Date

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ shortDate(new Date) }
</Paragraph>
```

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ shortDateWithTime(new Date) }
</Paragraph>
```

```js
shortDate(new Date);
shortDateWithTime(new Date);
```


# Medium date

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ mediumDate(new Date) }
</Paragraph>
```

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ mediumDateWithTime(new Date) }
</Paragraph>
```

```js
mediumDate(new Date);
mediumDateWithTime(new Date);
```


# Long date

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ longDate(new Date) }
</Paragraph>
```

```jsx
<Paragraph snippetSkip>
  <Strong>With time: </Strong>{ longDateWithTime(new Date) }
</Paragraph>
```

```jsx
<Paragraph snippetSkip>
  <Strong>With timezone: </Strong>{ longDateWithTimezone(new Date) }
</Paragraph>
```

```js
longDate(new Date);
longDateWithTime(new Date);
longDateWithTimezone(new Date);
```
