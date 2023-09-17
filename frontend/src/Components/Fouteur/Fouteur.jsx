import React from 'react';

const Fouteur = () => {
    const Handlechange =()=>{
        window.location.href="www.linkedin.com/in/hani-ben-jemaa-046b3b167"
    }
  return (
    <footer className="bg-light text-center text-white">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i> {/* Bootstrap icon */}
          </a>

          {/* Twitter */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
          >
            <i className="bi bi-twitter"></i> {/* Bootstrap icon */}
          </a>

          {/* Google */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#dd4b39' }}
            href="#!"
            role="button"
          >
            <i className="bi bi-google"></i> {/* Bootstrap icon */}
          </a>

          {/* Instagram */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
          >
            <i className="bi bi-instagram"></i> {/* Bootstrap icon */}
          </a>

          {/* Linkedin */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#0082ca' }}
            href="#!"
            role="button"
          >
            <i className="bi bi-linkedin"></i> {/* Bootstrap icon */}
          </a>

          {/* Github */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#333333' }}
            href="#!"
            role="button"
          >
            <i className="bi bi-github"></i> {/* Bootstrap icon */}
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2020 Copyright:
        <button type="button" class="btn btn-link" data-mdb-ripple-color="dark" onClick={Handlechange}></button>
 
        hani ben jemaa
        
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Fouteur;
