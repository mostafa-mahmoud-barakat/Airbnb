import React from "react";
// import MainCard from "../components/card";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { FaSearch, FaRegHeart, FaRegUserCircle  } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Footer from "../components/Footer";


//bootstrap
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import "../components/cardStyle.css";
import { useTranslation } from 'react-i18next';
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { displayOnDesktop } from "../themes/commonStyles";


import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";






function LocationMarker() {

  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });



  

  return position === null ? null : (
    <Marker
      position={position}
      removable
      editable
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>You are here</Popup>
    </Marker>
  );
}
export default function SearchPage() {
  const data = useSelector((state) => state.allRequests.requests);

  return (
    <React.Fragment>
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <Box
              sx={{
                position: "sticky",
                top: "0",
                backgroundColor: "white",
                zIndex: 90,
                display: { xs: "none", md: "block" },
              }}
            >
              <Header />
            </Box>

            {/* MobileSearch  */}
            <Container maxWidth="xl" sx={{ mb: 3 }}>
              <Box
                sx={{
                  position: "fixed",
                  top: "0",
                  zIndex: 90,
                  my: 2,
                  display: { xs: "block", md: "none" },
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 400,
                    border: "1px solid #ccc",
                    borderRadius: 20,
                  }}
                >
                  <IconButton sx={{ p: "10px" }}>
                    <FaSearch />
                  </IconButton>
                  <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to?" />
                  <IconButton type="submit" sx={{ p: "10px" }}>
                    <VscSettings />
                  </IconButton>
                </Paper>
              </Box>
            </Container>

            <Box p={2}>
              <Grid container spacing={1}>
                <Grid item xs={8} sm={6}>
                  {data.map((dat, ky) => {
                    let userSerachAddress =
                      window.localStorage.getItem("searchPlace");
                    if (
                      dat.address
                        .toLowerCase()
                        .includes(userSerachAddress.toLowerCase())
                    ) {
                      return (
                        <Card
                          className=" border-0 d-flex flex-row p-2 "
                          key={ky}
                        >
                          <IconButton
                            size="large"
                            sx={{
                              width: 40,
                              position: "absolute",
                              top: 10,
                              left: 230,
                              zIndex: 5,
                            }}
                          >
                            <FavoriteBorderIcon
                              fontSize="inherit"
                              style={{ color: "white" }}
                            />
                          </IconButton>
                          <Carousel interval={50000}>
                            <Carousel.Item>
                              <img
                                className="d-block rounded  "
                                src={dat.Url}
                                alt="First slide"
                                width={300}
                                height={280}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block  rounded "
                                src={dat.Url2}
                                alt="Second slide"
                                width={300}
                                height={280}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block rounded  "
                                src={dat.Url3}
                                alt="third slide"
                                width={300}
                                height={280}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block rounded "
                                src={dat.Url4}
                                alt="forth slide"
                                width={300}
                                height={280}
                              />
                            </Carousel.Item>
                          </Carousel>

                          <Link
                            to={`/details/`}
                            style={{ textDecoration: "none" }}
                          >
                            <Card.Body className="text-muted">
                              <div className="d-flex flex-row justify-content-around text-black">
                                <Card.Title>{dat.address}</Card.Title>
                                <div>
                                  {" "}
                                  <StarIcon fontSize="inherit" /> 5.0
                                </div>
                              </div>
                              <div>3.200 kilometers away</div>
                              <div>Aug 29-sep 3</div>
                              <div>${dat.price} night</div>
                            </Card.Body>
                          </Link>
                        </Card>
                      );
                    }
                  })}
                </Grid>

                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      position: "fixed",
                    }}
                  >
                    <MapContainer
                      center={[40.520008, 45.404954]}
                      zoom={4}
                      scrollWheelZoom={false}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker
                        position={[52.520008, 13.404954]}
                        icon={
                          new Icon({
                            iconUrl: markerIconPng,
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                          })
                        }
                      >
                        
                      </Marker>

                      <Marker
                        position={[48.856613, -2.352222]}
                        icon={
                          new Icon({
                            iconUrl: markerIconPng,
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                          })
                        }
                      >
                        
                      </Marker>

                      <Marker
                        position={[41.902782, 12.496365]}
                        icon={
                          new Icon({
                            iconUrl: markerIconPng,
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                          })
                        }
                      >
                       
                      </Marker>

                      <LocationMarker />
                    </MapContainer>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Box sx={displayOnDesktop} >
          <Footer  />
        </Box>
      </Box>
    </React.Fragment>
  );
}
