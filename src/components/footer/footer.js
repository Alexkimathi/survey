import React from "react";
import logo from "../../img/map.jpeg";
import "./footer.css";
import data from "./data";
import { AiFillPhone } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import {IoLocation} from ""

function Footer() {
  return (
    <div className="footer">
      <div className="left__side">
        <div className="logo">
          <img src={logo} alt="food-1" className="footer__logo" />
          <h2 className="logo__text">Point-Map Solutions</h2>
        </div>
        <hr className="line" />
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="footer__socials">
          <a>
            <AiFillPhone /> <span>0708353465</span>{" "}
          </a>
          <a>
            <MdAttachEmail /> <span>0708353465</span>{" "}
          </a>
          <a>
            <AiFillClockCircle />{" "}
            <span>
              Working Hours Monday - Friday: 8 AM - 5 PM Saturday: 9 AM - 1 PM
              Sunday: Closed{" "}
            </span>{" "}
          </a>
        </div>
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>About-us</li>
          <li>Contact-us </li>
          <li>FAQ</li>
        </ul>
      </div>



      <div>
        <div className="footer__socials">
          <a>
            <AiFillPhone /> <span>0708353465</span>{" "}
          </a>
       
        </div>
      </div>

    </div>
  );
}

export default Footer;
