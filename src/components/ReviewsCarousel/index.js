// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  leftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  rightArrow = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <div className="backGround">
        <h1 className="reviews">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <div className="arrows">
          <button className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="leftarrow"
              onClick={this.leftArrow}
              alt="left arrow"
              data-testid="leftArrow"
            />
          </button>
          <p className="reviews">{username}</p>
          <button className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="rightarrow"
              onClick={this.rightArrow}
              alt="right arrow"
              data-testid="rightArrow"
            />
          </button>
        </div>
        <p>{companyName}</p>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
