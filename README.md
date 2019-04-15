# react-count-down

react-count-down is a simple count down component using react.

## Installation

`npm install git+https://git@github.com/7factory/react-count-down.git --save-dev`

## Usage

```javascript
import Countdown from 'react-count-down'
import ReactDOM from 'react-dom'
import React from 'react'
import Moment from 'moment'

const _addSomeTime = () => {
  return Moment().add(1, 'minutes').format('MM/DD/YYYY h:mm A')
}

let options = {
  endDate: _addSomeTime(),
  prefix: 'until resetting countdown!',
  reset: true,
  expiredMessage: 'RESET'
}
const cb = () => {
  options['endDate'] = _addSomeTime()
  console.log(`resetting countdown with new end date ${options.endDate}`)
}
options['cb'] = cb

const TestComponent = () => (
  <div>
    <Countdown options={{
      endDate: '07/15/2019 10:55 AM', prefix: 'until my birthday!', cb: () => {
        console.log('expired callback')
      }
    }}/>
    <Countdown options={options}/>
  </div>
)

ReactDOM.render(<TestComponent/>, document.getElementById('root'))
```

## Styles

react-count-down can be used with your own custom styles. A minimal [countdown.css](https://github.com/StevenIseki/react-count-down/blob/master/example/public/countdown.css) style sheet is included as a guide.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
