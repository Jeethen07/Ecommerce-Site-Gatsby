import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4 ">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              maiores? Harum dolore reprehenderit facere? Ea, quo eveniet
              doloribus perferendis ad veniam illo fugiat dolores eum, eius
              accusamus numquam. Recusandae sit deserunt omnis incidunt,
              blanditiis saepe, corrupti quasi sunt aut laborum quisquam
              delectus quas rem totam. Omnis adipisci porro voluptatum
              obcaecati, necessitatibus non minima nihil aliquid saepe, maxime
              id recusandae tempora?
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
