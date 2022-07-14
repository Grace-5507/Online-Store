import React from "react";
import classes from "../styles/prelaunch.module.css";

const Prelaunch = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.header}>
          <div style={{ display: "flex" }} className={classes.navbar}>
            <div className={classes.logo}>
              <img
                src={require("../Asset/images/BAMZI (1).png")}
                width="130px"
              />
            </div>

            <nav>
              <ul>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <main className={classes.content}>
          <div className={classes.ready}>
            <h1>Get Ready! Online stores coming through</h1>
            <p>
              Get awesome rewords and discounts.Be the first one to book your
              space in this awesome digital world. Join us on the train to
              greatness!
            </p>

            <form>
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="Enter Full Name"
                name="name"
                id="name"
                required
              />

              <div style={{ display: "flex", margin: "8px 0px" }}>
                <div style={{ width: "50%" }}>
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <label htmlFor="industry"></label>
                  <input
                    type="text"
                    placeholder="Enter Industry"
                    name="indusry"
                    id="industry"
                    required
                  />
                </div>
              </div>

              <div style={{ display: "flex", margin: "8px 0px" }}>
                <button type="submit" className={classes.buyerbtn}>
                  Buyer
                </button>
                <button type="submit" className={classes.sellerbtn}>
                  Seller
                </button>
              </div>

              <button type="submit" className={classes.registerbtn}>
                Book your reservation
              </button>
            </form>
          </div>
          <div className={classes.image}>
            <img src={require("../Asset/images/Mask.png")} width="400px" />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Prelaunch;
