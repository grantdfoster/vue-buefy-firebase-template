import {
  expect
} from 'chai'

import {
  shallowMount
} from '@vue/test-utils'

import Login from '@/views/Login'

describe('Tests Login Screen', () => {
  it('Ensure Sign In Button Text Is Parametric', () => {
    const msg = "Click Me I'm Testing!"
    const wrapper = shallowMount(Login)
    wrapper.setData({
      buttonText: msg
    })
    expect(wrapper.text()).to.include(msg)
  })
})