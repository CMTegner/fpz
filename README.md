# fps-stream

## Example

```js
import fps from 'fps-stream'

const cancel = fps(f => console.log(f))

// Some time later, when you feel like not receiving any more fps measurements
cancel()
```
