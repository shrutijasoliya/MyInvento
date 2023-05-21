import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <h1>MyInvento</h1>
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <br/>
          <p>
            This application is a simple inventory management system. It
            interacts with an API to access a live database so the information
            modified, created, or deleted on this application will impact the
            database. Feel free to mess around with the application in anyway
            you feel like. Using the above links in the navigation bar will
            allow you to interact with the various functions of this
            application. What each page does is described below.
            <br />
            <br />
            <b>Inventory:</b> Shows the name of items in inventory and their
            current quantity.
            <br />
            <br />
            <b>Restock/Use:</b> Change quantity of items in inventory by
            entering the amount and pressing the restock/use buttons.
            <br />
            <br />
            <b>Create Items:</b> Fill in the respective item information and
            press the create button to add new items to the inventory list.
            <br />
            <br />
            <b>Remove Items:</b> Remove items in the inventory list by selecting
            the delete button next to the item in the table.
            <br />
            <br />
            <b>Note*</b> When there are more than 5 items in the inventory list,
            every table will have pagination enabled allowing you to use the
            previous/next buttons to view the inventory list in 5 item
            increments.
          </p>
        </div>

        <div className="hero-image">
          <img
            src={heroImg}
            style={{ height: 350, width: 500, marginLeft: 50 }}
            alt="Inventory"
          />
        </div>
      </section>

      <div class="container-fluid p-5">
        <div
          className="mx-auto my-3 "
          style={{ color: "black", textAlign: "center" }}
        >
          <h3
            className="title"
            style={{
              margin: "12px 0px 20px 12px",
              fontSize: "30px",
              color: "black",
            }}
          >About Us
          </h3>
        </div>
        <div style={{ flexDirection: "row" }}>
          <center>
            <h4 style={{ color: "grey" }}>Shruti Jasoliya</h4>
            <h4 style={{ color: "grey" }}>Jensi Khunt</h4>
            <h4 style={{ color: "grey" }}>Aesha Jodhani</h4>
            <h4 style={{ color: "grey" }}>Prishita Patel</h4>
          </center>
        </div>
      </div>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
