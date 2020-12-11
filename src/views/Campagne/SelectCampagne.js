import React, { useState, useEffect } from "react";
import { Row } from 'reactstrap'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/signup.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'

// TEST MOVIE pour insertion du tableau

import Campaign from '../Campagne/campaign'

// FIN DES IMPORTS DE TEST


const useStyles = makeStyles(styles);

function SelectCampagne(props) {


const [campaignList, setCampaignList] = useState([])

// TEST DATA BDD

useEffect(async () => {
    const response = await fetch('/addcampaign')
    const jsonResponse = await response.json()
    setCampaignList(jsonResponse.campaignListItem)
  }, [])

//*** */


    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;


    var campaignListItems = campaignList.map((campaign, i) => {
        return (<Campaign key={i} campaignName={campaign.campaignName} campaignDesc={campaign.description} campaignImg={campaign.img} globalRating={campaign.note} globalCountRating={campaign.vote} />)
    })

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="Esport-Influence"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 100,
                    color: "dark"
                }}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>

                    <Row>
                        {campaignListItems}
                    </Row>
                </div>  
            </div>
        </div>


    );
}

function mapStateToProps(state) {
    return { token: state.token }
}

export default connect(
    mapStateToProps,
    null
)(SelectCampagne)