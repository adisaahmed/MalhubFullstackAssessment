import React from "react";
import TextInput from "react-autocomplete-input";
import { Link } from "react-router-dom";

export function ContactBanner() {
  return (
    <>
      <div>
        <div className="page-head_agile_info_w3l">
          <div className="container">
            <h3>
              C<span>ontact Us </span>
            </h3>
            <div className="services-breadcrumb">
              <div className="agile_inner_breadcrumb">
                <ul className="w3_short">
                  <li>
                    <Link to="index.html">Home</Link>
                    <i>|</i>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ContactDetails() {
  return (
    <>
      <div>
        <div className="banner_bottom_agile_info">
          <div className="container">
            <div className="contact-grid-agile-w3s">
              <div className="col-md-4 contact-grid-agile-w3">
                <div className="contact-grid-agile-w31">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <h4>Address</h4>
                  <p>
                    12K Street, 45 Building Road <span>California, USA.</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4 contact-grid-agile-w3">
                <div className="contact-grid-agile-w32">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <h4>Call Us</h4>
                  <p>
                    +1234 758 839<span>+1273 748 730</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4 contact-grid-agile-w3">
                <div className="contact-grid-agile-w33">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  <h4>Email</h4>
                  <p>
                    <Link to="mailto:info@example.com">info@example1.com</Link>
                    <span>
                      <Link to="mailto:info@example.com">info@example2.com</Link>
                    </span>
                  </p>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ContactMoreInfo() {
  return (
    <>
      <div>
        <div className="banner_bottom_agile_info">
          <div className="container">
            <div className="agile-contact-grids">
              <div className="agile-contact-left">
                <div className="col-md-6 address-grid">
                  <h4>
                    For More <span>Information</span>
                  </h4>
                  <div className="mail-agileits-w3layouts">
                    <i
                      className="fa fa-volume-control-phone"
                      aria-hidden="true"
                    ></i>
                    <div className="contact-right">
                      <p>Telephone </p>
                      <span>+1 (100)222-23-33</span>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="mail-agileits-w3layouts">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div className="contact-right">
                      <p>Mail </p>
                      <Link to="mailto:info@example.com">info@example.com</Link>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="mail-agileits-w3layouts">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div className="contact-right">
                      <p>Location</p>
                      <span>7784 Diamonds street, California, US.</span>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <ul className="social-nav model-3d-0 footer-social w3_agile_social two contact">
                    <li className="share">SHARE ON : </li>
                    <li>
                      <Link to="#" className="facebook">
                        <div className="front">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                        <div className="back">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter">
                        <div className="front">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className="back">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="instagram">
                        <div className="front">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div className="back">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="pinterest">
                        <div className="front">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                        <div className="back">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 contact-form">
                  <h4 className="white-w3ls">
                    Contact <span>Form</span>
                  </h4>
                  <form action="#" method="post">
                    <div className="styled-input agile-styled-input-top">
                      <TextInput type="text" name="Name" required="" autoComplete="new-name" />
                      <label>Name</label>
                      <span></span>
                    </div>
                    <div className="styled-input">
                      <TextInput type="email" name="Email" required="" autoComplete="new-email" />
                      <label>Email</label>
                      <span></span>
                    </div>
                    <div className="styled-input">
                      <TextInput type="text" name="Subject" required="" autoComplete="new-subject" />
                      <label>Subject</label>
                      <span></span>
                    </div>
                    <div className="styled-input">
                      <textarea name="Message" required=""></textarea>
                      <label>Message</label>
                      <span></span>
                    </div>
                    <TextInput type="submit" value="SEND" />
                  </form>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
