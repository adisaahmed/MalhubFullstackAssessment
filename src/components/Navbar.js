import React from "react";

const Navbar = () => {
  return (
    <>
      <div class="header" id="home">
        <div class="container">
          <ul>
            <li>
              {" "}
              <a href="#" data-toggle="modal" data-target="#myModal">
                <i class="fa fa-unlock-alt" aria-hidden="true"></i> Sign In{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="#" data-toggle="modal" data-target="#myModal2">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Sign Up{" "}
              </a>
            </li>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i> Call : 01234567898
            </li>
            <li>
              <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="header-bot">
        <div class="header-bot_inner_wthreeinfo_header_mid">
          <div class="col-md-4 header-middle">
            <form>
              <input
                type="search"
                name="search"
                placeholder="Search here..."
                required=""
              />
              <input type="submit" value=" " />
              <div class="clearfix"></div>
            </form>
          </div>
          <div class="col-md-4 logo_agile">
            <h1>
              <a href="index.html">
                <span>A</span>mco Shoppy{" "}
                <i
                  class="fa fa-shopping-bag top_logo_agile_bag"
                  aria-hidden="true"
                ></i>
              </a>
            </h1>
          </div>
          <div class="col-md-4 agileits-social top_content">
            <ul class="social-nav model-3d-0 footer-social w3_agile_social">
              <li class="share">Share On : </li>
              <li>
                <a href="#" class="facebook">
                  <div class="front">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                  <div class="back">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
                  <div class="front">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div class="back">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="instagram">
                  <div class="front">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                  <div class="back">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="pinterest">
                  <div class="front">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </div>
                  <div class="back">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>

      <div className="ban-top">
        <div className="container">
          <div className="top_nav_left">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse menu--shylock"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav menu__list">
                    <li className="active menu__item menu__item--current">
                      <a className="menu__a" href="">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className=" menu__item">
                      <a className="menu__a" href="">
                        About
                      </a>
                    </li>
                    <li className="dropdown menu__item">
                      <a
                        href="#"
                        className="dropdown-toggle menu__a"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Men's wear <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu multi-column columns-3">
                        <div className="agile_inner_drop_nav_info">
                          <div className="col-sm-6 multi-gd-img1 multi-gd-text ">
                            <a href="">
                              <img src="images/top2.jpg" alt=" " />
                            </a>
                          </div>
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="">Clothing</a>
                              </li>
                              <li>
                                <a href="">Wallets</a>
                              </li>
                              <li>
                                <a href="">Footwear</a>
                              </li>
                              <li>
                                <a href="">Watches</a>
                              </li>
                              <li>
                                <a href="">Accessories</a>
                              </li>
                              <li>
                                <a href="">Bags</a>
                              </li>
                              <li>
                                <a href="">Caps & Hats</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="">Jewellery</a>
                              </li>
                              <li>
                                <a href="">Sunglasses</a>
                              </li>
                              <li>
                                <a href="">Perfumes</a>
                              </li>
                              <li>
                                <a href="">Beauty</a>
                              </li>
                              <li>
                                <a href="">Shirts</a>
                              </li>
                              <li>
                                <a href="">Sunglasses</a>
                              </li>
                              <li>
                                <a href="">Swimwear</a>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    <li className="dropdown menu__item">
                      <a
                        href="#"
                        className="dropdown-toggle menu__a"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Women's wear <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu multi-column columns-3">
                        <div className="agile_inner_drop_nav_info">
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="">Clothing</a>
                              </li>
                              <li>
                                <a href="">Wallets</a>
                              </li>
                              <li>
                                <a href="">Footwear</a>
                              </li>
                              <li>
                                <a href="">Watches</a>
                              </li>
                              <li>
                                <a href="">Accessories</a>
                              </li>
                              <li>
                                <a href="">Bags</a>
                              </li>
                              <li>
                                <a href="">Caps & Hats</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="">Jewellery</a>
                              </li>
                              <li>
                                <a href="">Sunglasses</a>
                              </li>
                              <li>
                                <a href="">Perfumes</a>
                              </li>
                              <li>
                                <a href="">Beauty</a>
                              </li>
                              <li>
                                <a href="">Shirts</a>
                              </li>
                              <li>
                                <a href="">Sunglasses</a>
                              </li>
                              <li>
                                <a href="">Swimwear</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 multi-gd-img multi-gd-text ">
                            <a href="">
                              <img src="images/top1.jpg" alt=" " />
                            </a>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    <li className="menu__item dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle menu__a"
                        data-toggle="dropdown"
                      >
                        Short Codes <b className="caret"></b>
                      </a>
                      <ul className="dropdown-menu agile_short_dropdown">
                        <li>
                          <a href="">Web Icons</a>
                        </li>
                        <li>
                          <a href="">Typography</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu__item">
                      <a className="menu__a" href="">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="top_nav_right">
            <div className="wthreecartaits wthreecartaits2 cart cart box_1">
              <form action="#" method="post" className="last">
                <input type="hidden" name="cmd" value="_cart" />
                <input type="hidden" name="display" value="1" />
                <button
                  className="w3view-cart"
                  type="submit"
                  name="submit"
                  value=""
                >
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body modal-body-sub_agile">
              <div class="col-md-8 modal_body_left modal_body_left1">
                <h3 class="agileinfo_sign">
                  Sign In <span>Now</span>
                </h3>
                <form action="#" method="post">
                  <div class="styled-input agile-styled-input-top">
                    <input type="text" name="Name" required="" />
                    <label>Name</label>
                    <span></span>
                  </div>
                  <div class="styled-input">
                    <input type="email" name="Email" required="" />
                    <label>Email</label>
                    <span></span>
                  </div>
                  <input type="submit" value="Sign In" />
                </form>
                <ul class="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                  <li>
                    <a href="#" class="facebook">
                      <div class="front">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                      <div class="back">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="twitter">
                      <div class="front">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                      <div class="back">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="instagram">
                      <div class="front">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                      <div class="back">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="pinterest">
                      <div class="front">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                      <div class="back">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="clearfix"></div>
                <p>
                  <a href="#" data-toggle="modal" data-target="#myModal2">
                    {" "}
                    Don't have an account?
                  </a>
                </p>
              </div>
              <div class="col-md-4 modal_body_right modal_body_right1">
                <img src="images/log_pic.jpg" alt=" " />
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="myModal2" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body modal-body-sub_agile">
              <div class="col-md-8 modal_body_left modal_body_left1">
                <h3 class="agileinfo_sign">
                  Sign Up <span>Now</span>
                </h3>
                <form action="#" method="post">
                  <div class="styled-input agile-styled-input-top">
                    <input type="text" name="Name" required="" />
                    <label>Name</label>
                    <span></span>
                  </div>
                  <div class="styled-input">
                    <input type="email" name="Email" required="" />
                    <label>Email</label>
                    <span></span>
                  </div>
                  <div class="styled-input">
                    <input type="password" name="password" required="" />
                    <label>Password</label>
                    <span></span>
                  </div>
                  <div class="styled-input">
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
                <ul class="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                  <li>
                    <a href="#" class="facebook">
                      <div class="front">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                      <div class="back">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="twitter">
                      <div class="front">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                      <div class="back">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="instagram">
                      <div class="front">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                      <div class="back">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="pinterest">
                      <div class="front">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                      <div class="back">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="clearfix"></div>
                <p>
                  <a href="#">By clicking register, I agree to your terms</a>
                </p>
              </div>
              <div class="col-md-4 modal_body_right modal_body_right1">
                <img src="images/log_pic.jpg" alt=" " />
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
