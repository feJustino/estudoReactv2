'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Felipe' Lastname='Justino' />
        <label htmlFor='input' data-label='Label' >Input</label>
        <input type='text' id='input' aria-hidden='true' />
      </div>
    )
  }
})

export default App
