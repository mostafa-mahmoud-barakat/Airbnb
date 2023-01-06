// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';

// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import SearchIcon from '@mui/icons-material/Search';

import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import DehazeIcon from '@mui/icons-material/Dehaze';





// const pages = ['AnyWhere', 'Anyweek', 'Add guests'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const HeaderDet = () => {

        // const [anchorElNav, setAnchorElNav] = React.useState(null);
        // const [anchorElUser, setAnchorElUser] = React.useState(null);


        // const handleOpenNavMenu = (event) => {
        //   setAnchorElNav(event.currentTarget);
        // };
        // const handleOpenUserMenu = (event) => {
        //   setAnchorElUser(event.currentTarget);
        // };

        // const handleCloseNavMenu = () => {
        //   setAnchorElNav(null);
        // };

        // const handleCloseUserMenu = () => {
        //   setAnchorElUser(null);
        // };

        return <>

            <div className = 'header' >  
            {/* <Link to='/'>   */}
            <img className = "header__icon"
            src = "https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt = "" /> 
              {/* </Link>   */}

            <div className = 'header__center' >
            <input placeholder="Start your search" type = "text"/>
            <SearchIcon fontSize="large"  className ='search_icon' />
            </div>

            <div className = 'header__right' >
                <p>Become a host</p>
                <LanguageIcon  />
                {/* <ExpandMoreIcon/> */}
                {/* <Avatar/> */}
                <PopupState className='marg' variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                    <React.Fragment >
                      <Button className="bordRad" variant="contained" {...bindTrigger(popupState)}>
                      <DehazeIcon className='marg'/>
                      <Avatar/>
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Sign Up</MenuItem>
                        <MenuItem className="menoo" onClick={popupState.close}>Log in</MenuItem>
                        <MenuItem onClick={popupState.close}>Host your home</MenuItem>
                        <MenuItem onClick={popupState.close}>Host an experiance</MenuItem>
                        <MenuItem onClick={popupState.close}>Help</MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
           </div> 
    </div>

{/* 
            import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
} */}


















            
              {/* <AppBar position="static" style={{backgroundColor: 'white' }}>
                      <Container maxWidth="xl" >
                        <Toolbar disableGutters>
                        <img src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
                         alt="Logo" style={{ maxWidth: 120 }}/>
                            
                        <Box 
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent:"center",
                        '& > *': {
                          m: 1,
                        },
                      }}
                    >
                      <ButtonGroup disableElevation variant="contained"  aria-label=" button group"  >
                        <Button style={{color:"black" , backgroundColor:"white"}} >AnyWhere</Button>
                        <Button style={{color:"black" , backgroundColor:"white"}}>Anyweek</Button>
                        <Button style={{color:"grey" , backgroundColor:"white"}} 
                         endIcon={<SearchIcon color="primary" size="large"/>}>Add guests</Button>
                      </ButtonGroup>
                      
                    </Box>

                          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                              size="large"
                              aria-label="account of current user"
                              aria-controls="menu-appbar"
                              aria-haspopup="true"
                              onClick={handleOpenNavMenu}
                              color="inherit"
                            >
                              <MenuIcon />
                            </IconButton>
                            <Menu
                              id="menu-appbar"
                              anchorEl={anchorElNav}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                              keepMounted
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                              }}
                              open={Boolean(anchorElNav)}
                              onClose={handleCloseNavMenu}
                              sx={{
                                display: { xs: 'block', md: 'none' },
                              }}
                            >
                               
                              {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                  <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                              ))} 
                            </Menu>
                          </Box>

                         
                          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                              <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                              >
                                {page}
                              </Button>
                            ))} 
                          </Box>

                          <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                              </IconButton>
                            </Tooltip>
                            <Menu
                              sx={{ mt: '45px' }}
                              id="menu-appbar"
                              anchorEl={anchorElUser}
                              anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                              }}
                              keepMounted
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                              }}
                              open={Boolean(anchorElUser)}
                              onClose={handleCloseUserMenu}
                            >
                             {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                  <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                              ))} 
                            </Menu>
                          </Box>
                        </Toolbar>
                      </Container>
                    </AppBar>   */}
                    </> 
      };
        export default HeaderDet;