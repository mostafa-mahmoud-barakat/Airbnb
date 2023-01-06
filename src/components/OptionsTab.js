import React,{useState} from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// react icons
import { FaFilter } from "react-icons/fa";

//modal
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import ChartModal from "./chart";
import Divider from "@mui/material/Divider";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";


import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";

import Switch from '@mui/material/Switch';
import FormHelperText from '@mui/material/FormHelperText';


//tabs
import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { CatgoryAction } from "../Redux/Actions/AllActions";

 const locationsTab = [
  { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
  { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  px: 4,
  overflowY: "scroll",
  overflowX: "hidden",
  height: "75vh",
};

const buttonStyle = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "45%",
  fontSize: "16px",

  "&:focus": {
    backgroundColor: "black",
    color: "white",
  },
  "&:hover": {
    border: "1px solid black",
    backgroundColor: "white",
    color: "black",
  },
};

const OptionsTab = () => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [disoCat,setDispCat]=useState("Design")
  const dispatch = useDispatch()
  const found = (d)=>{
    setDispCat(d)
  }
  console.log(disoCat);
  dispatch(CatgoryAction(disoCat))

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label} onClick={()=>found(tab.label)} />;
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: "none", md: "block" },
            border: "1px solid #ddd",
            minWidth: 90,
            justifyContent: "space-between",
            borderRadius: 2,
            textTransform: "capitalize",
            py: 1,
            color: "theme.palette.text.primary",
          }}
          onClick={handleOpen}
        >
          <FaFilter /> 
          {t("filter")}
        </Button>
        
          {/* modal **********/}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
             <Box sx={style}> 
             <Box sx={{p:3, backgroundColor:'white', position:'sticky', top:0, zIndex:50}}>
             <Typography
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 20, textAlign:'center' }}
              >  Filters    </Typography>
              </Box>            
            
            <Box >
              <Typography
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 24 }}
              >
                Price Range
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                The average nightly price is $337
              </Typography>
              <ChartModal />
              <div className="MuiInput-root row py-3">
                <div className="col-md-6">
                  {" "}
                  <label style={{ fontWeight: "bold", paddingRight: 3 }}>
                    min price
                  </label>
                  <input
                    className="MuiInput-input p-2"
                    placeholder="min price"
                    value={"$ 10"}
                  />
                </div>

                <div className="col-md-6">
                  {" "}
                  <label style={{ fontWeight: "bold", paddingRight: 3 }}>
                    max price
                  </label>
                  <input
                    className="MuiInput-input  p-2"
                    placeholder="max price"
                    value={"$ 5400"}
                  />
                </div>
              </div>

              <Divider sx={{ py: 5 }} />

              <Box>
                <Typography
                  id="transition-modal-title"
                  variant="h3"
                  component="h2"
                  style={{ fontWeight: "bold", fontSize: 24 }}
                >
                  Type of place
                </Typography>

                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div className="col-md-6">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Entire Place"
                    />
                    <span
                      style={{
                        display: "block",
                        marginLeft: 40,
                        color: "gray",
                      }}
                    >
                      A place all to yourself
                    </span>
                  </div>

                  <div className="col-md-6">
                    {" "}
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Private room"
                    />
                    <span
                      style={{
                        display: "block",
                        marginLeft: 40,
                        color: "gray",
                      }}
                    >
                      Your own room in a home or a hotel, plus some shared
                      common spaces
                    </span>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Shared room"
                    />
                    <span
                      style={{
                        display: "block",
                        marginLeft: 40,
                        color: "gray",
                      }}
                    >
                      A sleeping space and common areas that may be shared with
                      others
                    </span>
                  </div>
                </FormGroup>
              </Box>

              <Divider sx={{ py: 5 }} />

              {/* rooms&beds *****/}
              <Box>
                <Typography
                  id="transition-modal-title"
                  variant="h3"
                  component="h2"
                  style={{ fontWeight: "bold", fontSize: 24 }}
                >
                  Rooms and beds
                </Typography>

                <Typography
                  variant="h3"
                  component="h2"
                  style={{ fontSize: 16, paddingTop: "20px" }}
                >
                  Bedrooms{" "}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" sx={buttonStyle}>
                    Any
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    1
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    2
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    3
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    4
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    5
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    6
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    7
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    8+
                  </Button>
                </Stack>

                <Typography
                  variant="h3"
                  component="h2"
                  style={{ fontSize: 16, paddingTop: "20px" }}
                >
                  Beds{" "}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" sx={buttonStyle}>
                    Any
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    1
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    2
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    3
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    4
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    5
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    6
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    7
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    8+
                  </Button>
                </Stack>

                <Typography
                  variant="h3"
                  component="h2"
                  style={{ fontSize: 16, paddingTop: "20px" }}
                >
                  Bathrooms{" "}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" sx={buttonStyle}>
                    Any
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    1
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    2
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    3
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    4
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    5
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    6
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    7
                  </Button>
                  <Button variant="contained" sx={buttonStyle}>
                    8+
                  </Button>
                </Stack>
              </Box>

              <Divider sx={{ py: 5 }} />

              {/* property type */}
              <Box>
                <Typography
                  id="transition-modal-title"
                  variant="h3"
                  component="h2"
                  style={{ fontWeight: "bold", fontSize: 24 }}
                  sx={{ py: 2 }}
                >
                  Property Type
                </Typography>
                <div className="container d-flex justify-content-around">
                  <div className="row ">
                    <button
                      className="col-md-4 p-3 text-center m-2"
                      style={{
                        width: "150px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                      }}
                    >
                      <HomeOutlinedIcon fontSize="large" />
                      <Typography>House </Typography>
                    </button>

                    <button
                      className="col-md-4 p-3 text-center m-2"
                      style={{
                        width: "150px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                      }}
                    >
                      <ApartmentOutlinedIcon fontSize="large" />
                      <Typography>Apartment </Typography>
                    </button>

                    <button
                      className="col-md-4 p-3 text-center m-2"
                      style={{
                        width: "150px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                      }}
                    >
                      <MapsHomeWorkOutlinedIcon fontSize="large" />
                      <Typography>Guesthouse </Typography>
                    </button>

                    <button
                      className="col-md-4 p-3 text-center m-2"
                      style={{
                        width: "150px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                      }}
                    >
                      <LocationCityOutlinedIcon fontSize="large" />
                      <Typography>Hotel </Typography>
                    </button>
                  </div>
                </div>
              </Box>

              <Divider sx={{ py: 5 }} />

              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 24 }}
                sx={{ py: 3 }}
              >
                Amenities
              </Typography>

              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 18 }}
              >
                Essentials
              </Typography>
              <Box sx={{ display: 'flex', justifyContent:'space-around' }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Wifi"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Washer"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Air conditioning"
                />
              </FormGroup>
              <FormGroup>
              <FormControlLabel
                  control={<Checkbox  />}
                  label="Kitchen"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Dryer"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Heating"
                />
              </FormGroup>
              </Box>

              <Divider sx={{ py: 5 }} />

              <Box>
              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 24 }}
                sx={{ py: 3 }}
              >
                Booking options
              </Typography>

              <FormGroup>
                 <FormControlLabel control={<Switch  />} label="Instant Book" />
                 <FormHelperText  style={{position: 'relative', left:'55px',bottom:'10px' ,paddingBottom:'10px'}}>Listings you can book without waiting for Host approval</FormHelperText>
              
                <FormControlLabel control={<Switch  />} label="Self check-in" />
                <FormHelperText style={{position: 'relative', left:'55px',bottom:'10px'}}>Easy access to the property once you arrive</FormHelperText>
                </FormGroup>

              </Box>

              <Divider sx={{ py: 5 }} />

              <Box>
              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 24 }}
              >
             Accessibility features
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="body2"
                component="p"
                style={{  fontSize: 16, color:'gray' }}
                sx={{ py: 1 }}
              >
                 This info was provided by the Host and reviewed by Airbnb.
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 17, marginTop:30, marginBottom:10 }}
              >
                Guest entrance and parking
              </Typography>
              <Box sx={{ display: 'flex', justifyContent:'space-around' }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Step-free guest entrance"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Accessible parking spot"
                />
               
              </FormGroup>
              <FormGroup>
              <FormControlLabel
                  control={<Checkbox  />}
                  label="Guest entrance wider than 32 inches"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Step-free path to the guest entrance"
                />
                
              </FormGroup>
              </Box>

              </Box>

              <Divider sx={{ py: 5 }} />

              <Box>
              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 24 }}
                sx={{ py: 3 }}
              >
               Top tier stays
              </Typography>

              <FormGroup>
                 <FormControlLabel control={<Switch  />} label="Superhost" />
                 <FormHelperText  style={{position: 'relative', left:'55px',bottom:'10px' ,paddingBottom:'10px'}}>Stay with recognized Hosts</FormHelperText>
              
                <FormControlLabel control={<Switch  />} label="Airbnb Plus" />
                <FormHelperText style={{position: 'relative', left:'55px',bottom:'10px'}}>A selection of places to stay verified for quality and design</FormHelperText>
                </FormGroup>
              </Box>

              <Divider sx={{ py: 5 }} />

              <Box>
              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 24 }}
              >
             Host language
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent:'space-around',py:3 }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox  />}
                  label="English"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="German"
                />
               
              </FormGroup>
              <FormGroup>
              <FormControlLabel
                  control={<Checkbox  />}
                  label="French"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Arabic"
                />
                
              </FormGroup>
              </Box>

              </Box>

            </Box>
            <Box sx={{p:3, backgroundColor:'white', position:'sticky', bottom:0, zIndex:50, display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
            <Button  variant="plain" sx={{textDecoration:'underline',fontSize: "16px", p:1}}>Clear all</Button>
            <Button sx={{backgroundColor: "black",
  color: "white",
  borderRadius: 2,
  fontSize: "16px", p:1}}>show 989 stays</Button>
             
              </Box> 
          </Box> 
          </Fade>
        </Modal>
      </Box>
    </Container>
  );
};

export default OptionsTab;
