import React from "react";
import "./Request .css";
import { useTranslation } from "react-i18next";
import Langs from "../lang/languages"
export default function FooterChangeLang(){
    const { t } = useTranslation();

    return<>
        <footer
        className="col-12 py-3 border-top"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="container d-lg-flex flex-warp flex-row lh-lg d-none ">
          <div className="col-7">
            <p>{t("copy")}</p>
          </div>
          <div className="col-5 d-flex justify-content-end">
            <div className="me-3"> <Langs/> </div>
            <div className="me-5">
              <a href={"/"}>$ USD</a>
            </div>
            <div className="fs-5 ">
              <i className="mx-3 fa fa-facebook-f"></i>
              <i className=" mx-3 fa fa-twitter"></i>
              <i className="mx-3 fa fa-instagram"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
}