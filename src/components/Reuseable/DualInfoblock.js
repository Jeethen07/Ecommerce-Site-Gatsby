import React from "react"
import Heading from "./Heading"

export default function DualInfoblock({ heading, img }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quasi. Dolorum officia accusamus fuga id ea sequi
              distinctio. Eum accusantium ipsa fugiat adipisci possimus? Ipsum
              dignissimos aspernatur laborum eos laudantium provident ut,
              dolores nemo adipisci saepe possimus aliquam molestias deleniti
              ipsam dolor iure libero architecto? Laudantium, voluptatum? Quis
              est reprehenderit voluptatem, quia consequatur ipsum minima, iusto
              accusantium, magnam nesciunt ullam sit! Rem earum, deleniti
              corrupti obcaecati veritatis unde accusamus nostrum illo, vero
              explicabo dolor at temporibus, iure voluptatum officia hic?
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title text-white">Click Photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                  quam natus, facere animi quae quaerat quod amet, labore
                  voluptatibus itaque commodi? Ad et doloremque dolores
                  voluptatem adipisci, numquam id dicta.
                </p>
                <a href="#" className="btn btn-warning btn-block">
                  {heading}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
