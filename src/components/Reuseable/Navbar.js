import React, { Component } from "react"
import { Link } from "gatsby"

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      {
        id: 2,
        text: "About",
        url: "/about/",
      },
      {
        id: 3,
        text: "Services",
        url: "/services/",
      },
      {
        id: 4,
        text: "Contact",
        url: "/contact/",
      },
    ],
  }

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav>
        <h1 className="text-center py-5 display-2 text-white">Book Mart</h1>
        <div className="d-flex justify-content-center my-4">
          <Link to="/" className="mr-5">Home</Link>
          <Link to="/cart/" className="mr-5">Cart</Link>
          <Link to="/signin/" className="mr-5">SignIn</Link>
          <Link to="/signup/">SignUp</Link>
        </div>
      </nav>
    )
  }
}
