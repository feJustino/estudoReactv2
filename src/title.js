'use strict'

import React from 'react'

const Title = () => {
  return (
    <h1>Olá {this.props.name + ' ' + this.props.Lastname}</h1>
  )
}

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       Lastname: 'Sem sobrenome'
//     }
//   },

//   render: function () {
//     return (
//       <h1>Olá {this.props.name + ' ' + this.props.Lastname}</h1>
//     )
//   }
// })

export default Title
