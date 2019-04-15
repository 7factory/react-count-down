import Countdown from '../lib/Countdown' // 'react-count-down'
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
