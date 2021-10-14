import React from "react"

export default function TeamPhotoSection() {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <div class="card-deck">
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Reyna</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Rachel</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Katie</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
