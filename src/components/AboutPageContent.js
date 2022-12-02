import React from "react";
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
        <div class="page-head_agile_info_w3l">
          <div class="container">
            <h3>
              About <span>Us </span>
            </h3>
            <div class="services-breadcrumb">
              <div class="agile_inner_breadcrumb">
                <ul class="w3_short">
                  <li>
                    <a href="index.html">Home</a>
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
        <div class="banner_bottom_agile_info">
          <div class="container">
            <div class="agile_ab_w3ls_info">
              <div class="col-md-6 ab_pic_w3ls">
                <img src={ab_pic} alt=" " class="img-responsive" />
              </div>
              <div class="col-md-6 ab_pic_w3ls_text_info">
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
              <div class="clearfix"></div>
            </div>
            <div class="banner_bottom_agile_info_inner_w3ls">
              <div class="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                <figure class="effect-roxy">
                  <img src={bottom1} alt=" " class="img-responsive" />
                  <figcaption>
                    <h3>
                      <span>F</span>all Ahead
                    </h3>
                    <p>New Arrivals</p>
                  </figcaption>
                </figure>
              </div>
              <div class="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                <figure class="effect-roxy">
                  <img src={bottom2} alt=" " class="img-responsive" />
                  <figcaption>
                    <h3>
                      <span>F</span>all Ahead
                    </h3>
                    <p>New Arrivals</p>
                  </figcaption>
                </figure>
              </div>
              <div class="clearfix"></div>
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
        <div class="banner_bottom_agile_info team">
          <div class="container">
            <h3 class="wthree_text_info">
              Our Team <span>Members</span>
            </h3>
            <div class="inner_w3l_agile_grids">
              <div class="col-md-3 team-grids">
                <div class="thumbnail team-w3agile">
                  <img src={t1} class="img-responsive" alt=" " />
                  <div class="social-icons team-icons right-w3l fotw33">
                    <div class="caption">
                      <h4>Joanna Vilken</h4>
                      <p>Add Short Description</p>
                    </div>
                    <ul class="social-nav model-3d-0 footer-social w3_agile_social two">
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
                </div>
              </div>
              <div class="col-md-3 team-grids">
                <div class="thumbnail team-w3agile">
                  <img src={t2} class="img-responsive" alt="" />
                  <div class="social-icons team-icons right-w3l fotw33">
                    <div class="caption">
                      <h4>Anika Mollik</h4>
                      <p>Add Short Description</p>
                    </div>
                    <ul class="social-nav model-3d-0 footer-social w3_agile_social two">
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
                </div>
              </div>
              <div class="col-md-3 team-grids">
                <div class="thumbnail team-w3agile">
                  <img src={t3} class="img-responsive" alt="" />
                  <div class="social-icons team-icons right-w3l fotw33">
                    <div class="caption">
                      <h4>Megali Deo</h4>
                      <p>Add Short Description</p>
                    </div>
                    <ul class="social-nav model-3d-0 footer-social w3_agile_social two">
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
                </div>
              </div>
              <div class="col-md-3 team-grids">
                <div class="thumbnail team-w3agile">
                  <img src={t4} class="img-responsive" alt="" />
                  <div class="social-icons team-icons right-w3l fotw33">
                    <div class="caption">
                      <h4>Retas Word</h4>
                      <p>Add Short Description</p>
                    </div>
                    <ul class="social-nav model-3d-0 footer-social w3_agile_social two">
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
                </div>
              </div>
              <div class="clearfix"> </div>
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
        <div class="schedule-bottom">
          <div class="col-md-6 agileinfo_schedule_bottom_left">
            <img src={mid} alt=" " class="img-responsive" />
          </div>
          <div class="col-md-6 agileits_schedule_bottom_right">
            <div class="w3ls_schedule_bottom_right_grid">
              <h3>
                Save up to <span>50%</span> in this week
              </h3>
              <p>
                Suspendisse varius turpis efficitur erat laoreet dapibus. Mauris
                sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus
                finibus posuere.
              </p>
              <div class="col-md-4 w3l_schedule_bottom_right_grid1">
                <i class="fa fa-user-o" aria-hidden="true"></i>
                <h4>Customers</h4>
                <h5 class="counter">653</h5>
              </div>
              <div class="col-md-4 w3l_schedule_bottom_right_grid1">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                <h4>Events</h4>
                <h5 class="counter">823</h5>
              </div>
              <div class="col-md-4 w3l_schedule_bottom_right_grid1">
                <i class="fa fa-shield" aria-hidden="true"></i>
                <h4>Awards</h4>
                <h5 class="counter">45</h5>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="banner-bootom-w3-agileits">
          <div class="container">
            <h3 class="wthree_text_info">
              What's <span>Trending</span>
            </h3>

            <div class="col-md-5 bb-grids bb-left-agileits-w3layouts">
              <a href="women.html">
                <div class="bb-left-agileits-w3layouts-inner grid">
                  <figure class="effect-roxy">
                    <img src={bb1} alt=" " class="img-responsive" />
                    <figcaption>
                      <h3>
                        <span>S</span>ale{" "}
                      </h3>
                      <p>Upto 55%</p>
                    </figcaption>
                  </figure>
                </div>
              </a>
            </div>
            <div class="col-md-7 bb-grids bb-middle-agileits-w3layouts">
              <div class="bb-middle-agileits-w3layouts grid">
                <figure class="effect-roxy">
                  <img src={bottom3} alt=" " class="img-responsive" />
                  <figcaption>
                    <h3>
                      <span>S</span>ale{" "}
                    </h3>
                    <p>Upto 55%</p>
                  </figcaption>
                </figure>
              </div>
              <div class="bb-middle-agileits-w3layouts forth grid">
                <figure class="effect-roxy">
                  <img src={bottom4} alt=" " class="img-responsive" />
                  <figcaption>
                    <h3>
                      <span>S</span>ale{" "}
                    </h3>
                    <p>Upto 65%</p>
                  </figcaption>
                </figure>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div class="agile_last_double_sectionw3ls">
          <div class="col-md-6 multi-gd-img multi-gd-text ">
            <a href="womens.html">
              <img src={bot_1} alt=" " />
              <h4>
                Flat <span>50%</span> offer
              </h4>
            </a>
          </div>
          <div class="col-md-6 multi-gd-img multi-gd-text ">
            <a href="womens.html">
              <img src={bot_2} alt=" " />
              <h4>
                Flat <span>50%</span> offer
              </h4>
            </a>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
