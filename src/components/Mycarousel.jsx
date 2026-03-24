import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Mycarousel = () => {
  return (
<div className="container mt-5">
  <div className="row">
    <div className="col-md-10 mx-auto">

      <div 
        id="carouselExample" 
        className="carousel slide shadow-lg rounded overflow-hidden"
        data-bs-ride="carousel"
      >

        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active position-relative">
            <img
              src="images/caro1.jpg"
              className="d-block w-100 carousel-img"
              alt="First slide"
            />

            <div className="carousel-overlay"></div>

            <div className="carousel-caption text-start">
            <h2>Smart tech, sleek design ⚡</h2>
            <p>Engineered for speed and precision, giving you performance that shines every time. <b>Best deal ever</b></p>
            </ div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative">
            <img
              src="images/car2.jpg"
              className="d-block w-100 carousel-img"
              alt="Second slide"
            />

            <div className="carousel-overlay"></div>

            <div className="carousel-caption text-start">
              <h2>Fast performance, zero lag 🚀</h2>
              <p>Experience lightning speed and smooth control with power that never drags.  <b>Best deal ever</b></p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative">
            <img
              src="images/car3.jpg"
              className="d-block w-100 carousel-img"
              alt="Third slide"
            />

            <div className="carousel-overlay"></div>

            <div className="carousel-caption text-start">
            <h2>Feel the bass, own the moment 🔊</h2>
            <p>Deep sound, crystal clarity, and powerful beats that bring every moment to life like never before.  <b>Best deal ever</b></p>            </div>
          </div>

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

    </div>
  </div>
</div>
)
}

export default Mycarousel