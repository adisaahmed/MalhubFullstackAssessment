import React from "react";
import { Link } from "react-router-dom";
import ab_pic from "../images/ab_pic.jpg";
import bottom1 from "../images/bottom1.jpg";
import bottom2 from "../images/bottom2.jpg";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
import t4 from "../images/t4.jpg";
import mid from "../images/mid.jpg";
import bb1 from "../images/bb1.jpg";
import bottom3 from "../images/bottom3.jpg";
import bottom4 from "../images/bottom4.jpg";
import bot_1 from "../images/bot_1.jpg";
import bot_2 from "../images/bot_2.jpg";

export function Banner() {
  return (
    <>
      <div>
        <div className="page-head_agile_info_w3l">
          <div className="container">
            <h3>
              About <span>Us </span>
            </h3>
            <div className="services-breadcrumb">
              <div className="agile_inner_breadcrumb">
                <ul className="w3_short">
                  <li>
                    <Link to="index.html">Home</Link>
                    <i>|</i>
                  </li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function AboutUs() {
  return (
    <>
      <div>
        <div className="banner_bottom_agile_info">
          <div className="container">
            <div className="agile_ab_w3ls_info">
              <div className="col-md-6 ab_pic_w3ls">
                <img src={ab_pic} alt=" " className="img-responsive" />
              </div>
              <div className="col-md-6 ab_pic_w3ls_text_info">
                <h5>
                  About Our Elite <span> Shoppy</span>{" "}
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elPellentesque vehicula augue eget nisl ullamcorper, molestie
                  blandit ipsum auctor. Mauris volutpat augue dolor..
                </p>
                <p>
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut lab ore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco. labore et dolore magna
                  aliqua.
                </p>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="banner_bottom_agile_info_inner_w3ls">
              <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                <figure className="effect-roxy">
                  <img src={bottom1} alt=" " className="img-responsive" />
                  <figcaption>
                    <h3>
                      <span>F</span>all Ahead
                    </h3>
                    <p>New Arrivals</p>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                <figure className="effect-roxy">
                  <img src={bottom2} alt=" " className="img-responsive" />
                  <figcaption>
                    <h3>
                      <span>F</span>all Ahead
                    </h3>
                    <p>New Arrivals</p>
                  </figcaption>
                </figure>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Team() {
  return (
    <>
      <div>
        <div className="banner_bottom_agile_info team">
          <div className="container">
            <h3 className="wthree_text_info">
              Our Team <span>Members</span>
            </h3>
            <div className="inner_w3l_agile_grids">
              <div className="col-md-3 team-grids">
                <div className="thumbnail team-w3agile">
                  <img src={t1} className="img-responsive" alt=" " />
                  <div className="social-icons team-icons right-w3l fotw33">
                    <div className="caption">
                      <h4>Joanna Vilken</h4>
                      <p>Add Short Description</p>
                    </div>
                    <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
                </div>
              </div>
              <div className="col-md-3 team-grids">
                <div className="thumbnail team-w3agile">
                  <img src={t2} className="img-responsive" alt="" />
                  <div className="social-icons team-icons right-w3l fotw33">
                    <div className="caption">
                      <h4>Anika Mollik</h4>
                      <p>Add Short Description</p>
                    </div>
                    <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
                </div>
              </div>
              <div className="col-md-3 team-grids">
                <div className="thumbnail team-w3agile">
                  <img src={t3} className="img-responsive" alt="" />
                  <div className="social-icons team-icons right-w3l fotw33">
                    <div className="caption">
                      <h4>Megali Deo</h4>
                      <p>Add Short Description</p>
                    </div>
                    <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
                </div>
              </div>
              <div className="col-md-3 team-grids">
                <div className="thumbnail team-w3agile">
                  <img src={t4} className="img-responsive" alt="" />
                  <div className="social-icons team-icons right-w3l fotw33">
                    <div className="caption">
                      <h4>Retas Word</h4>
                      <p>Add Short Description</p>
                    </div>
                    <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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

export function Schedule() {
  return (
    <>
      <div>
        <div className="schedule-bottom">
          <div className="col-md-6 agileinfo_schedule_bottom_left">
            <img src={mid} alt=" " className="img-responsive" />
          </div>
          <div className="col-md-6 agileits_schedule_bottom_right">
            <div className="w3ls_schedule_bottom_right_grid">
              <h3>
                Save up to <span>50%</span> in this week
              </h3>
              <p>
                Suspendisse varius turpis efficitur erat laoreet dapibus. Mauris
                sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus
                finibus posuere.
              </p>
              <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <h4>Customers</h4>
                <h5 className="counter">653</h5>
              </div>
              <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                <h4>Events</h4>
                <h5 className="counter">823</h5>
              </div>
              <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                <i className="fa fa-shield" aria-hidden="true"></i>
                <h4>Awards</h4>
                <h5 className="counter">45</h5>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="banner-bootom-w3-agileits">
          <div className="container">
            <h3 className="wthree_text_info">
              What's <span>Trending</span>
            </h3>

            <div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
              <Link to="women.html">
                <div className="bb-left-agileits-w3layouts-inner grid">
                  <figure className="effect-roxy">
                    <img src={bb1} alt=" " className="img-responsive" />
                    <figcaption>
                      <h3>
                        <span>S</span>ale{" "}
                      </h3>
                      <p>Upto 55%</p>
                    </figcaption>
                  </figure>
                </div>
              </Link>
            </div>
            <div className="col-md-7 bb-grids bb-middle-agileits-w3layouts">
              <div className="bb-middle-agileits-w3layouts grid">
                <figure className="effect-roxy">
                  <img src={bottom3} alt=" " className="img-responsive" />
                  <figcaption>
                    <h3>
                      <span>S</span>ale{" "}
                    </h3>
                    <p>Upto 55%</p>
                  </figcaption>
                </figure>
              </div>
              <div className="bb-middle-agileits-w3layouts forth grid">
                <figure className="effect-roxy">
                  <img src={bottom4} alt=" " className="img-responsive" />
                  <figcaption>
                    <h3>
                      <span>S</span>ale{" "}
                    </h3>
                    <p>Upto 65%</p>
                  </figcaption>
                </figure>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="agile_last_double_sectionw3ls">
          <div className="col-md-6 multi-gd-img multi-gd-text ">
            <Link to="womens.html">
              <img src={bot_1} alt=" " />
              <h4>
                Flat <span>50%</span> offer
              </h4>
            </Link>
          </div>
          <div className="col-md-6 multi-gd-img multi-gd-text ">
            <Link to="womens.html">
              <img src={bot_2} alt=" " />
              <h4>
                Flat <span>50%</span> offer
              </h4>
            </Link>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
}
