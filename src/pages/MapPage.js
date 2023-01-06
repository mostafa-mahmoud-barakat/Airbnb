import React from 'react';
import MainCard from "../components/card";
import Header from "../components/Header";
import OptionsTab from "../components/OptionsTab";
import Footer from "../components/Footer";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Fab from '@mui/material/Fab';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { Link } from "react-router-dom";


import { MapContainer, TileLayer, useMap, Marker, Popup,useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';

import { useState} from "react";
import { useTranslation } from 'react-i18next';

function LocationMarker() {
  const {t}=useTranslation();
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
      click() {
          map.locate()
      },
      locationfound(e) {
          setPosition(e.latlng)
          map.flyTo(e.latlng, map.getZoom())
      },
  })

  return position === null ? null : (
      <Marker position={position} removable editable icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
          <Popup>{t("you are here")}</Popup>
      </Marker>
  )
}


export default function MapPage() {
  const {t}=useTranslation();

 return (
    
    <React.Fragment>
      <CssBaseline />

      <Box
          sx={{
            position: "sticky",
            top: "0",
            backgroundColor: "white",
            zIndex: 90,
          }}
        >
          <Header />
          <OptionsTab />
        </Box>
      
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        
        
         
          <Box sx={{display:'flex', justifyContent:'center', width:'100%', zIndex:1}}>
        <MapContainer center={[52.520008, 13.404954]} zoom={4} scrollWheelZoom={false}>
           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
           <Marker position={[52.520008, 13.404954]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
               <Popup>
               <MainCard  sx={{ height:'50px' }}/>
               </Popup>
           </Marker>

           <Marker position={[48.856613, -2.352222]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
               <Popup>
               <MainCard  sx={{ height:'50px' }}/>
               </Popup>
           </Marker>

           <Marker position={[41.902782, 12.496365]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
               <Popup>
               <MainCard  sx={{ height:'50px' }}/>
               </Popup>
           </Marker>

           
           <LocationMarker />

       </MapContainer>
       </Box>
            <Box  sx={{   m: 1,  }}
            >
          <Link to={"/"}>  <Fab variant="extended" style={{backgroundColor:'#222222', color:'white', zIndex:50, position:'fixed', bottom:'20%', right:'48%',}}>
        <FormatListBulletedOutlinedIcon sx={{ mr: 1  }} />
        {t("showlist")}
      </Fab> </Link>
              </Box>          
        </Box>
        
    </React.Fragment>
    
  )
}
