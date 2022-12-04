import React from "react";
import banner2 from "../images/banner2.jpg";
import banner5 from "../images/banner5.jpg";
import bb2 from "../images/bb2.jpg";
import m8 from "../images/m8.jpg";
import m7 from "../images/m7.jpg";
import s1 from "../images/s1.jpg";
import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.jpg";
import m5 from "../images/m5.jpg";
import m6 from "../images/m6.jpg";


export function ClothingBanner() {
  return (
    <>
      <div>
        <div className="page-head_agile_info_w3l">
          <div className="container">
            <h3>
              Men's <span>Wear </span>
            </h3>
            <div className="services-breadcrumb">
              <div className="agile_inner_breadcrumb">
                <ul className="w3_short">
                  <li>
                    <a href="index.html">Home</a>
                    <i>|</i>
                  </li>
                  <li>Men's Wear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ClothingBody() {
  return (
    <>
      <div>
        <div className="banner-bootom-w3-agileits">
          <div className="container">
            <div className="col-md-4 products-left">
              <div className="filter-price">
                <h3>
                  Filter By <span>Price</span>
                </h3>
                <ul className="dropdown-menu6">
                  <li>
                    <div id="slider-range"></div>
                    <input
                      type="text"
                      id="amount"
                      style={{
                        border: 0,
                        color: "#ffffff",
                        fontWeight: "normal",
                      }}
                    />
                  </li>
                </ul>
              </div>
              <div className="css-treeview">
                <h4>Categories</h4>
                <ul className="tree-list-pad">
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="defaultChecked"
                      id="item-0"
                    />
                    <label>
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Men's Wear
                    </label>
                    <ul>
                      <li>
                        <input type="checkbox" id="item-0-0" />
                        <label>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                          Ethnic Wear
                        </label>
                        <ul>
                          <li>
                            <a href="mens.html">Shirts</a>
                          </li>
                          <li>
                            <a href="mens.html">Caps</a>
                          </li>
                          <li>
                            <a href="mens.html">Shoes</a>
                          </li>
                          <li>
                            <a href="mens.html">Pants</a>
                          </li>
                          <li>
                            <a href="mens.html">SunGlasses</a>
                          </li>
                          <li>
                            <a href="mens.html">Trousers</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <input type="checkbox" id="item-0-1" />
                        <label>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Party Wear
                        </label>
                        <ul>
                          <li>
                            <a href="mens.html">Shirts</a>
                          </li>
                          <li>
                            <a href="mens.html">Caps</a>
                          </li>
                          <li>
                            <a href="mens.html">Shoes</a>
                          </li>
                          <li>
                            <a href="mens.html">Pants</a>
                          </li>
                          <li>
                            <a href="mens.html">SunGlasses</a>
                          </li>
                          <li>
                            <a href="mens.html">Trousers</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <input type="checkbox" id="item-0-2" />
                        <label>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Casual Wear
                        </label>
                        <ul>
                          <li>
                            <a href="mens.html">Shirts</a>
                          </li>
                          <li>
                            <a href="mens.html">Caps</a>
                          </li>
                          <li>
                            <a href="mens.html">Shoes</a>
                          </li>
                          <li>
                            <a href="mens.html">Pants</a>
                          </li>
                          <li>
                            <a href="mens.html">SunGlasses</a>
                          </li>
                          <li>
                            <a href="mens.html">Trousers</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="item-1"
                      defaultChecked="defaultChecked"
                    />
                    <label>
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Best Collections
                    </label>
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          defaultChecked="defaultChecked"
                          id="item-1-0"
                        />
                        <label>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>{" "}
                          New Arrivals
                        </label>
                        <ul>
                          <li>
                            <a href="mens.html">Shirts</a>
                          </li>
                          <li>
                            <a href="mens.html">Shoes</a>
                          </li>
                          <li>
                            <a href="mens.html">Pants</a>
                          </li>
                          <li>
                            <a href="mens.html">SunGlasses</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultChecked="defaultChecked"
                      id="item-2"
                    />
                    <label>
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Best Offers
                    </label>
                    <ul>
                      <li>
                        <input type="checkbox" id="item-2-0" />
                        <label>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Summer Discount Sales
                        </label>
                        <ul>
                          <li>
                            <a href="mens.html">Shirts</a>
                          </li>
                          <li>
                            <a href="mens.html">Shoes</a>
                          </li>
                          <li>
                            <a href="mens.html">Pants</a>
                          </li>
                          <li>
                            <a href="mens.html">SunGlasses</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <input type="checkbox" id="item-2-1" />
                        <label>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Exciting Offers
                        </label>
                        <ul>
                          <li>
                            <a href="mens.html">Shirts</a>
                          </li>
                          <li>
                            <a href="mens.html">Shoes</a>
                          </li>
                          <li>
                            <a href="mens.html">Pants</a>
                          </li>
                          <li>
                            <a href="mens.html">SunGlasses</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <input type="checkbox" id="item-2-2" />
                        <label>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Flat Discounts
                        </label>
                        <ul>
                          <li>
                            <a href="mens.html">Shirts</a>
                          </li>
                          <li>
                            <a href="mens.html">Shoes</a>
                          </li>
                          <li>
                            <a href="mens.html">Pants</a>
                          </li>
                          <li>
                            <a href="mens.html">SunGlasses</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="community-poll">
                <h4>Community Poll</h4>
                <div className="swit form">
                  <form>
                    <div className="check_box">
                      {" "}
                      <div className="radio">
                        {" "}
                        <label>
                          <input type="radio" name="radio" defaultChecked="" />
                          <i></i>More convenient for shipping and delivery
                        </label>{" "}
                      </div>
                    </div>
                    <div className="check_box">
                      {" "}
                      <div className="radio">
                        {" "}
                        <label>
                          <input type="radio" name="radio" />
                          <i></i>Lower Price
                        </label>{" "}
                      </div>
                    </div>
                    <div className="check_box">
                      {" "}
                      <div className="radio">
                        {" "}
                        <label>
                          <input type="radio" name="radio" />
                          <i></i>Track your item
                        </label>{" "}
                      </div>
                    </div>
                    <div className="check_box">
                      {" "}
                      <div className="radio">
                        {" "}
                        <label>
                          <input type="radio" name="radio" />
                          <i></i>Bigger Choice
                        </label>{" "}
                      </div>
                    </div>
                    <div className="check_box">
                      {" "}
                      <div className="radio">
                        {" "}
                        <label>
                          <input type="radio" name="radio" />
                          <i></i>More colors to choose
                        </label>{" "}
                      </div>
                    </div>
                    <div className="check_box">
                      {" "}
                      <div className="radio">
                        {" "}
                        <label>
                          <input type="radio" name="radio" />
                          <i></i>Secured Payment
                        </label>{" "}
                      </div>
                    </div>
                    <div className="check_box">
                      {" "}
                      <div className="radio">
                        {" "}
                        <label>
                          <input type="radio" name="radio" />
                          <i></i>Money back guaranteed
                        </label>{" "}
                      </div>
                    </div>
                    <div className="check_box">
                      {" "}
                      <div className="radio">
                        {" "}
                        <label>
                          <input type="radio" name="radio" />
                          <i></i>Others
                        </label>{" "}
                      </div>
                    </div>
                    <input type="submit" value="SEND" />
                  </form>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="col-md-8 products-right">
              <h5>
                Product <span>Compare(0)</span>
              </h5>
              <div className="sort-grid">
                <div className="sorting">
                  <h6>Sort By</h6>
                  <select id="country1" className="frm-field required sect">
                    <option value="null">Default</option>
                    <option value="null">Name(A - Z)</option>
                    <option value="null">Name(Z - A)</option>
                    <option value="null">Price(High - Low)</option>
                    <option value="null">Price(Low - High)</option>
                    <option value="null">Model(A - Z)</option>
                    <option value="null">Model(Z - A)</option>
                  </select>
                  <div className="clearfix"></div>
                </div>
                <div className="sorting">
                  <h6>Showing</h6>
                  <select id="country2" className="frm-field required sect">
                    <option value="null">7</option>
                    <option value="null">14</option>
                    <option value="null">28</option>
                    <option value="null">35</option>
                  </select>
                  <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="men-wear-top">
                <div id="top" className="callbacks_container">
                  <ul className="rslides" id="slider3">
                    <li>
                      <img className="img-responsive" src={banner2} alt=" " />
                    </li>
                    <li>
                      <img className="img-responsive" src={banner5} alt=" " />
                    </li>
                    <li>
                      <img className="img-responsive" src={banner2} alt=" " />
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="men-wear-bottom">
                <div className="col-sm-4 men-wear-left">
                  <img className="img-responsive" src={bb2} alt=" " />
                </div>
                <div className="col-sm-8 men-wear-right">
                  <h4>
                    Exclusive Men's <span>Collections</span>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.{" "}
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="col-md-4 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m8} alt="" className="pro-image-front" />
                    <img src={m8} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <a href="single.html">Party Men's Blazer</a>
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
              <div className="col-md-4 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={m7} alt="" className="pro-image-front" />
                    <img src={m7} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <a href="single.html">Analog Watch</a>
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
              <div className="col-md-4 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={s1} alt="" className="pro-image-front" />
                    <img src={s1} alt="" className="pro-image-back" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <a href="single.html">Running Shoes</a>
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

              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>

            <div class="single-pro">
              <div class="col-md-3 product-men">
                <div class="men-pro-item simpleCart_shelfItem">
                  <div class="men-thumb-item">
                    <img src={m1} alt="" class="pro-image-front" />
                    <img src={m1} alt="" class="pro-image-back" />
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span class="product-new-top">New</span>
                  </div>
                  <div class="item-info-product ">
                    <h4>
                      <a href="single.html">Formal Blue Shirt</a>
                    </h4>
                    <div class="info-product-price">
                      <span class="item_price">$45.99</span>
                      <del>$69.71</del>
                    </div>
                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                            class="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men">
                <div class="men-pro-item simpleCart_shelfItem">
                  <div class="men-thumb-item">
                    <img src={m2} alt="" class="pro-image-front" />
                    <img src={m2} alt="" class="pro-image-back" />
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span class="product-new-top">New</span>
                  </div>
                  <div class="item-info-product ">
                    <h4>
                      <a href="single.html">Gabi Full Sleeve Sweatshirt</a>
                    </h4>
                    <div class="info-product-price">
                      <span class="item_price">$45.99</span>
                      <del>$69.71</del>
                    </div>
                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                            class="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men">
                <div class="men-pro-item simpleCart_shelfItem">
                  <div class="men-thumb-item">
                    <img src={m3} alt="" class="pro-image-front" />
                    <img src={m3} alt="" class="pro-image-back" />
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span class="product-new-top">New</span>
                  </div>
                  <div class="item-info-product ">
                    <h4>
                      <a href="single.html">Dark Blue Track Pants</a>
                    </h4>
                    <div class="info-product-price">
                      <span class="item_price">$80.99</span>
                      <del>$89.71</del>
                    </div>
                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                            class="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men">
                <div class="men-pro-item simpleCart_shelfItem">
                  <div class="men-thumb-item">
                    <img src={m4} alt="" class="pro-image-front" />
                    <img src={m4} alt="" class="pro-image-back" />
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span class="product-new-top">New</span>
                  </div>
                  <div class="item-info-product ">
                    <h4>
                      <a href="single.html">Round Neck Black T-Shirt</a>
                    </h4>
                    <div class="info-product-price">
                      <span class="item_price">$190.99</span>
                      <del>$159.71</del>
                    </div>
                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                            class="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men">
                <div class="men-pro-item simpleCart_shelfItem">
                  <div class="men-thumb-item">
                    <img src={m5} alt="" class="pro-image-front" />
                    <img src={m5} alt="" class="pro-image-back" />
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span class="product-new-top">New</span>
                  </div>
                  <div class="item-info-product ">
                    <h4>
                      <a href="single.html">Men's Black Jeans</a>
                    </h4>
                    <div class="info-product-price">
                      <span class="item_price">$60.99</span>
                      <del>$90.71</del>
                    </div>
                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                            class="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men">
                <div class="men-pro-item simpleCart_shelfItem">
                  <div class="men-thumb-item">
                    <img src={m7} alt="" class="pro-image-front" />
                    <img src={m7} alt="" class="pro-image-back" />
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span class="product-new-top">New</span>
                  </div>
                  <div class="item-info-product ">
                    <h4>
                      <a href="single.html">Analog Watch</a>
                    </h4>
                    <div class="info-product-price">
                      <span class="item_price">$160.99</span>
                      <del>$290.71</del>
                    </div>
                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                            class="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men">
                <div class="men-pro-item simpleCart_shelfItem">
                  <div class="men-thumb-item">
                    <img src={m6} alt="" class="pro-image-front" />
                    <img src={m6} alt="" class="pro-image-back" />
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span class="product-new-top">New</span>
                  </div>
                  <div class="item-info-product ">
                    <h4>
                      <a href="single.html">Reversible Belt</a>
                    </h4>
                    <div class="info-product-price">
                      <span class="item_price">$30.99</span>
                      <del>$50.71</del>
                    </div>
                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                            class="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men">
                <div class="men-pro-item simpleCart_shelfItem">
                  <div class="men-thumb-item">
                    <img src={m8} alt="" class="pro-image-front" />
                    <img src={m8} alt="" class="pro-image-back" />
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                    <span class="product-new-top">New</span>
                  </div>
                  <div class="item-info-product ">
                    <h4>
                      <a href="single.html">Party Men's Blazer</a>
                    </h4>
                    <div class="info-product-price">
                      <span class="item_price">$260.99</span>
                      <del>$390.71</del>
                    </div>
                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                            class="button"
                          />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Coupon() {
  return (
    <>
      <div>
        <div class="coupons">
          <div class="coupons-grids text-center">
            <div class="w3layouts_mail_grid">
              <div class="col-md-3 w3layouts_mail_grid_left">
                <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                  <i class="fa fa-truck" aria-hidden="true"></i>
                </div>
                <div class="w3layouts_mail_grid_left2">
                  <h3>FREE SHIPPING</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div class="col-md-3 w3layouts_mail_grid_left">
                <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                  <i class="fa fa-headphones" aria-hidden="true"></i>
                </div>
                <div class="w3layouts_mail_grid_left2">
                  <h3>24/7 SUPPORT</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div class="col-md-3 w3layouts_mail_grid_left">
                <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                  <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </div>
                <div class="w3layouts_mail_grid_left2">
                  <h3>MONEY BACK GUARANTEE</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div class="col-md-3 w3layouts_mail_grid_left">
                <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                  <i class="fa fa-gift" aria-hidden="true"></i>
                </div>
                <div class="w3layouts_mail_grid_left2">
                  <h3>FREE GIFT COUPONS</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
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
