import React from "react";
import HeaderDet from "../components/header/headerdet";
import Home from "../components/home/home";
import UnderHome from "../components/underHome/underHome";
import UpperFooter from "../components/UperFooter/UperFooter";
import FooterDet from "../components/footer/Footerdet";
import LastFooter from "../components/lastFooter/lastFooter";

import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footerhostormore from './pagehost/footerhostormore';
import { useSelector } from 'react-redux';


export default function HostingDetails() {
  var dataDetails = useSelector((state)=>state.requestDetail.details);
  
  return (
    <>
      <Header />
      <Container>
        <Home />
        <UnderHome />
        <UpperFooter />
        {/* <FooterDet /> */}
      </Container>
      <Footerhostormore/>

      {/* <LastFooter /> */}
     
    </>
  );
}
