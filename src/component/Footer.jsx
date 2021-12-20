import React from "react";

const Footer =()=> {
    return(
      <>
       <div>
      <footer
        style={{ background: "#000" }}
        className="text-center text-lg-start  text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span style={{ color: "#fff" }}>
              Conecta con nuestras redes sociales
            </span>
          </div>
          <div style={{ color: "white" }}>
            <a href="#g" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#g" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#g" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="#g" className=" text-reset">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6
                  style={{ color: "white" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  <i className="fas fa-gem me-3"></i>LabZone
                </h6>
                <p style={{ color: "#ADADAD" }}>
                  {" "}
                  Plataforma para empleados de Labzone que les permite
                  visualizar los puntos canjeables de cada producto
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6
                  style={{ color: "white" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Contacto
                </h6>
                <p style={{ color: "#ADADAD" }}>
                  <i className="fas fa-home me-3"></i> Av. Andres Avelino
                  Cáceres s/n, Urb, Miraflores 20002, PE
                </p>
                <p style={{ color: "#ADADAD" }}>
                  <i className="fas fa-envelope me-3"></i>info@labzone.com
                </p>
                <p style={{ color: "#ADADAD" }}>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ color: "white" }} className="text-center p-4">
          © 2021 Copyright: LabZone Puntos
        </div>
      </footer>
    </div>
        </>
    )
}

export {Footer}