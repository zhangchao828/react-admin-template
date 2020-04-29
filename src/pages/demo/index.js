import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {
    return (
      <div>
        <h1>demo页面</h1>
        <Link to={'/index'}> index </Link>
        {` `}
        <Link to={'/test'}> test </Link>
      </div>
    )
  }
}
