// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'
import manageBand from "../reducers/manageBand"
class BandInput extends Component {
  state = {
    name: ""
  }
  handleChange = (event)=>{
    this.setState({name:event.target.value})
  }
  handleSubmit = (event)=>{
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({name:""})
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="input"
        onChange={this.handleChange}
        value= {this.state.name}
        />
        <input type="submit" />
      </form>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    addBand: (name)=>dispatch({type:"ADD_BAND", payload:name})
  }
}

export default connect(null,mapDispatchToProps)(BandInput)
