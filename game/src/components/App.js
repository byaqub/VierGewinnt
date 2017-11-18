import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      chip: "btn-floating btn-large waves-effect waves-light",
      chipColor: "white"
    }
  }

  setChipColor() {
    console.log(this.state)
    this.setState({
      chipColor: this.state.chipColor === "white" ? "red" : "white"
    })
  }

  render() {

    const { chip, chipColor } = this.state;

    return (
      /* This is the starting point of the Game.
      All the Components should branch out from this file
      as root Component. */

      // TODO: Seperate all this ugly file into own components.
      <div>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">About</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>

        {/* end of navbar */}

        <h1 className="header center orange-text">Connect Four</h1>

        {/* GameField */}
        <div className="section no-pad-bot" id="index-banner">
          <div className="container yellow">

            <div className="row center">
              <div className="col l7">
                <div className="col l2">
                  <a className={chip + " " + chipColor} onClick={this.setChipColor.bind(this)}></a>
                </div>
                <div className="col l2">
                  <a className={chip + " " + chipColor} onClick={this.setChipColor.bind(this)}></a>
                </div>
                <div className="col l2">
                  <a className={chip + " " + chipColor} onClick={this.setChipColor.bind(this)}></a>
                </div>
                <div className="col l2">
                  <a className={chip + " " + chipColor} onClick={this.setChipColor.bind(this)}></a>
                </div>
                <div className="col l2">
                  <a className={chip + " " + chipColor} onClick={this.setChipColor.bind(this)}></a>
                </div>
                <div className="col l2">
                  <a className={chip + " " + chipColor} onClick={this.setChipColor.bind(this)}></a>
                </div>
                <div className="col l2">
                  <a className={chip + " " + chipColor} onClick={this.setChipColor.bind(this)}></a>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="row center">
          <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        </div>
        <div className="row center">
          <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
        </div>
        <br />
      

      <footer className="page-footer blue">
        <div className="footer-copyright">
          <div className="container">
            Made by <a className="white-text" href="http://materializecss.com">Materialize</a>
          </div>
        </div>
      </footer>
      </div >
    )
  }
}
