import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput />
        <ul>
        {console.log(this.props)}
        {this.props.bands.map(b=>{
          return <li>{b}</li>
        })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = ({bands})=>{
  return {bands}
}
export default connect(mapStateToProps)(BandsContainer)
