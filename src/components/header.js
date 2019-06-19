import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    }
    this.headerColorChange = this.headerColorChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.headerColorChange);
  }
  headerColorChange() {
    const windowsScrollTop = typeof window !== 'undefined' && window.pageYOffset;
    if (windowsScrollTop > 100) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }
  componentWillUnmount() {
    typeof window !== 'undefined' && window.removeEventListener("scroll", this.headerColorChange);
  }


  render() {
    const { classes, children, siteTitle } = this.props;

    return (
      <header className={ this.state.scrolled ? 'nav navScrolled' : 'nav'}>
        <div className="nav-link">
          <Link
            to="/"
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="/team-cherry"
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            Team Cherry
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="/buy"
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            Buy
          </Link>
        </div>
      </header>
    );
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
