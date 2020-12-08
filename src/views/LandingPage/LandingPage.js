import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = []; 

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>   
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Esport-Influence"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
        {...rest}
      /> 
      <Parallax filter image={require("assets/img/esport-Home.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Start Your Esport Adventure with us</h1>
              <h4>
               Every brands wants to know how to understand a new market. 
               Esport-Influence is the leader of Influence Marketing in the Gaming Sector. 
               Let Esport-Influence support you and bring your Influence Marketing to a next Level.
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Discover more About us
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection /> */}
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}