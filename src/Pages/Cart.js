import React from "react";
import classes from "../styles/Cart.module.css";

import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaRecycle } from "react-icons/fa";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { IoIosCart } from "react-icons/io";
import { BiHeart } from "react-icons/bi";

const Cart = () => {
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
              <h3>Shopping Cart(4)</h3>

              <div className={classes.shop}>
                <div className={classes.shopIcon}>
                  <input type="checkbox" id="select" name="select" />

                  <label htmlfor="select"> Select All</label>
                </div>
                <span className={classes.shopIcon}>
                  <RiDeleteBinLine size={24} /> Delete All
                </span>
              </div>
            </div>

            <div className={classes.evax}>
              <input type="checkbox" id="evax" name="evax" value="Evax" />
              <label className={classes.evaxLabel} htmlfor="evax">
                <SiHomeassistantcommunitystore size={24} />
                Evax Electronic Store
              </label>
            </div>

            <div className={classes.cartpage}>
              <div className={classes.cartinfo}>
                <div className={classes.imgcontainer}>
                  <img
                    src={require("../Asset/images/M4-image.png")}
                    alt=""
                    width="100px"
                  />
                </div>
                <div className={classes.evax}></div>
                <div className={classes.first}>
                  <p style={{ color: "black", marginLeft: "0px" }}>
                    Apple Watch 2.0 Ipv4
                  </p>
                  <div style={{ display: "flex" }}>
                    <h1 style={{ marginRight: "30%" }}>
                      Color <input type="color" value="red" />
                    </h1>
                    <h1>
                      Size
                      <select name="size" id="size">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </h1>
                  </div>
                  <small>Price: US $399</small>
                  <h2>
                    Shipping US $18.99 all Express Delivery. <br />
                    Estimated Delivery Time 25-30 Days.
                  </h2>
                </div>
                <div className={classes.second}>
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: "24px" }}>
                      <RiDeleteBinLine size={24} />
                    </div>
                    <FaRegHeart size={24} />
                  </div>
                  <h1 style={{ padding: "30%" }}>
                    QTY <input type="number" value="1" />
                  </h1>
                </div>
              </div>

              <div className={classes.cartinfo}>
                <div className={classes.imgcontainer}>
                  <img
                    src={require("../Asset/images/M4-image2.png")}
                    alt=""
                    width="150px"
                  />
                </div>
                <div className={classes.first}>
                  <p style={{ color: "black", marginLeft: "0px" }}>
                    Apple Watch 2.0 Ipv4
                  </p>
                  <div style={{ display: "flex" }}>
                    <h1 style={{ marginRight: "30%" }}>
                      Color <input type="color" value="blue" />
                    </h1>
                    <h1>
                      Size
                      <select name="size" id="size">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </h1>
                  </div>
                  <small>Price: US $399</small>
                  <h2>
                    Shipping US $18.99 all Express Delivery. <br />
                    Estimated Delivery Time 25-30 Days.
                  </h2>
                </div>
                <div className={classes.second}>
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: "24px" }}>
                      <RiDeleteBinLine size={24} />
                    </div>

                    <FaRegHeart size={24} />
                  </div>

                  <h1 style={{ padding: "30%" }}>
                    QTY <input type="number" value="1" />
                  </h1>
                </div>
              </div>

              <div className={classes.lola}>
                <input type="checkbox" id="lola" name="lola" value="Lola" />
                <label className={classes.lolaLabel} htmlfor="evax">
                  <SiHomeassistantcommunitystore size={24} />
                  Lola Saloon and Spa
                </label>
              </div>

              <div className={classes.cartpage}>
                <div className={classes.cartinfo}>
                  <div className={classes.imgcontainer}>
                    <img
                      src={require("../Asset/images/img.png")}
                      alt=""
                      width="200px"
                    />
                  </div>
                  <div className={classes.first}>
                    <p style={{ color: "black", marginLeft: "0px" }}>
                      Weaving Fibrex set of wigs 12ccm length Silk
                    </p>
                    <div style={{ display: "flex" }}>
                      <h1 style={{ marginRight: "30%" }}>
                        Length <input type="number" value="12cm - 16cm" />
                      </h1>
                      <h1>
                        Texture
                        <select name="texture" id="texture">
                          <option value="F">Fibre</option>
                          <option value="S">Silk</option>
                          <option value="H">Human Hair</option>
                        </select>
                      </h1>
                    </div>
                    <small>Price: US $399</small>
                    <h2>
                      Shipping US $18.99 all Express Delivery. <br />
                      Estimated Delivery Time 25-30 Days.
                    </h2>
                  </div>
                  <div className={classes.second}>
                    <div style={{ display: "flex" }}>
                      <div style={{ paddingRight: "24px" }}>
                        <RiDeleteBinLine size={24} />
                      </div>
                      <FaRegHeart size={24} />
                    </div>
                    <h1 style={{ padding: "30%" }}>
                      QTY <input type="number" value="1" />
                    </h1>
                  </div>
                </div>
              </div>
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

                <div className={classes.orderTotal}>
                  <span>Total</span>
                  <span>$19.00</span>
                </div>
              </div>
              <button type="submit" className={classes.buybtn}>
                Buy(4)
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
export default Cart;
