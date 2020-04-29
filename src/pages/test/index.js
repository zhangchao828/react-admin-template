import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {
    return (
      <div>
        <h1>test页面</h1>
        <Link to={'/index'}> index </Link>
        {` `}
        <Link to={'/demo'}> demo </Link>
      </div>
    )
  }
}
