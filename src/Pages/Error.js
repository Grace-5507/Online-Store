import React from "react";
import classes from "../styles/error.module.css";

const Error = () => {
  return (
    <div>
      <div className={classes.header}>
        <img
          style={{ marginLeft: "8%" }}
          src={require("../Asset/images/BAMZI (1).png")}
          width="90px"
        />
      </div>
      <div style={{ display: "flex" }} className={classes.navbar}>
        <div className={classes.logo}>
          <h1>Page Not Found</h1>
          <div className={classes.first}>
            <div style={{ display: "flex" }}>
              <img
                style={{ marginLeft: "25%" }}
                className={classes.first}
                src={require("../Asset/images/Cart404.png")}
                width="500px"
              />

              <div className={classes.secc}>
                <p>
                  <span>
                    <img
                      src={require("../Asset/images/ErrorIcon.jpeg")}
                      width="18px"
                    />
                  </span>
                  oops!!! looks like the page you are lookinng for is not
                  available or is missing. Kindly contact us for any further
                  problem
                </p>
                <button type="submit" className={classes.registerbtn}>
                  Go back to Homepage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
