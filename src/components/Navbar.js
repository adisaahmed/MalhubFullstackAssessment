import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="header" id="home">
        <div className="container">
          <ul>
            <li>
              {" "}
              <a href="#" data-toggle="modal" data-target="#myModal">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i> Sign In{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="#" data-toggle="modal" data-target="#myModal2">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>{" "}
                Sign Up{" "}
              </a>
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i> Call :
              01234567898
            </li>
            <li>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-bot">
        <div className="header-bot_inner_wthreeinfo_header_mid">
          <div className="col-md-4 header-middle">
            <form>
              <input
                type="search"
                name="search"
                placeholder="Search here..."
                required=""
              />
              <input type="submit" value=" " />
              <div className="clearfix"></div>
            </form>
          </div>
          <div className="col-md-4 logo_agile">
            <h1>
              <a href="index.html">
                <span>E</span>lite Shoppy{" "}
                <i
                  className="fa fa-shopping-bag top_logo_agile_bag"
                  aria-hidden="true"
                ></i>
              </a>
            </h1>
          </div>
          <div className="col-md-4 agileits-social top_content">
            <ul className="social-nav model-3d-0 footer-social w3_agile_social">
              <li className="share">Share On : </li>
              <li>
                <a href="#" className="facebook">
                  <div className="front">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                  <div className="back">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <div className="front">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div className="back">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <div className="front">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                  <div className="back">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="pinterest">
                  <div className="front">
                    <i className="fa fa-aedin" aria-hidden="true"></i>
                  </div>
                  <div className="back">
                    <i className="fa fa-aedin" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body modal-body-sub_agile">
              <div className="col-md-8 modal_body_left modal_body_left1">
                <h3 className="agileinfo_sign">
                  Sign In <span>Now</span>
                </h3>
                <form action="#" method="post">
                  <div className="styled-input agile-styled-input-top">
                    <input type="text" name="Name" required="" />
                    <label>Name</label>
                    <span></span>
                  </div>
                  <div className="styled-input">
                    <input type="email" name="Email" required="" />
                    <label>Email</label>
                    <span></span>
                  </div>
                  <input type="submit" value="Sign In" />
                </form>
                <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                  <li>
                    <a href="#" className="facebook">
                      <div className="front">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                      <div className="back">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <div className="front">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                      <div className="back">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <div className="front">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                      <div className="back">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <div className="front">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                      <div className="back">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="clearfix"></div>
                <p>
                  <a href="#" data-toggle="modal" data-target="#myModal2">
                    {" "}
                    Don't have an account?
                  </a>
                </p>
              </div>
              <div className="col-md-4 modal_body_right modal_body_right1">
                <img src="images/log_pic.jpg" alt=" " />
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body modal-body-sub_agile">
              <div className="col-md-8 modal_body_left modal_body_left1">
                <h3 className="agileinfo_sign">
                  Sign Up <span>Now</span>
                </h3>
                <form action="#" method="post">
                  <div className="styled-input agile-styled-input-top">
                    <input type="text" name="Name" required="" />
                    <label>Name</label>
                    <span></span>
                  </div>
                  <div className="styled-input">
                    <input type="email" name="Email" required="" />
                    <label>Email</label>
                    <span></span>
                  </div>
                  <div className="styled-input">
                    <input type="password" name="password" required="" />
                    <label>Password</label>
                    <span></span>
                  </div>
                  <div className="styled-input">
                    <input
                      type="password"
                      name="Confirm Password"
                      required=""
                    />
                    <label>Confirm Password</label>
                    <span></span>
                  </div>
                  <input type="submit" value="Sign Up" />
                </form>
                <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                  <li>
                    <a href="#" className="facebook">
                      <div className="front">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                      <div className="back">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <div className="front">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                      <div className="back">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <div className="front">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                      <div className="back">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <div className="front">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                      <div className="back">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="clearfix"></div>
                <p>
                  <a href="#">By clicking register, I agree to your terms</a>
                </p>
              </div>
              <div className="col-md-4 modal_body_right modal_body_right1">
                <img src="images/log_pic.jpg" alt=" " />
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
