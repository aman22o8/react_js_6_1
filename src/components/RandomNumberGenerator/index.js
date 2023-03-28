// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {current: 0}

  clickedButton = () => {
    this.setState({current: Math.floor(Math.random() * 101)})
  }

  render() {
    const {current} = this.state
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="main_heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              onClick={this.clickedButton}
              className="button"
              type="button"
            >
              Generate
            </button>
            <p className="result">{current}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
