import React from "react";
import classes from "../styles/checkout.module.css";

import { FaRecycle } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { IoIosCart } from "react-icons/io";
import { BiBox, BiHeart } from "react-icons/bi";

const Chechout = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.navbar}>
            <div className={classes.logo}>
              <img
                src={require("../Asset/images/BAMZI (1).png")}
                width="130px"
                alt=""
              />
            </div>

            <nav>
              <ul>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Stores</a>
                </li>

                <li>
                  <div style={{ width: "100%" }}>
                    <label htmlFor="search"></label>
                    <input
                      type="text"
                      placeholder="search anything"
                      name="search"
                      id="search"
                    />
                  </div>
                </li>

                <li>
                  <a className={classes.atag} href="">
                    <p>Wishlist </p>
                    <BiHeart />
                  </a>
                </li>
                <li>
                  <a className={classes.atag} href="">
                    <p>Cart</p> <IoIosCart />
                  </a>
                </li>
                <li>
                  <a className={classes.atag} href="">
                    <p>Account</p> <VscAccount />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={classes.main}>
          <div className={classes.shopping}>
            <div className={classes.shopHead}>
              <h3>Checkout</h3>
            </div>
            <div className={classes.shopinfo}>
              <p>Shopping Infomation</p>
            </div>
            <div className={classes.shopinfo}>
              Basic Info
              <form>
                <div style={{ display: "flex", margin: "8px 0px" }}>
                  <div style={{ width: "50%" }}>
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      required
                    />
                  </div>
                  <div style={{ width: "50%" }}>
                    <label htmlFor="phone"></label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="indusry"
                      id="phone"
                      required
                    />
                  </div>
                </div>
              </form>
              Adress
              <div style={{ display: "flex", margin: "8px 0px" }}>
                <div style={{ width: "50%" }}>
                  <label htmlFor="Street Adress"></label>
                  <input
                    type="text"
                    placeholder="Street Adress"
                    Street
                    Adress="Street Adress"
                    id="Street Adress"
                    required
                  />
                </div>

                <div style={{ width: "50%" }}>
                  <label htmlFor="state/region"></label>
                  <input
                    type="text"
                    placeholder="state/region"
                    name="indusry"
                    id="state/region"
                    required
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <label htmlFor="City"></label>
                  <input
                    type="text"
                    placeholder="City "
                    name="indusry"
                    id="City"
                    required
                  />
                </div>
              </div>
              <div style={{ display: "flex", margin: "8px 0px" }}>
                <div style={{ width: "50%" }}>
                  <label htmlFor="Country"></label>
                  <input
                    type="text"
                    placeholder="Country "
                    name="indusry"
                    id="Country"
                    required
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <label htmlFor="Zip code +"></label>
                  <input
                    type="text"
                    placeholder="Zip code + "
                    name="indusry"
                    id="Zip code +"
                    required
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  margin: "8px 0px",
                }}
              >
                <div style={{ width: "50%" }}>
                  <button type="Save" className={classes.savebtn}>
                    Save and Continue
                  </button>
                </div>
              </div>
              <input type="checkbox" id="save" name="save" value="save" />
              <label className={classes.save} htmlfor="save">
                set as default
              </label>
            </div>
            <div className={classes.shopinfo}>
              <p>Payment Method</p>
            </div>
            <div className={classes.Payment}>
              <div className={classes.cartinfo}>
                <div className={classes.paycontainer}>
                  <div style={{ display: "flex" }}>
                    <img
                      src={require("../Asset/images/img.png")}
                      alt=""
                      width="200px"
                    />
                    <img
                      src={require("../Asset/images/img.png")}
                      alt=""
                      width="200px"
                    />
                    <img
                      src={require("../Asset/images/img.png")}
                      alt=""
                      width="200px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.shopinfo}>
              <h3>Shopping Summary(4)</h3>
            </div>
          </div>

          <div className={classes.aside}>
            <div className={classes.summary}>
              <div className={classes.order}>
                <h1>Order Summary</h1>

                <div className={classes.orderText}>
                  <span>Shipping fee</span>
                  <span>$10.70</span>
                </div>

                <div className={classes.orderText}>
                  <span>Subtotal</span>
                  <span>$19.00</span>
                </div>
                <div>
                  <button type="Coupon Code" className={classes.couponbtn}>
                    Coupon Code
                  </button>
                  <FaRecycle size={24} className={classes.icon1} />
                </div>

                <div className={classes.orderTotal}>
                  <span>Total</span>
                  <span>$19.00</span>
                </div>
              </div>
              <button type="submit" className={classes.proceedbtn}>
                Proceed
              </button>
            </div>

            <div className={classes.secure}>
              <h3>SECURED PAY</h3>
              <p>
                Every Payments are secured with BAMZI and additional security is
                ensured with Money Guaranss
              </p>
              <div className={classes.secureIcons}>
                <FaRecycle size={24} className={classes.icon1} />
                <MdOutlineSecurity size={24} className={classes.icon2} />
                <AiOutlineSecurityScan size={24} className={classes.icon3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chechout;
