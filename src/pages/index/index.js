import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {
    return (
      <div>
        <h1>index页面ss</h1>
        <Link to={'/test'}> test </Link>
        {` `}
        <Link to={'/demo'}> demo </Link>
      </div>
    )
  }
}
