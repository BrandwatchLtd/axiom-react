```imports
import Paragraph from 'bw-axiom/components/typography/Paragraph';
import Strong from 'bw-axiom/components/typography/Strong';
import { shortDate, shortDateWithTime } from './data-and-time';
import { mediumDate, mediumDateWithTime } from './data-and-time';
import { longDate, longDateWithTime, longDateWithTimezone } from './data-and-time';
```

# Short Date

**Without time:** ${ shortDate(new Date) }
**With time:** ${ shortDateWithTime(new Date) }

```js
shortDate(new Date);
shortDateWithTime(new Date);
```


# Medium date

**Without time:** ${ mediumDate(new Date) }
**With time:** ${ mediumDateWithTime(new Date) }

```js
mediumDate(new Date);
mediumDateWithTime(new Date);
```


# Long date

**Without time:** ${ longDate(new Date) }
**With time:** ${ longDateWithTime(new Date) }
**With timezone** ${ longDateWithTimezone(new Date) }

```js
longDate(new Date);
longDateWithTime(new Date);
longDateWithTimezone(new Date);
```
