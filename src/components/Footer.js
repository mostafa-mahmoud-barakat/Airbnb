import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// react icons
import { BsGlobe } from "react-icons/bs";
import { IoChevronUpOutline } from "react-icons/io5";

import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from "../themes/commonStyles";
import Langs from "./lang/languages";
import { useTranslation } from "react-i18next";
import Footerhostormore from './../pages/pagehost/footerhostormore';


const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = [
    { id: 1, text:t("Privacy"), url: "#" },
    { id: 2, text:t("Terms"), url: "#" },
    { id: 3, text:t("Sitemap"), url: "#" },
    { id: 4, text:t("Destinations"), url: "#" },
  ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        ...fullWidthFlex,
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            width: "100%",

          }}
          style={{position: "fixed", bottom: 0 , backgroundColor:'#ffffff', borderTop:"1.2px solid lightgray"}}
        >
          <Stack>
            <Paper>
              <Link href="#"> 2022 Airbnb Copyright </Link>
            </Paper>
            {footerLinks.map((link) => {
              return (
                <Paper key={link.id}>
                  <Link href={link.url}> {link.text}</Link>
                </Paper>
              );
            })}
          </Stack>

          <Stack>
            <Paper sx={justifyCenter}>
              <Button>
                <Box sx={{ ...justifyCenter, mr: 1 }}>
                  {/* <BsGlobe size={24} /> */}
                </Box>
              <Langs/>
              </Button>
              <Button> $USD </Button>
              <Button onClick={() => setIsDrawerOpen(true)}>
                {t("Supportresources")}
                <Box sx={{ ...justifyCenter, ml: 1 }}>
                  <IoChevronUpOutline size={24} />
                </Box>
              </Button>
              <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  {" "}
                  <List>
                  <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {" "}
                      {t("support")}
                    </Typography>
                    {[
                      t("helpc"),
                      "Air Cover",
                      t("Safetyinformation"),
                      t("supporting"),
                      t("cancellation"),
                      t("our"),
                      t("report"),
                    ].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider orientation="vertical" flexItem />
                  <List>
                  <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {t("community")}
                    </Typography>
                    {[
                      t("disaster"),
                      t("refugees"),
                      t("Combating"),
                      
                    ].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider orientation="vertical" flexItem />
                  <List>
                  <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                   {t("app_title") }
                   </Typography>
                    {[
                      t("buttonone"),
                      t("AirCover"),
                      t("Explore"),
                      t("Visit"),
                      t("responsibly"),
                    ].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider orientation="vertical" flexItem />
                  <List>
                  <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {" "}
                      Airbnb
                    </Typography>
                    {[ 
                      
                      t("Newsroom"),
                      t("Learn"),
                      t("Letter"),
                      t("Careers"),
                      t("Investors"),
                      t("Giftcards"),
                    ].map((text, index) => (
                      
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Drawer>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
