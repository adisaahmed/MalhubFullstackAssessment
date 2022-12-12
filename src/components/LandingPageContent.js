import React from "react";
import { Link } from "react-router-dom";
import bottom1 from "../images/bottom1.jpg";
import bottom2 from "../images/bottom2.jpg";
import mid from "../images/mid.jpg";
import bb1 from "../images/bb1.jpg";
import bottom3 from "../images/bottom3.jpg";
import bottom4 from "../images/bottom4.jpg";
import bot_1 from "../images/bot_1.jpg";
import bot_2 from "../images/bot_2.jpg";
import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.jpg";
import m5 from "../images/m5.jpg";
import m6 from "../images/m6.jpg";
import m7 from "../images/m7.jpg";
import m8 from "../images/m8.jpg";
import w1 from "../images/w1.jpg";
import w2 from "../images/w2.jpg";
import w3 from "../images/w3.jpg";
import w4 from "../images/w4.jpg";
import w5 from "../images/w5.jpg";
import w6 from "../images/w6.jpg";
import w7 from "../images/w7.jpg";
import w8 from "../images/w8.jpg";
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";
import b5 from "../images/b5.jpg";
import b6 from "../images/b6.jpg";
import b7 from "../images/b7.jpg";
import b8 from "../images/b8.jpg";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import s6 from "../images/s6.jpg";
import s7 from "../images/s7.jpg";
import s8 from "../images/s8.jpg";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
import t4 from "../images/t4.jpg";

export function Banner() {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li
          data-target="#myCarousel"
          data-slide-href="0"
          className="active"
        ></li>
        <li data-target="#myCarousel" data-slide-href="1" className=""></li>
        <li data-target="#myCarousel" data-slide-href="2" className=""></li>
        <li data-target="#myCarousel" data-slide-href="3" className=""></li>
        <li data-target="#myCarousel" data-slide-href="4" className=""></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <div className="container">
            <div className="carousel-caption">
              <h3>
                The Biggest <span>Sale</span>
              </h3>
              <p>Special for today</p>
              <Link className="hvr-outline-out button2" to="/men">
                Shop Now{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="item item2">
          <div className="container">
            <div className="carousel-caption">
              <h3>
                Summer <span>Collection</span>
              </h3>
              <p>New Arrivals On Sale</p>
              <Link className="hvr-outline-out button2" to="/men">
                Shop Now{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="item item3">
          <div className="container">
            <div className="carousel-caption">
              <h3>
                The Biggest <span>Sale</span>
              </h3>
              <p>Special for today</p>
              <Link className="hvr-outline-out button2" to="/men">
                Shop Now{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="item item4">
          <div className="container">
            <div className="carousel-caption">
              <h3>
                Summer <span>Collection</span>
              </h3>
              <p>New Arrivals On Sale</p>
              <Link className="hvr-outline-out button2" to="/">
                Shop Now{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="item item5">
          <div className="container">
            <div className="carousel-caption">
              <h3>
                The Biggest <span>Sale</span>
              </h3>
              <p>Special for today</p>
              <Link className="hvr-outline-out button2" to="/men">
                Shop Now{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <a
        className="left carousel-control"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span
          className="glyphicon glyphicon-chevron-left"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span
          className="glyphicon glyphicon-chevron-right"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export function BannerBottom() {
  return (
    <div className="banner_bottom_agile_info">
      <div className="container">
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
  );
}

export function IndexDiscount() {
  return (
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
  );
}

export function IndexDiscountBottom() {
  return (
    <>
      <div className="banner-bootom-w3-agileits">
        <div className="container">
          <h3 className="wthree_text_info">
            What's <span>Trending</span>
          </h3>

          <div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
            <Link to="">
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
            <Link to="">
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
            </Link>
            <Link to="">
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
            </Link>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>

      <div className="agile_last_double_sectionw3ls">
        <div className="col-md-6 multi-gd-img multi-gd-text ">
          <Link to="">
            <img src={bot_1} alt=" " />
            <h4>
              Flat <span>50%</span> offer
            </h4>
          </Link>
        </div>
        <div className="col-md-6 multi-gd-img multi-gd-text ">
          <Link to="">
            <img src={bot_2} alt=" " />
            <h4>
              Flat <span>50%</span> offer
            </h4>
          </Link>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export function NewArrivals() {
  return (
    <div className="new_arrivals_agile_w3ls_info">
      <div className="container">
        <h3 className="wthree_text_info">
          New <span>Arrivals</span>
        </h3>
        <div id="horizontalTab">
          <ul className="resp-tabs-list">
            <li> Men's</li>
            <li> Women's</li>
            <li> Bags</li>
            <li> Footwear</li>
          </ul>
          <div className="resp-tabs-container">
            <div className="tab1">
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m1} alt="" className="pro-image-front" />
                    <img src={m1} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Formal Blue Shirt</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$45.99</span>
                      <del>$69.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Formal Blue Shirt"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m2} alt="" className="pro-image-front" />
                    <img src={m2} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Gabi Full Sleeve Sweatshirt</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$45.99</span>
                      <del>$69.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Sweatshirt"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m3} alt="" className="pro-image-front" />
                    <img src={m3} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Dark Blue Track Pants</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$80.99</span>
                      <del>$89.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Dark Blue Track Pants"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m4} alt="" className="pro-image-front" />
                    <img src={m4} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Round Neck Black T-Shirt</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$190.99</span>
                      <del>$159.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Black T-Shirt"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m5} alt="" className="pro-image-front" />
                    <img src={m5} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Men's Black Jeans</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$60.99</span>
                      <del>$90.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Men's Black Jeans"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m7} alt="" className="pro-image-front" />
                    <img src={m7} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Analog Watch</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$160.99</span>
                      <del>$290.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Analog Watch"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m6} alt="" className="pro-image-front" />
                    <img src={m6} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Reversible Belt</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$30.99</span>
                      <del>$50.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Reversible Belt"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m8} alt="" className="pro-image-front" />
                    <img src={m8} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Party Men's Blazer</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$260.99</span>
                      <del>$390.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Party Men's Blazer"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>

            <div className="tab2">
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={w1} alt="" className="pro-image-front" />
                    <img src={w1} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">A-line Black Skirt</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$130.99</span>
                      <del>$189.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="A-line Black Skirt"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={w2} alt="" className="pro-image-front" />
                    <img src={w2} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Sleeveless Solid Blue Top</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$140.99</span>
                      <del>$189.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Sleeveless Solid Blue Top"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={w3} alt="" className="pro-image-front" />
                    <img src={w3} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Skinny Jeans</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$150.99</span>
                      <del>$189.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Skinny Jeans "
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={w4} alt="" className="pro-image-front" />
                    <img src={w4} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Black Basic Shorts</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$120.99</span>
                      <del>$189.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Black Basic Shorts"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={w5} alt="" className="pro-image-front" />
                    <img src={w5} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Pink Track Pants</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$220.99</span>
                      <del>$389.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Pink Track Pants"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={w6} alt="" className="pro-image-front" />
                    <img src={w6} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Analog Watch</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$320.99</span>
                      <del>$489.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Analog Watch"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={w7} alt="" className="pro-image-front" />
                    <img src={w7} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Ankle Length Socks</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$100.99</span>
                      <del>$159.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Ankle Length Socks"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={w8} alt="" className="pro-image-front" />
                    <img src={w8} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Reebok Women's Tights</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$130.99</span>
                      <del>$169.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Reebok Women's Tights"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="tab3">
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={b1} alt="" className="pro-image-front" />
                    <img src={b1} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Laptop Messenger Bag</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$140.99</span>
                      <del>$169.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value=" Laptop Messenger Bag"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={b2} alt="" className="pro-image-front" />
                    <img src={b2} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Puma Backpack</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$127.99</span>
                      <del>$169.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Puma Backpack"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={b3} alt="" className="pro-image-front" />
                    <img src={b3} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to=""> Laptop Backpack</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$120.99</span>
                      <del>$189.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value=" Laptop Backpack"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={b4} alt="" className="pro-image-front" />
                    <img src={b4} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Travel Duffel Bag </Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$190.99</span>
                      <del>$259.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Travel Duffel Bag "
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={b5} alt="" className="pro-image-front" />
                    <img src={b5} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to=""> Hand-held Bag </Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$190.99</span>
                      <del>$259.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value=" Hand-held Bag "
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={b6} alt="" className="pro-image-front" />
                    <img src={b6} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Butterflies Bag </Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$190.99</span>
                      <del>$259.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Butterflies Bag"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={b7} alt="" className="pro-image-front" />
                    <img
                      src="images/b7.jpg"
                      alt=""
                      className="pro-image-back"
                    />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Costa Swiss Bag </Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$290.99</span>
                      <del>$359.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Costa Swiss Bag"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={b8} alt="" className="pro-image-front" />
                    <img src={b8} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Noble Designs Bag </Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$120.99</span>
                      <del>$159.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Noble Designs Bag "
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="tab4">
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={s1} alt="" className="pro-image-front" />
                    <img src={s1} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Running Shoes</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$80.99</span>
                      <del>$89.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Running Shoes"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={s2} alt="" className="pro-image-front" />
                    <img src={s2} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Shoetopia Lace Up</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$90.99</span>
                      <del>$59.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Shoetopia Lace Up"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={s3} alt="" className="pro-image-front" />
                    <img src={s3} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Steemo Casuals(Black)</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$90.99</span>
                      <del>$59.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Steemo Casuals (Black)"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={s4} alt="" className="pro-image-front" />
                    <img src={s4} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Benetton Flip Flops</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$40.99</span>
                      <del>$99.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Benetton Flip Flops"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={s5} alt="" className="pro-image-front" />
                    <img src={s5} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Moonwalk Bellies </Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$80.99</span>
                      <del>$99.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Moonwalk Bellies"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={s6} alt="" className="pro-image-front" />
                    <img src={s6} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Aero Canvas Loafers </Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$120.99</span>
                      <del>$199.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Aero Canvas Loafers"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={s7} alt="" className="pro-image-front" />
                    <img src={s7} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Sparx Sporty Canvas Shoes</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$160.99</span>
                      <del>$199.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Sparx Sporty Canvas Shoes"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={s8} alt="" className="pro-image-front" />
                    <img src={s8} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to="" className="a-product-add-cart">
                          Quick View
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <Link to="">Women BLACK Heels</Link>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">$180.99</span>
                      <del>$199.71</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                      <form action="#" method="post">
                        <fieldset>
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="business" value=" " />
                          <input
                            type="hidden"
                            name="item_name"
                            value="Women BLACK Heels"
                          />
                          <input type="hidden" name="amount" value="30.99" />
                          <input
                            type="hidden"
                            name="discount_amount"
                            value="1.00"
                          />
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          />
                          <input type="hidden" name="return" value=" " />
                          <input type="hidden" name="cancel_return" value=" " />
                          <input
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            className="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Offers() {
  return (
    <>
      <div className="sale-w3ls">
        <div className="container">
          <h6>
            We Offer Flat <span>40%</span> Discount
          </h6>

          <Link className="hvr-outline-out button2" to="">
            Shop Now{" "}
          </Link>
        </div>
      </div>

      <div className="coupons">
        <div className="coupons-grids text-center">
          <div className="w3layouts_mail_grid">
            <div className="col-md-3 w3layouts_mail_grid_left">
              <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                <i className="fa fa-truck" aria-hidden="true"></i>
              </div>
              <div className="w3layouts_mail_grid_left2">
                <h3>FREE SHIPPING</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="col-md-3 w3layouts_mail_grid_left">
              <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                <i className="fa fa-headphones" aria-hidden="true"></i>
              </div>
              <div className="w3layouts_mail_grid_left2">
                <h3>24/7 SUPPORT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="col-md-3 w3layouts_mail_grid_left">
              <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <div className="w3layouts_mail_grid_left2">
                <h3>MONEY BACK GUARANTEE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="col-md-3 w3layouts_mail_grid_left">
              <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                <i className="fa fa-gift" aria-hidden="true"></i>
              </div>
              <div className="w3layouts_mail_grid_left2">
                <h3>FREE GIFT COUPONS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <div className="footer_agile_inner_info_w3l">
        <div className="col-md-3 footer-left">
          <h2>
            <Link to="">
              <span>E</span>lite Shoppy{" "}
            </Link>
          </h2>
          <p>
            Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora.
          </p>
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
                  <i className="fa fa-aedin" aria-hidden="true"></i>
                </div>
                <div className="back">
                  <i className="fa fa-aedin" aria-hidden="true"></i>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-9 footer-right">
          <div className="sign-grds">
            <div className="col-md-4 sign-gd">
              <h4>
                Our <span>Information</span>{" "}
              </h4>
              <ul>
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="">Men's Wear</Link>
                </li>
                <li>
                  <Link to="">Women's wear</Link>
                </li>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">Short Codes</Link>
                </li>
                <li>
                  <Link to="">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-5 sign-gd-two">
              <h4>
                Store <span>Information</span>
              </h4>
              <div className="w3-address">
                <div className="w3-address-grid">
                  <div className="w3-address-left">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="w3-address-right">
                    <h6>Phone Number</h6>
                    <p>+1 234 567 8901</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="w3-address-grid">
                  <div className="w3-address-left">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="w3-address-right">
                    <h6>Email Address</h6>
                    <p>
                      Email :<Link to=""> mail@example.com</Link>
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="w3-address-grid">
                  <div className="w3-address-left">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="w3-address-right">
                    <h6>Location</h6>
                    <p>Broome St, NY 10002,California, USA.</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 sign-gd flickr-post">
              <h4>
                Flickr <span>Posts</span>
              </h4>
              <ul>
                <li>
                  <Link to="">
                    <img src={t1} alt=" " className="img-responsive" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src={t2} alt=" " className="img-responsive" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src={t3} alt=" " className="img-responsive" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src={t4} alt=" " className="img-responsive" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src={t1} alt=" " className="img-responsive" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src={t2} alt=" " className="img-responsive" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src={t3} alt=" " className="img-responsive" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src={t2} alt=" " className="img-responsive" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src={t4} alt=" " className="img-responsive" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="agile_newsletter_footer">
          <div className="col-sm-6 newsleft">
            <h3>SIGN UP FOR NEWSLETTER !</h3>
          </div>
          <div className="col-sm-6 newsright">
            <form action="#" method="post">
              <input
                type="email"
                placeholder="Enter your email..."
                name="email"
                required=""
              />
              <input type="submit" value="Submit" />
            </form>
          </div>

          <div className="clearfix"></div>
        </div>
        <p className="copy-right">
          &#169; 2022 Amco shoppy. All rights reserved | Design by{" "}
          <Link to="">Ahmed Adisa</Link>
        </p>
      </div>
    </div>
  );
}
