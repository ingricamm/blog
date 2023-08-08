import React from "react";
import logo from "./img/Logo-nombre.png";
import { Link } from "react-router-dom";
import "./style/Footer.css";

const navigation = {
  legal: [
    { name: "About", href: "#" },
    { name: "Legal", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
 
  ],
 
  social: [

    {
      name: "Twitter",
      href: "#",
      icon: () => <i className="fa fa-twitter"> </i>,
    },
    {
      name: "Linkedin",
      href: "#",
      icon: () => <i className="fa fa-linkedin"></i>,
    },
    {
      name: "GitHub",
      href: "#",
      icon: () => <i className="fa fa-github"></i>,
    },
  ],
};

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="App-footer">
        <div>
        <img src={logo} alt="logo" />
        </div>
        <div className="ppal-footer">
          
          <ul>
            {navigation.legal.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className="footer-content">
       
        <div className="icons">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href}>
             
              <i>
             
                <item.icon />
              </i>
            </Link>
          ))}
        </div>
        <div className="App-footer-content">terminos y condiciones</div>
      </div>
      </div>
    </>
  );
}

export default Footer;
