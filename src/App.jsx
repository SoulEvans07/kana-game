import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    console.log(this.props)
  }

  render() {
    return (
      <div className="app">か</div>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, null)(App);
