import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

export const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="box">
                    <p>Desenvolvido com <img src="../images/heart-regular.svg" alt=""/> por Nayla Hilana | Oracle T6</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
