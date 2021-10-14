import React, { Component } from "react"
import { Link } from "gatsby"

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1 className="text-center py-5 display-2 text-white">Book Mart</h1>
        <div className="d-flex justify-content-center my-4">
          <Link to="/" className="mr-5">
            Home
          </Link>
          <Link to="/about/" className="mr-5">
            Cart
          </Link>
          <Link to="/signin/" className="mr-5">
            SignIn
          </Link>
          <Link to="/signup/">SignUp</Link>
        </div>
      </nav>
    )
  }
}
