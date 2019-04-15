import expect from 'expect'
import test from 'tape'
import React from 'react'
import Enzyme from 'enzyme'
import { setupJsdom } from './jsdom'
import Countdown from '../src/Countdown'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

test('Countdown component', (t) => {
  setupJsdom()
  let OPTIONS = { endDate: '06/03/2018 10:12 AM', prefix: 'until my birthday!' }

  const wrapper = Enzyme.mount(<Countdown options={OPTIONS}/>)
  console.log(wrapper.props())
  t.pass(
    expect(wrapper.props().options).toEqual(OPTIONS)
  )

  t.end()
})
