// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickAcceleration = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickApplyBrakes = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <div className="speedometer-container">
          <h1 className="heading"> SPEEDOMETER </h1>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speed-text"> Speed is {speed}mph</h1>
          <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div class name="buttons-container">
            <button
              className="accelerate"
              type="button"
              onClick={this.onClickAcceleration}
            >
              Accelerate
            </button>
            <button
              className="breaks"
              type="button"
              onClick={this.onClickApplyBrakes}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
