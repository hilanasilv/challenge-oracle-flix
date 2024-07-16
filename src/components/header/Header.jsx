import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
    const [Mobile, setMobile] = useState(false)
  return (
    <>
        <header>
            <div className="container flexSB">
                <nav className="flexSB">
                    <div className="logo">
                        <img src="./images/icons8-tv-50.png" alt="" />
                    </div>
                    <ul className= {Mobile ? "navMenu-list" : "flexSB"} onClick={() =>setMobile(false)}>
                        <Link to='/'>Home</Link>
                        <Link to='/series'>Séries</Link>
                        <Link to='/filmes'>Filmes</Link>
                        <Link to='/adicionar'>Adicionar</Link>
                    </ul>
                    <button className="toggle" onClick={() =>setMobile(!Mobile)}>
                       {Mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>} 
                    </button>
                </nav>
                <div className="account flexSB">
                    <i className="fa fa-search"></i>
                    <button>Adicionar</button>
                </div>
            </div>
        </header>
    </>
  )

}

export default Header
