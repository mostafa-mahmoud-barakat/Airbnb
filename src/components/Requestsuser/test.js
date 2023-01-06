import React from "react";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//check availability
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
//check availability
import { alpha, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// + & -
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector, useDispatch } from "react-redux";
import { changeGuests } from "../../Redux/Actions/AllActions";
import { useTranslation } from "react-i18next";
import { DateRange, DateRangePicker } from "react-date-range";
import { changeGuests2 } from './../../Redux/Actions/AllActions';

export default function Test() {
  const { t } = useTranslation();

  const guest = useSelector((state) => state.guests.guests);
  const dispatchg = useDispatch();

  // + & - 1
  const [count1, setCount1] = useState(guest["count1"]);

  const IncNum1 = () => {
    setCount1(count1 + 1);
  };
  const DecNum1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    } else {
      setCount1(0);
      alert("min limit reached");
    }
  };

  // + & - 2
  const [count2, setCount2] = useState(guest["count2"]);
  const IncNum2 = () => {
    setCount2(count2 + 1);
  };
  const DecNum2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
      document.getElementById("GuestsNo").innerText = `${count2} Adults`;
    } else {
      setCount2(0);
    }
  };
  // + & - 3
  const [count3, setCount3] = useState(guest["count3"]);
  const IncNum3 = () => {
    setCount3(count3 + 1);
  };
  const DecNum3 = () => {
    if (count3 > 0) {
      setCount3(count3 - 1);
    } else {
      setCount3(0);
    }
  };
  // + & - 4
  const [count4, setCount4] = useState(guest["count4"]);
  const IncNum4 = () => {
    setCount4(count4 + 1);
  };
  const DecNum4 = () => {
    if (count4 > 0) {
      setCount4(count4 - 1);
    } else {
      setCount4(0);
      alert("min limit reached");
    }
  };

  const addGuests = () => {
    if (count1 !== 0 || count2 !== 0 || count3 !== 0 || count4 !== 0) {
      const x4={"count1":count1,"count2":count2,"count3":count3,"count4":count4}
      console.log(x4);
      dispatchg(changeGuests(x4));
    }
  };

 
  return (
    <>
      <Grid item xs={6}>
        {/* <Box p={2}></Box> */}
        <Box>
          <PopupState
            // variant="popover"
            // popupId="demo-popup-popover"
          >
            {(popupState) => (
              <div>
                <Button {...bindTrigger(popupState)} className="fs-6" >{t("Edit")}</Button>
                <Popover
                  {...bindPopover(popupState)}  >
                  <Typography sx={{ p: 2 }}>
                    <Grid container>
                      <Grid item xs={7} s>
                        <Box>
                          <h4>Adults</h4>
                          <p>Age 13+</p>
                          <h4>Children</h4>
                          <p>Age 2-12</p>
                          <h4>Infants</h4>
                          <p>Under 2</p>
                          <h4>Pets</h4>
                          <p
                            style={{
                              textDecoration:"underLine",
                              fontSize:"12px",
                            }}>Bringing a service animal?
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={5}>
                        <Box p={2}>
                          <Grid container style={{ marginBottom: "50px" }}>
                            <Grid item xs={5}>
                              <Box>
                                <Button onClick={IncNum1}>
                                  <AddIcon size="small" />
                                </Button>
                              </Box>
                            </Grid>
                            <Grid item xs={2} s>
                              <Box style={{ position: "relative" }} p={2}>
                                <p
                                  style={{
                                    position: "absolute",
                                    right: "10%",
                                    top: "-20%",
                                  }}
                                >
                                  {count1}
                                </p>
                              </Box>
                            </Grid>
                            <Grid item xs={5} s>
                              <Box>
                                <Button onClick={DecNum1}>
                                  <RemoveIcon size="small" />
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>

                          <Grid container style={{ marginBottom: "50px" }}>
                            <Grid item xs={5} s>
                              <Box>
                                <Button onClick={IncNum2}>
                                  <AddIcon size="small" />
                                </Button>
                              </Box>
                            </Grid>
                            <Grid item xs={2} s>
                              <Box style={{ position: "relative" }} p={2}>
                                <p
                                  style={{
                                    position: "absolute",
                                    right: "10%",
                                    top: "-20%",
                                  }}
                                >
                                  {count2}
                                </p>
                              </Box>
                            </Grid>
                            <Grid item xs={5} s>
                              <Box>
                                <Button onClick={DecNum2}>
                                  <RemoveIcon size="small" />
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>

                          <Grid container style={{ marginBottom: "50px" }}>
                            <Grid item xs={5} s>
                              <Box>
                                <Button onClick={IncNum3}>
                                  <AddIcon size="small" />
                                </Button>
                              </Box>
                            </Grid>
                            <Grid item xs={2} s>
                              <Box style={{ position: "relative" }} p={2}>
                                <p
                                  style={{
                                    position: "absolute",
                                    right: "10%",
                                    top: "-20%",
                                  }}
                                >
                                  {count3}
                                </p>
                              </Box>
                            </Grid>
                            <Grid item xs={5} s>
                              <Box>
                                <Button onClick={DecNum3}>
                                  <RemoveIcon size="small" />
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>

                          <Grid container>
                            <Grid item xs={5} s>
                              <Box>
                                <Button onClick={IncNum4}>
                                  <AddIcon size="small" />
                                </Button>
                              </Box>
                            </Grid>
                            <Grid item xs={2} s>
                              <Box style={{ position: "relative" }} p={2}>
                                <p
                                  style={{
                                    position: "absolute",
                                    right: "10%",
                                    top: "-20%",
                                  }}
                                >
                                  {count4}
                                </p>
                              </Box>
                            </Grid>
                            <Grid item xs={5} s>
                              <Box>
                                <Button onClick={DecNum4}>
                                  <RemoveIcon size="small" />
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>

                    <button
                      type="Submit"
                      value="Submit"
                      style={{
                        color:"white",
                        backgroundColor:"black",
                        borderRadius:"7px",
                        right: "7%",
                      }}
                      onClick={addGuests}
                    >{t("save")}</button>
                  </Typography>
                </Popover>
              </div>
            )}
          </PopupState>
        </Box>
      </Grid>
    </>
  );
}
const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();
  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  // margin: {
  //   margin: theme.spacing(0),
  // },
}));
// edit dates
export function Testtwo() {
  const { t } = useTranslation();
  const datareq=useSelector((state)=>state.requestDetail.details)
  const dates = useSelector((state) => state.guests.dates);
  const guest = useSelector((state) => state.guests.dates);
  const dispatchg = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  var Difference_In_Time = dates.endDate.getTime() - dates.startDate.getTime();
  
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let service  = parseInt(eval((datareq.price * Difference_In_Days)*0.14).toFixed(0));
    let total =service+(datareq.price * Difference_In_Days);
  
  const addDate = () => {
    if (startDate !== 0 || endDate !== 0 ) {
      const Date={"endDate":endDate,"startDate":startDate,"Difference_In_Days":Difference_In_Days,"service":service,"total":total}
      dispatchg(changeGuests2(Date));
    }
  };
  function handelSelect(ranges) {
    var x1 = setStartDate(ranges.selection.startDate);
    var x2 = setEndDate(ranges.selection.endDate);
    document.getElementById("fixedP").innerText = "";
    document.getElementById(
      "selecteddates"
    ).innerText = `start date: ${ranges.selection.startDate.toDateString()} end date: ${ranges.selection.endDate.toDateString()}`;
  
  }

  const SelectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const clear = () => {
    setStartDate("");
    setEndDate("");
    document.getElementById("selecteddates").innerText = "";
   
  };
 
  return (
    <>
     

      <Box>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <Button
              className="fs-6" 
                // style={{
                 
                // }}
                {...bindTrigger(popupState)}
              >{t("Edit")}
              </Button>

              <Popover
                {...bindPopover(popupState)}
             
              >
                <Typography sx={{ p: 2 }}>
                  <Grid container>
                    <Grid item xs={5} s>
                      <Box p={2}>
                        <h3>Select dates</h3>
                        <p id="selecteddates"></p>
                        <p id="fixedP">
                          Add your travel dates for exact pricing
                        </p>
                      </Box>
                    </Grid>
                  
                  </Grid>

                  <div>
                    
                    <DateRangePicker
                      ranges={[SelectionRange]}
                      onChange={handelSelect}
                    />
                  </div>
                  <Button
                    onClick={clear}
                    style={{
                      position:"absolute",
                      right: "30px",
                      color: "black",
                      textDecoration: "underLine",
                    }}
                  >
                    CLEAR DATES
                  </Button>
                  <button
                      type="Submit"
                      value="Submit"
                      className="btn"
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        borderRadius: "10px",
                        right: "7%",
                      }}
                      onClick={addDate}
                    >
                      {t("save")}
                    </button>
                </Typography>
              </Popover>
            </div>
          )}
        </PopupState>
           </Box>
    </>
  );
}
