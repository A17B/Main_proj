import React from "react";
import Style from "./nav.module.css";
import Logo from "./Logo";
import Menu from "./Menu";
import { Button } from "./Button";


const Navbar = () => {
  return (
    <section>
      <nav id={Style.nav}>
        <article>
          <div className={Style.logo}>
            <Logo/>
            </div>
          <div className={Style.menu}>
            <Menu/>
          </div>
          <div className={Style.btn}>
            <Button/>
          </div>
        </article>
      </nav>
    </section>
  );
};

export default Navbar;
