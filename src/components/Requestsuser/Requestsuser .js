import React from "react";
import "./Request .css";
import { useTranslation } from "react-i18next";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Link } from "react-router-dom";
import FooterChangeLang from "./footerchangelang";
import PayPalC from "./paypal";
import { useSelector } from "react-redux";
import LogInPaypal from "./loginpaypal";
import Test, { Testtwo } from "./test";
import { db } from './../../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

function Requestsuser() {
  const guest = useSelector((state) => state.guests.guests);
  const dates = useSelector((state) => state.guests.dates);
const datareq=useSelector((state)=>state.requestDetail.details)
let usr = useSelector((state)=>state.userData.info)

const total=parseInt(datareq.price*dates.Difference_In_Days)

  const { t } = useTranslation();

  const uplod = async()=>{
    const dos = doc(db , "users" , usr.id)
        const newDat = {reservsion : usr.reservsion.concat(datareq)}
         await updateDoc(dos,newDat)
        
  }
  // const addReservData = (e)=>{


  //   uplod()

  // }
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"}>
            <div className="d-flex ">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Airbnb homepage"
                role="img"
                focusable="false"
                width={34}
                className="logo"
                fill="#FF385C"
              >
                <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path>
              </svg>
              <h3>airbnb</h3>
            </div>
          </Link>
        </div>
      </nav>

      <div className="container d-flex flex-row">
        <div className="col-lg-12">
          <div className=" col-12 d-flex flex-row  justify-content-start flex align-items-center col-lg-6">
            <div>
              <Link to={"/details"}>
                <button className="btn rounded-5 me-3 ">
                  <ArrowBackIosNewIcon sx={{ height: 15, width: 15 }} />
                </button>
              </Link>
            </div>
            <h2>{t("paytitle")}</h2>
          </div>

          <div className="row col-12 justify-content-between mt-5">
            <div className=" col-md-6 mb-3 me-5">
              <h4>{t("trap")}</h4>
              <div>
                <div className="my-4 ">
                  <h5 className="text-start">{t("dates")}</h5>
                  <span className="text-start">{dates["endDate"].toLocaleDateString()} _ {dates["startDate"].toLocaleDateString()} </span>
                  <h5 className=""><Testtwo/></h5>
                </div>
                <div>
                  <h5 className="text-start">{t("GUESTS")}</h5>
                  <span className="text-start" id="GuestsNo">
                    {guest["count1"]}
                    {t("GUEST")},{guest["count2"]} children {guest["count3"]}Infants,
                    {guest["count4"]} Pets
                  </span><h5 className=""><Test /></h5>
                </div>
                <hr/>
              </div>
              <div>
                <h4>{t("Pay with")}</h4>
                {/* <PaypalC /> */}
                <PayPalC/>
                {/* <LogInPaypal /> */}
                <hr />
              </div>
              <form className="row g-3" >
                <div>
                  <h4>{t("required")}</h4>
                  <h6>{t("message")}</h6>
                  <p>{t("let")}</p>
                </div>
                <div className="">
                  <label htmlFor="validationDefault05" className="form-label">
                    <div className="row g-0">
                      <div className="col-1 me-3">
                        <img
                          src={datareq.Url}
                          className="img-fluid rounded-circle"
                          alt="..."
                        />
                      </div>
                      <div className="col-10">
                        <div className="card-body">
                          <h5 className="card-title">{datareq.title}</h5>
                          {/* <small className="card-text">{t("joined")}2020</small> */}
                        </div>
                      </div>
                    </div>
                  </label>
                  <textarea
                    rows="4"
                    cols="5"
                    className="form-control"
                    id="validationDefault05"
                    required
                  ></textarea>
                </div>
                <hr />
                <div>
                  <h4>{t("cancellationpolicy")}</h4>
                  <h6>{t("freeancellation")}</h6>
                  <small>{t("cancel")}</small>
                  <small
                    className="h6 text-decoration-underline "
                    data-bs-toggle="modal"
                    data-bs-target="#cancellationpolicy"
                  >
                    {t("buttonLearn")}
                  </small>
                  <hr />
                </div>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="cancellationpolicy"
                  tabIndex="-1"
                  aria-labelledby="cancellationpolicyLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <button
                          type="button"
                          className="btn-close mb-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>

                        <h4
                          className="modal-title mb-5"
                          id="cancellationpolicyLabel"
                        >
                          {t("cancellationpolicy")}
                        </h4>
                        <h5>{t("cancel_by")}</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1">
                    <PendingActionsIcon
                      style={{ color: "#FF385C", fontSize: "30" }}
                    />
                  </div>
                  <div className="col-11">
                    <p className="h6">{t("accepts")}</p>
                    <p>{t("charged")}</p>
                  </div>
                  <hr />
                </div>
                {/* button req user */}
                
              </form>
              <div className="col-12">
                  <button
                    type="btn button"
                    className="btn btnhost my-5 px-4 py-2"
                    onClick={uplod}
                  >
                    {t("paytitle")}
                  </button>
                </div>
              <div></div>
            </div>
            <div className="col-md-5 ms-4 my-5">
              <div className=" border position-sticky top-0 rounded-4 d-flex  flex-column p-4">
                <div className="card mb-3 border-0" style={{ maxWidth: "140" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={datareq.Url}
                        className="rounded-3 img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <small className="text-muted">
                        {datareq.title}{" "}
                        </small>
                        <p className="card-text">
                        {datareq.address}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            4.86(14 {t("reviews")} )
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                <div>
                  <p>
                    {t("protected")}
                    <b>
                      <span style={{ color: "#FF385C" }}> Air</span>Cover
                    </b>
                  </p>
                  <hr />
                </div>

                <h5>{t("pricedetails")}</h5>
                <div className="row">
                  <div className="col-9">
                    <p> $ <span>{t(datareq.price)} x </span>
                    <span> {dates.Difference_In_Days}</span>
                    {t("nights")}</p>
                    <p>{t("servicefee")}</p>
                    {/* <p>{t("taxes")}</p> */}
                  </div>
                  <div className="col-3">
                    <p>$ {total}</p>
                    <p>$ {dates.service}</p>
                    {/* <p>$132.62</p> */}
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-9">
                    <h6>{t("totalp")} (USD)</h6>
                  </div>
                  <div className="col-3">
                    <p>$ {dates.total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterChangeLang />
    </>
  );
}
export default Requestsuser;
