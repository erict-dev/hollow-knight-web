import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import PurchaseSnackbar from "../components/purchase-snackbar"

import NewCityShot from "../images/new_city_shot.jpg"
import TeamCherryLogo from "../images/team-cherry-logo.png"
import HollowKnightLogo from "../images/hollow-knight-logo.png"

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <iframe width="100%" height="420" src="https://www.youtube.com/embed/JuP47fRBsWg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Header>
      </Modal>
    );
  }
}

class LandingScreen extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
    <div className="full-background-image" style={{ position: 'relative', backgroundImage: `url(${NewCityShot})`}}>
      <PurchaseSnackbar />
      <div className="hero-container">
        <div id="team-cherry-logo" style={{ backgroundImage: `url(${TeamCherryLogo})`}}></div>
        <div id="hollow-knight-logo" style={{ backgroundImage: `url(${HollowKnightLogo})`}}></div>
        <a href="#" onClick={() => this.setState({ modalShow: true })}><div className="hk-transparent-button">Watch Trailer</div></a>
      </div>
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
    </div>
    );
  }
}

export default LandingScreen
