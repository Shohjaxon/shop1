import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              quasi!
            </p>
          </div>
          <div className="col l4 offset s12">
            <h5 className="white-text">Footer Content</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright container">
        &copy; {new Date().getFullYear()} Shop.uz
        <a href="#!" className="grey-text text-lighten-4 right">
          More Links
        </a>
      </div>
    </footer>
  );
}
