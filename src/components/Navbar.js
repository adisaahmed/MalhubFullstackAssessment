import React from "react";
import { Link } from "react-router-dom";
import top1 from "../images/top1.jpg";
import top2 from "../images/top2.jpg";
import log_pic from "../images/log_pic.jpg";

const Navbar = () => {
  return (
    <>
      <div className="header" id="home">
        <div className="container">
          <ul>
            <li>
              {" "}
              <Link to="#" data-toggle="modal" data-target="#myModal">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i> Sign In{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="#" data-toggle="modal" data-target="#myModal2">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sign Up{" "}
              </Link>
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i> Call : 01234567898
            </li>
            <li>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
              <Link to="mailto:info@example.com">info@example.com</Link>
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
              <Link to="/">
                <span>A</span>mco Shoppy{" "}
                <i
                  className="fa fa-shopping-bag top_logo_agile_bag"
                  aria-hidden="true"
                ></i>
              </Link>
            </h1>
          </div>
          <div className="col-md-4 agileits-social top_content">
            <ul className="social-nav model-3d-0 footer-social w3_agile_social">
              <li className="share">Share On : </li>
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
          <div className="clearfix"></div>
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
                      <Link className="menu__a" to="/">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className=" menu__item">
                      <Link className="menu__a" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="dropdown menu__item">
                      <Link
                        to="#"
                        className="dropdown-toggle menu__a"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Men's wear <span className="caret"></span>
                      </Link>
                      <ul className="dropdown-menu multi-column columns-3">
                        <div className="agile_inner_drop_nav_info">
                          <div className="col-sm-6 multi-gd-img1 multi-gd-text ">
                            <Link to="">
                              <img src={top2} alt=" " />
                            </Link>
                          </div>
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <Link to="/men">Clothing</Link>
                              </li>
                              <li>
                                <Link to="/men">Wallets</Link>
                              </li>
                              <li>
                                <Link to="/men">Footwear</Link>
                              </li>
                              <li>
                                <Link to="/men">Watches</Link>
                              </li>
                              <li>
                                <Link to="/men">Accessories</Link>
                              </li>
                              <li>
                                <Link to="/men">Bags</Link>
                              </li>
                              <li>
                                <Link to="/men">Caps & Hats</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <Link to="/men">Jewellery</Link>
                              </li>
                              <li>
                                <Link to="/men">Sunglasses</Link>
                              </li>
                              <li>
                                <Link to="/men">Perfumes</Link>
                              </li>
                              <li>
                                <Link to="/men">Beauty</Link>
                              </li>
                              <li>
                                <Link to="/men">Shirts</Link>
                              </li>
                              <li>
                                <Link to="/men">Sunglasses</Link>
                              </li>
                              <li>
                                <Link to="/men">Swimwear</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    <li className="dropdown menu__item">
                      <Link
                        to="#"
                        className="dropdown-toggle menu__a"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Women's wear <span className="caret"></span>
                      </Link>
                      <ul className="dropdown-menu multi-column columns-3">
                        <div className="agile_inner_drop_nav_info">
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <Link to="/women">Clothing</Link>
                              </li>
                              <li>
                                <Link to="/women">Wallets</Link>
                              </li>
                              <li>
                                <Link to="/women">Footwear</Link>
                              </li>
                              <li>
                                <Link to="/women">Watches</Link>
                              </li>
                              <li>
                                <Link to="/women">Accessories</Link>
                              </li>
                              <li>
                                <Link to="/women">Bags</Link>
                              </li>
                              <li>
                                <Link to="/women">Caps & Hats</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <Link to="/women">Jewellery</Link>
                              </li>
                              <li>
                                <Link to="/women">Sunglasses</Link>
                              </li>
                              <li>
                                <Link to="/women">Perfumes</Link>
                              </li>
                              <li>
                                <Link to="/women">Beauty</Link>
                              </li>
                              <li>
                                <Link to="/women">Shirts</Link>
                              </li>
                              <li>
                                <Link to="/women">Sunglasses</Link>
                              </li>
                              <li>
                                <Link to="/women">Swimwear</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 multi-gd-img multi-gd-text ">
                            <Link to="">
                              <img src={top1} alt=" " />
                            </Link>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>

                    <li className="menu__item">
                      <Link className="menu__a" to="/contact">
                        Contact
                      </Link>
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
    </>
  );
};

export default Navbar;