import React, { Component } from "react"
import Heading from "../Reuseable/Heading"
import Img from "gatsby-image"

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.books.edges,
      mycourses: props.books.edges,
    }
  }
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Books" />
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div key={node.id} className="col-11 col-md-6 my-3 mx-auto">
                  <Img fixed={node.image.fixed} />
                  <div className="py-1">
                    <h6 className="mb-0 text-white text-">{node.title}</h6>
                  </div>
                  <div className="py-1">
                    <h6 className="mb-0 text-success">{node.author}</h6>
                  </div>
                  <div className="py-1">
                    <h6 className="mb-0 text-success">${node.price}</h6>
                  </div>
                  <button
                    data-item-id={node.id}
                    data-item-name={node.title}
                    data-item-price={node.price}
                    data-item-url="https://learncodeonline.in"
                    data-item-image={node.image.fixed.src}
                    className="btn btn-warning snipcart-add-item"
                  >
                    Join Now
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
