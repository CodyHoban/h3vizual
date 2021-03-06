import React from "react";
import Lottie from "react-lottie";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/grid";
import Button from "@material-ui/core/button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CallToAction from "./ui/CallToAction";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.arcOrange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContiner: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {/*-----Hero Block-----*/}
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                The Solutions and Ideas
                <br />
                That Make it all Work
              </Typography>
              <Grid
                container
                justifyContent="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                    component={Link}
                    to="/estimate"
                    onClick={() => props.setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    component={Link}
                    to="/revolution"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{marginRight: 10}}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.arcBlue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.animation} sm item>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----Custom Software Block-----*/}
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : undefined}
            className={classes.serviceContiner}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Creative Designs & Solutions</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Breath life into your product.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, realize and celebrate your{" "}
                <span className={classes.specialText}>creations.</span>
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                <span style={{marginRight: 10}}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.arcBlue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt="custon software icon"
                src={customSoftwareIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----iOS/Android Block-----*/}
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : "flex-end"}
            className={classes.serviceContiner}
          >
            <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
              <Typography variant="h4">iOS/Android App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                See your ideas come to life.
              </Typography>
              <Typography variant="subtitle1">
                Get your product into the hands of consumers with access
                {matchesSM ? null : <br />} to your own mobile platform{" "}
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                <span style={{marginRight: 10}}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.arcBlue}
                />
              </Button>
            </Grid>
            <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
              <img
                className={classes.icon}
                alt="mobile phone icon"
                src={mobileAppsIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----Website Block-----*/}
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : undefined}
            className={classes.serviceContiner}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Customize your website anyway you'd like.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.{" "}
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/websites"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                <span style={{marginRight: 10}}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.arcBlue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt="website icon"
                src={websitesIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*-----The Revolution Block-----*/}
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{height: "100em", marginTop: "12em"}}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{textAlign: "center"}}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge is a recipe
                      for revolution.
                    </Typography>
                    <Button
                      variant="outlined"
                      className={classes.learnButtonHero}
                      component={Link}
                      to="/revolution"
                      onClick={() => props.setValue(2)}
                    >
                      <span style={{marginRight: 10}}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.arcBlue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Information Block-----*/}
          <Grid
            container
            style={{height: "80em"}}
            direction="row"
            className={classes.infoBackground}
            alignItems="center"
          >
            <Grid
              item
              container
              style={{textAlign: matchesXS ? "center" : "inherit"}}
              direction={matchesXS ? "column" : "row"}
            >
              <Grid
                item
                sm
                style={{marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em"}}
              >
                <Grid
                  container
                  direction="column"
                  style={{marginBottom: matchesXS ? "10em" : 0}}
                >
                  <Typography variant="h2" style={{color: "white"}}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      style={{color: "white", borderColor: "white"}}
                      className={classes.learnButton}
                      component={Link}
                      to="/about"
                      onClick={() => props.setValue(3)}
                    >
                      <span style={{marginRight: 10}}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{color: "white"}}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">Say hello!</Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      style={{color: "white", borderColor: "white"}}
                      className={classes.learnButton}
                      component={Link}
                      to="/contact"
                      onClick={() => props.setValue(4)}
                    >
                      <span style={{marginRight: 10}}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Call To Action Block-----*/}
          <CallToAction setValue={props.setValue} />
        </Grid>
      </Grid>
    </>
  );
}
