import React from 'react'

import Header from './Header'

export default {
  title: 'Example/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Header',
}
