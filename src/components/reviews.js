import React from "react"

import "../styles/rotating-reviews.css"

const reviews = [
  {
    description: "“It’s a deep dive into a dark place, and a brilliantly rich experience.“",
    rating: "9/10 - Game Informer",
  },
  {
    description: "“Truly a masterpiece of gaming if there ever was one, and certainly art worthy of being in a museum.”",
    rating: "10/10 - Destructoid",
  },
  {
    description: "“Best Platformer 2017 - The joy of Hollow Knight is the joy of discovery, always hard-earned, never handed to you.”",
    rating: "92/100 – PC Gamer",
  },

]

class RotatingReviews extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      intervalId : null,
      reviewIndex: 0
    };
  }

  componentDidMount() {
    var intervalId = setInterval(this.incrementReview.bind(this), 4000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
   clearInterval(this.state.intervalId);
  }

  incrementReview() {
    this.setState({ reviewIndex: this.state.reviewIndex < reviews.length - 1 ? this.state.reviewIndex + 1 : 0 })
  }

  render() {
    console.log(this.state)
    return (
      <div className="rotating-reviews-container">
        <div className="rotating-reviews-content">
          <div className="rotating-review-description">{reviews[this.state.reviewIndex].description}</div>
          <div className="rotating-review-rating">{reviews[this.state.reviewIndex].rating}</div>
        </div>
      </div>
    );
  }
}

export default RotatingReviews
