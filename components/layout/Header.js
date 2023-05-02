import Link from "next/link";
import style from "./Header.module.css";
import { useEffect } from "react";

const Header = ({ length }) => {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.querySelector("#header").style.opacity = ".5"
      } else {
        document.querySelector("#header").style.opacity = "1"
      }
    })
  })

  return (
    <div className={style.header} id="header">
      <div>
        <Link className={style.a} href="/">
          Products <span> {length}</span>
        </Link>
      </div>
      <div>
        <Link className={style.a} href="/add-new-product">
          Add New Product
        </Link>
      </div>
    </div>
  );
};

export default Header;
