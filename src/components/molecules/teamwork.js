import React from "react";

function Teamwork() {
  return (
    <section className="teamwork" style={{ marginBottom: "70px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="teamwork__content--left">
              <figure className="mb-0">
                <img
                  src="assets/images/sayur.jpg"
                  alt="asd"
                  className="teamwork__image"
                />
              </figure>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="teamwork__content--right">
              <h1>
                Kami Menyediakan Sayur Sayuran Terbaik Untuk Anda
                <span className="d-md-block">dan Berkualitas</span>
              </h1>

              <p>
                Kamu dapat mencari berbagai sayuran di outlet kami
                <span className="d-md-block">di outlet kami.</span>
              </p>

              <div className="list">
                <div className="list__item">
                  <figure className="mb-0 rounded-circle">
                    <img
                      src="assets/images/icons/icon-check.svg"
                      alt="t"
                      className="list__item--image"
                    />
                  </figure>

                  <span>Berbagai Macam Sayuran</span>
                </div>

                <div className="list__item">
                  <figure className="mb-0 rounded-circle">
                    <img
                      src="assets/images/icons/icon-check.svg"
                      alt="t"
                      className="list__item--image"
                    />
                  </figure>

                  <span>
                   Hubungi staff kami 
                  </span>
                </div>
                <div className="list__item">
                  <figure className="mb-0 rounded-circle">
                    <img
                      src="assets/images/icons/icon-check.svg"
                      alt="t"
                      className="list__item--image"
                    />
                  </figure>

                  <span>
                  Gratis Sayuran Sehat untuk Kamu Yang Beruntung.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teamwork;
