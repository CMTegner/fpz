# fpz

## Example

```js
import fpz from 'fpz'

const cancel = fpz(fps => console.log(fps))

// Some time later, when you feel like not receiving any more fps measurements
cancel()
```
